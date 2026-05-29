# 04 — CHARACTER & STYLE REFERENCE IMAGES

**This is the single most important step for a professional look.** AI video drifts —
the character's face/clothes change shot to shot — UNLESS you lock them with reference
images. Seedance 2.0 accepts up to **9 reference images** per generation. We'll make a
small library of reference frames ONCE, then attach the relevant ones to every shot.

## Workflow
1. Generate each reference image below in an **image generator** (Seedance image mode,
   Midjourney, or any text-to-image tool). Pick aspect ratio **16:9**.
2. For each, generate 4 options and keep the BEST one. Save it with the exact **KEY name**
   (e.g. `R-RIGGS.png`) in a folder called `/references`.
3. When generating a video shot, attach the reference images listed in that shot's `REF:` line.
4. **Golden rule:** always attach `R-RIGGS` to any shot with Riggs, and `R-CITY` to any
   Zibbit-world shot. This keeps the look glued together.

## The shared style line (append to EVERY image prompt)
```
cinematic 3D animated film still, Pixar/DreamWorks style, soft global illumination,
shallow depth of field, warm orange vs cool teal color palette, volumetric light,
highly detailed, 16:9, family-film look, no text, no watermark
```

---

## R-RIGGS — the courier (MOST IMPORTANT)
Make this first and love it; everything depends on it.
```
PROMPT: Full-body character turnaround sheet of "RIGGS", a bulky lazy humanoid space courier,
wearing a worn orange jumpsuit with a circular "WARP EXPRESS" logo on the chest, scuffed white
space-boots, an oversized clear bubble helmet with a visible crack across the visor, a backwards
company cap underneath, bored half-lidded eyes, a lazy slouch, chewing gum. Neutral grey studio
background, even lighting, three views (front, side, 3/4). [shared style line]
```
**Tip:** also export a clean **face close-up** version (`R-RIGGS-FACE`) for the close-up shots
(SH-06, SH-14, SH-20, SH-23, SH-38).

## R-COCKPIT — the messy ship interior
```
PROMPT: Interior of a cramped, messy spaceship cockpit, cluttered with fast-food wrappers and
floating trash, glowing blinking dashboards and holographic screens, a worn pilot seat, a cracked
windshield showing stars, warm orange ambient light. Empty (no character), establishing view.
[shared style line]
```

## R-SHIP — the delivery ship exterior
```
PROMPT: A chunky, slightly run-down orange delivery spaceship with bold "WARP EXPRESS" markings,
boxy cargo body, boot-shaped landing gear, glowing blue thrusters, parked in space. Three-quarter
hero view, deep space background. [shared style line]
```

## R-CITY — the Zibbit crystal city (MOST IMPORTANT for the little world)
```
PROMPT: A gleaming miniature futuristic crystal city made of glowing teal and cyan spires, tiny
domed buildings, little airships, clean energy towers, set on the surface of a tiny pebble-like
planet. Populated by countless 2mm-tall glowing teal four-armed alien creatures with big eyes.
Magical, peaceful, sparkling. Wide establishing macro view. [shared style line]
```
**Tip:** also export a **ground-level street version** (`R-CITY-STREET`) for the macro
crush shots (SH-15, SH-18, SH-29).

## R-PIM — Elder Pim
```
PROMPT: Character sheet of "ELDER PIM", a wise elderly alien leader of the Zibbits: a slightly
taller glowing teal four-armed being with big expressive eyes, wearing a flowing robe made of
soft light, holding a luminous ceremonial staff. Kind, hopeful expression. Neutral background,
front and 3/4 views. [shared style line]
```

## R-PLANET — Pebble-9 from space
```
PROMPT: A tiny glowing planet the size of a pebble seen from space, sparkling teal city lights
across its surface, wisps of cloud, a massive ringed gas giant looming behind it, star field and
soft nebula. Beautiful, lonely, awe-inspiring. [shared style line]
```

## R-MEDAL — the golden award (the twist object)
```
PROMPT: Extreme close-up of a small gleaming golden medal on a ribbon, lying inside a cracked-open
brown cardboard-style space parcel, engraved with the words "GALACTIC HONOR — PEBBLE-9". Soft
dramatic spotlight, dust motes, sitting in grey rubble. Emotional, reverent. [shared style line]
```

## R-CRATER — the destroyed planet
```
PROMPT: A once-glittering tiny planet now reduced to a grey, smoking crater, all lights
extinguished, faint embers, a single giant boot-print impression, melancholy and desaturated,
seen in soft cinematic light. [shared style line]
```

---

## Reference library checklist
Make and save all of these before generating any video:

- [ ] `R-RIGGS.png`  (+ `R-RIGGS-FACE.png`)
- [ ] `R-COCKPIT.png`
- [ ] `R-SHIP.png`
- [ ] `R-CITY.png`  (+ `R-CITY-STREET.png`)
- [ ] `R-PIM.png`
- [ ] `R-PLANET.png`
- [ ] `R-MEDAL.png`
- [ ] `R-CRATER.png`

## Consistency tips (read these — they save hours)
1. **Reuse the SAME reference image** across all shots of a character. Don't regenerate a new
   "Riggs" for each shot — that's what causes drift.
2. **Keep the style line identical** in every prompt, word for word.
3. If a shot drifts anyway, **lower the motion/creativity** setting and re-attach the reference.
4. For the **Zibbit color**, always say "glowing teal" — never let it become green or blue,
   or scale cues get confusing.
5. Lock **one camera language**: wides for scale, macro for the city, close-ups for Riggs.
6. Generate **2–3 variants per shot**, then in editing keep only the most on-model one.

Next: `05-audio-plan.md`
