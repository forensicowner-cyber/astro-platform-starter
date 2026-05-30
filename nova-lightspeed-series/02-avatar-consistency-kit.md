# 02 — AVATAR CONSISTENCY KIT (Nova)

The whole series depends on Nova looking and sounding **identical every time**. Good news: the
"invincible / non-aging" lore means she literally never changes — so we just lock her once.

There are **3 anchors of identity**: FACE, VOICE, and OUTFIT. Lock all three.

---

## STEP 1 — Build Nova's reference image library (do this ONCE)

Generate these in an image tool (Midjourney / Seedance image mode / any text-to-image). Make 4
options each, keep the best, save with the exact KEY name. **Make `NOVA-FACE` first and love it —
everything else is generated to match it.**

### Shared appearance block (paste into EVERY image + video prompt, word-for-word)
```
Nova: a late-20s woman with a warm friendly face, expressive brown eyes, light freckles,
shoulder-length dark brown hair tied back, wearing a fitted white-and-teal flight suit with an
"AURORA" mission patch on the chest and a small glowing pendant; calm curious expression.
Photorealistic, cinematic soft lighting, natural skin texture.
```

| KEY | Prompt (append the shared block above) |
|-----|----------------------------------------|
| `NOVA-FACE` | Front-facing portrait headshot, neutral background, even soft light, looking at camera. |
| `NOVA-3Q` | Three-quarter angle portrait, same lighting, same person. |
| `NOVA-SIDE` | Side profile portrait, same lighting. |
| `NOVA-EXPR` | Expression sheet: same face showing happy, laughing, worried, awestruck (4 panels). |
| `NOVA-SUIT` | Full-body shot standing, showing the whole white-and-teal flight suit + plush mascot clip. |
| `NOVA-HELMET` | Wearing a space helmet with a gold reflective visor (face visible through it). |
| `NOVA-SELFIE` | Arm's-length selfie framing inside a spaceship cockpit (this is the core vlog look). |

### Ship/world references (also lock once)
| KEY | Prompt |
|-----|--------|
| `SHIP-COCKPIT` | Cozy one-person spaceship cockpit interior: a big curved window to space, soft teal-and-amber instrument glow, a pilot seat, a few personal touches (photos, the plush mascot). Photorealistic, cinematic. |
| `SHIP-EXT` | Exterior of the "Aurora": a sleek small one-person interstellar ship with a glowing engine, in deep space. Photorealistic. |

---

## STEP 2 — Use the references on EVERY clip

Seedance 2.0 accepts up to **9 reference images**. For each shot:
- **Talking / selfie shots:** attach `NOVA-FACE` + `NOVA-3Q` + `NOVA-SELFIE` (+ `SHIP-COCKPIT`).
- **Suit/helmet shots:** add `NOVA-SUIT` and/or `NOVA-HELMET`.
- **Pure space POV shots (no Nova):** no character refs needed — just describe the space view.
- Keep the **shared appearance block** in the prompt text too (refs + text together = best lock).

---

## STEP 3 — Lock the VOICE (just as important as the face)

- Pick **one** AI voice and use it **forever** (e.g., ElevenLabs — warm, late-20s, curious tone).
- Save the exact voice settings (voice ID, stability, style) in a note so every episode matches.
- Nova's voice is half her identity — never change it, even slightly.
- For on-camera talking shots, use Seedance's **lip-sync** with this voice, OR generate her mouth
  movement and lay the clean AI voice over it in editing.

---

## STEP 4 — Lock the BRAND (cheap consistency wins)

- **Same outfit every episode** (it's a uniform — like a real creator's signature look).
- **Same intro/sign-off lines** and a **name/logo overlay** ("NOVA" + mission-day counter).
- **Same color grade** (teal-amber space look) and the **same data-card style** every time.
- Same cockpit, same plush mascot, same pendant. Repetition = recognizability = "famous."

---

## Consistency checklist (per shot)
- [ ] Shared appearance block pasted in the prompt
- [ ] Correct reference images attached (face/suit/helmet as needed)
- [ ] Selfie/arm's-length framing for talking shots (consistent distance = consistent face)
- [ ] Same voice + settings for the narration
- [ ] If Nova drifts off-model, lower motion/creativity and re-generate (don't accept off-model takes)

## Pro tips
1. **Favor helmet + visor shots** when a clip is risky — the visor hides minor face drift and
   always reads as "her."
2. **Keep Nova at a consistent distance** from camera (selfie length) so her face renders at a
   similar scale each time — this alone hugely improves match.
3. **Generate 2–3 takes** and keep only the most on-model one.
4. **Add a subtle, consistent color grade + light film grain** in editing — it glues all clips
   (and any tiny differences) into one cohesive look.
