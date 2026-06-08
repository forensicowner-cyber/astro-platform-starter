export interface Product {
    id: string;
    name: string;
    category: 'rings' | 'necklaces' | 'earrings' | 'bangles' | 'pendants' | 'bridal';
    metal: '22K Gold' | '24K Gold' | '18K Gold' | '925 Silver' | 'Platinum';
    price: number;
    weight: string;
    image: string;
    tag?: string;
    description: string;
}

export const categories = [
    { id: 'rings', name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80' },
    { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80' },
    { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80' },
    { id: 'bangles', name: 'Bangles', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80' },
    { id: 'bridal', name: 'Bridal Sets', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' },
    { id: 'pendants', name: 'Pendants', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80' }
] as const;

export const products: Product[] = [
    {
        id: 'ring-aurelia',
        name: 'Aurelia Solitaire Ring',
        category: 'rings',
        metal: '18K Gold',
        price: 84500,
        weight: '4.2 g',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
        tag: 'Bestseller',
        description: 'A timeless solitaire crowned with a brilliant-cut diamond set in lustrous 18K gold.'
    },
    {
        id: 'neck-maharani',
        name: 'Maharani Temple Necklace',
        category: 'necklaces',
        metal: '22K Gold',
        price: 412000,
        weight: '38.6 g',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
        tag: 'Heritage',
        description: 'An intricately handcrafted temple necklace inspired by South Indian royal regalia.'
    },
    {
        id: 'ear-noor',
        name: 'Noor Chandelier Earrings',
        category: 'earrings',
        metal: '22K Gold',
        price: 96800,
        weight: '9.1 g',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
        tag: 'New',
        description: 'Cascading chandelier earrings with uncut polki diamonds and pearl drops.'
    },
    {
        id: 'bangle-rajwada',
        name: 'Rajwada Kada Bangles',
        category: 'bangles',
        metal: '22K Gold',
        price: 268000,
        weight: '24.8 g',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80',
        description: 'A pair of regal broad kadas with meenakari enamel and antique finish.'
    },
    {
        id: 'bridal-padmavati',
        name: 'Padmavati Bridal Set',
        category: 'bridal',
        metal: '22K Gold',
        price: 985000,
        weight: '92.4 g',
        image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80',
        tag: 'Signature',
        description: 'A complete bridal ensemble — necklace, earrings, maang tikka and bangles.'
    },
    {
        id: 'pend-tara',
        name: 'Tara Diamond Pendant',
        category: 'pendants',
        metal: '18K Gold',
        price: 54200,
        weight: '3.4 g',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
        tag: 'New',
        description: 'A delicate star pendant pavé-set with VS-clarity diamonds.'
    },
    {
        id: 'neck-chandni',
        name: 'Chandni Silver Choker',
        category: 'necklaces',
        metal: '925 Silver',
        price: 18900,
        weight: '46.0 g',
        image: 'https://images.unsplash.com/photo-1576022162028-7808c6c7f3a1?auto=format&fit=crop&w=900&q=80',
        description: 'An oxidised silver statement choker with hand-set kundan stones.'
    },
    {
        id: 'ring-meenakari',
        name: 'Meenakari Cocktail Ring',
        category: 'rings',
        metal: '22K Gold',
        price: 71200,
        weight: '6.8 g',
        image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80',
        description: 'A bold cocktail ring with vibrant meenakari enamel and a central ruby.'
    }
];

export const formatINR = (value: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
