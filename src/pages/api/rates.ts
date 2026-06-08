import type { APIRoute } from 'astro';

// Render on-demand so rates are fresh on every request (cached at the edge briefly).
export const prerender = false;

const TROY_OUNCE_GRAMS = 31.1035;

interface RatePayload {
    currency: 'INR';
    unitNote: string;
    updatedAt: string;
    source: string;
    gold: {
        per10g_24k: number;
        per10g_22k: number;
        per1g_24k: number;
        per1g_22k: number;
    };
    silver: {
        per1kg: number;
        per10g: number;
        per1g: number;
    };
    usdInr: number;
    live: boolean;
}

// Sensible fallback values (approx. Indian retail levels) used if live APIs are unreachable.
const FALLBACK = {
    goldUsdPerOz: 2330,
    silverUsdPerOz: 29.5,
    usdInr: 83.4
};

async function fetchJson(url: string, timeoutMs = 4000): Promise<any | null> {
    try {
        const controller = new AbortController();
        const t = setTimeout(() => controller.abort(), timeoutMs);
        const res = await fetch(url, { signal: controller.signal, headers: { accept: 'application/json' } });
        clearTimeout(t);
        if (!res.ok) return null;
        return await res.json();
    } catch {
        return null;
    }
}

function buildPayload(goldUsdOz: number, silverUsdOz: number, usdInr: number, live: boolean, source: string): RatePayload {
    // Add a small import-duty + GST style premium to approximate Indian retail spot.
    const indiaPremium = 1.13;
    const goldInrPerG24 = (goldUsdOz / TROY_OUNCE_GRAMS) * usdInr * indiaPremium;
    const goldInrPerG22 = goldInrPerG24 * (22 / 24);
    const silverInrPerG = (silverUsdOz / TROY_OUNCE_GRAMS) * usdInr * indiaPremium;

    const r = (n: number) => Math.round(n);
    return {
        currency: 'INR',
        unitNote: 'Gold per 10g · Silver per kg',
        updatedAt: new Date().toISOString(),
        source,
        gold: {
            per10g_24k: r(goldInrPerG24 * 10),
            per10g_22k: r(goldInrPerG22 * 10),
            per1g_24k: r(goldInrPerG24),
            per1g_22k: r(goldInrPerG22)
        },
        silver: {
            per1kg: r(silverInrPerG * 1000),
            per10g: r(silverInrPerG * 10),
            per1g: r(silverInrPerG)
        },
        usdInr: Math.round(usdInr * 100) / 100,
        live
    };
}

export const GET: APIRoute = async () => {
    let goldUsdOz = FALLBACK.goldUsdPerOz;
    let silverUsdOz = FALLBACK.silverUsdPerOz;
    let usdInr = FALLBACK.usdInr;
    let live = false;
    let source = 'estimated';

    // 1) Live metal spot prices (free, no key required).
    const [gold, silver] = await Promise.all([
        fetchJson('https://api.gold-api.com/price/XAU'),
        fetchJson('https://api.gold-api.com/price/XAG')
    ]);

    if (gold?.price && silver?.price) {
        goldUsdOz = Number(gold.price);
        silverUsdOz = Number(silver.price);
        live = true;
        source = 'gold-api.com';
    }

    // 2) Live USD -> INR exchange rate.
    const fx = await fetchJson('https://open.er-api.com/v6/latest/USD');
    if (fx?.rates?.INR) {
        usdInr = Number(fx.rates.INR);
        if (live) source += ' + open.er-api.com';
    }

    const payload = buildPayload(goldUsdOz, silverUsdOz, usdInr, live, source);

    return new Response(JSON.stringify(payload), {
        status: 200,
        headers: {
            'content-type': 'application/json',
            // Edge cache 5 min, serve stale for an hour while revalidating.
            'cache-control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=3600'
        }
    });
};
