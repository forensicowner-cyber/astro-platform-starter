# 03 — SHOT LIST + SEEDANCE 2 PROMPTS

42 shots covering the full 5:00. Each shot = one Seedance 2 generation (4–15s).
**Generate the reference images in `04-character-style-refs.md` FIRST**, then attach them
as image references on every relevant shot for consistency.

## How to use this file
1. For each shot, **copy the `PROMPT` block** into Seedance 2.
2. **Attach the listed reference images** (REF column) so the character/world stays consistent.
3. Set duration to the **LEN** value, aspect ratio **16:9**, resolution **1080p**.
4. Generate 2–3 variations, keep the best, name the file exactly as the **SHOT ID**
   (e.g. `SH-07.mp4`) so editing is painless.
5. Audio note (`AUD`) tells Seedance what sound to generate natively. You'll still add a
   clean narration + music bed later (see `05-audio-plan.md`).

## Reusable blocks (already baked into each prompt, shown here for reference)
- **[STYLE]** = `cinematic 3D animated film, Pixar/DreamWorks style, soft global illumination, shallow depth of field, warm orange vs cool teal contrast, 16:9, volumetric light, highly detailed, family-film look`
- **[RIGGS]** = `RIGGS, a bulky humanoid courier in a worn orange jumpsuit with a WARP EXPRESS chest logo, scuffed white space-boots, an oversized bubble helmet with a cracked visor, bored half-lidded eyes, chewing gum`
- **[ZIBBITS]** = `the Zibbits, tiny 2mm-tall glowing teal four-armed aliens with big eyes, living in a gleaming miniature crystal city`

Reference image keys (made in file 04): `R-RIGGS`, `R-COCKPIT`, `R-SHIP`, `R-CITY`, `R-PIM`, `R-PLANET`, `R-MEDAL`, `R-CRATER`.

---

# ACT 1 — SETUP (0:00 – 1:15)

### SH-01 · 0:00–0:08 · LEN 8s · REF: R-PLANET
Establishing space shot.
```
PROMPT: Slow cinematic drift through deep space toward a tiny glowing planet the size of
a pebble, twinkling city lights on its surface, a massive ringed gas giant looming behind
it, stars and soft nebula. [STYLE]. Camera slowly pushes in. Peaceful, awe-inspiring mood.
AUD: gentle ambient space hum, soft twinkling chimes, no dialogue.
```

### SH-02 · 0:08–0:16 · LEN 8s · REF: R-CITY
Push into the city.
```
PROMPT: Macro push-in onto a gleaming miniature crystal city of glowing teal spires and
tiny airships, [ZIBBITS] scurrying happily through bright streets, festive banners being
raised. [STYLE]. Smooth dolly-in, shallow depth of field, sparkling highlights.
AUD: cheerful tiny crowd murmur, delicate bell-like music, festive ambience.
```

### SH-03 · 0:16–0:24 · LEN 8s · REF: R-PIM, R-CITY
Elder Pim addresses crowd.
```
PROMPT: Low ground-level shot of ELDER PIM, a slightly taller glowing teal Zibbit in a robe
of light holding a luminous ceremonial staff, raising it triumphantly before a cheering
crowd of tiny teal aliens in a crystal plaza. [STYLE]. Heroic upward angle, godrays.
AUD: tiny triumphant cheering crowd, uplifting orchestral swell, a small high voice speaking.
```

### SH-04 · 0:24–0:32 · LEN 8s · REF: R-CITY
The sky darkens (foreshadow).
```
PROMPT: From inside the tiny crystal city looking up at the sky, the Zibbit crowd gazes
upward in wonder as a faint colossal shadow begins to form among the clouds far above.
[STYLE]. Tilt up to the sky, hopeful faces lit by soft teal glow.
AUD: awed collective gasp, mysterious low rumble building, hushed music.
```

### SH-05 · 0:32–0:40 · LEN 8s · REF: R-COCKPIT, R-RIGGS
Reveal Riggs (hard tonal cut).
```
PROMPT: Hard cut to a messy cramped spaceship cockpit cluttered with fast-food wrappers and
blinking dashboards. [RIGGS] slouches lazily in the pilot seat, chewing gum, sipping a blue
slushie, scrolling a glowing handheld comm-device, totally bored. [STYLE]. Warm orange interior
light. Medium shot.
AUD: lazy electronic cockpit hum, slushie slurp, gum chewing, bored sigh.
```

### SH-06 · 0:40–0:48 · LEN 8s · REF: R-RIGGS, R-COCKPIT
Riggs on the call.
```
PROMPT: Close-up of [RIGGS] talking carelessly into his comm-device with his mouth full,
half-lidded eyes, shrugging. A red dashboard alert blinks behind him, ignored. [STYLE].
Comedic timing, subtle facial animation, lip-sync.
AUD: Riggs saying in a bored male voice "yeah, I'm totally working right now", dashboard beep.
```

### SH-07 · 0:48–0:56 · LEN 8s · REF: R-COCKPIT
Ship AI assigns the delivery.
```
PROMPT: Insert shot of a glowing dashboard screen in the cockpit displaying a parcel icon and
the text "DELIVERY 4012 — DEST: PEBBLE-9", a small holographic map pinging a tiny planet.
[STYLE]. Soft screen glow, rack focus from screen to Riggs' bored reflection.
AUD: robotic ship-AI female voice announcing a delivery, soft UI pings.
```

### SH-08 · 0:56–1:05 · LEN 9s · REF: R-SHIP, R-PLANET
Ship turns toward planet.
```
PROMPT: Exterior shot of a chunky orange delivery spaceship with WARP EXPRESS markings
banking and turning to face a small glowing planet in the distance, engines flaring.
[STYLE]. Sweeping camera move following the ship, lens flare, deep space backdrop.
AUD: heavy engine thrust whoosh, mechanical clunks, low ominous music sting.
```

### SH-09 · 1:05–1:15 · LEN 10s · REF: R-CITY
Colossal shape blots their sky.
```
PROMPT: From the tiny crystal city, a gigantic dark spaceship silhouette slowly eclipses the
sun, casting the entire city into shadow as awestruck [ZIBBITS] point upward and kneel.
[STYLE]. Epic scale contrast, dramatic dimming light, dust beginning to lift.
AUD: massive low descending rumble, tiny reverent gasps, dramatic choir swell.
```

---

# ACT 2 — ESCALATION (1:15 – 3:30)

### SH-10 · 1:15–1:24 · LEN 9s · REF: R-SHIP, R-CITY
The landing foot descends.
```
PROMPT: Worm's-eye view from the tiny city as an enormous boot-shaped landing gear lowers
from the clouds like a descending moon, vast and unstoppable, dwarfing the crystal spires.
[STYLE]. Extreme low angle, immense scale, swirling dust and debris.
AUD: deep hydraulic groan, rising wind, ominous bass, tiny panicked squeaks.
```

### SH-11 · 1:24–1:32 · LEN 8s · REF: R-CITY
Touchdown earthquake.
```
PROMPT: The giant landing foot slams onto the planet surface; a violent shockwave ripples
through the tiny crystal city, towers swaying and cracking, [ZIBBITS] tumbling, yet some
still cheering joyfully, mistaking it for a blessing. [STYLE]. Screen-shaking impact, dust burst.
AUD: enormous earthquake boom, shattering crystal, confused cheering turning to alarm.
```

### SH-12 · 1:32–1:40 · LEN 8s · REF: R-PIM
Pim rejoices, oblivious to danger.
```
PROMPT: Ground-level shot of ELDER PIM throwing his four arms up in joy amid trembling
buildings, glowing staff raised, shouting in celebration as cracks spread around him.
[STYLE]. Bittersweet irony, warm rim light vs cracking teal city.
AUD: tiny ecstatic male voice cheering, distant rumbles, hopeful music undercut by tension.
```

### SH-13 · 1:40–1:50 · LEN 10s · REF: R-RIGGS, R-SHIP
Riggs walks down the ramp.
```
PROMPT: [RIGGS] clomps lazily down the ship's ramp onto a tiny dusty rock barely the size of
a basketball, holding a glowing scanner, a brown parcel under one arm, and a slushie in the
other hand, squinting around unimpressed. [STYLE]. Wide shot emphasizing the absurd scale.
AUD: heavy boot thuds, scanner beeps, bored grumble, wind.
```

### SH-14 · 1:50–1:58 · LEN 8s · REF: R-RIGGS
Riggs squints for the address.
```
PROMPT: Comedic close-up of [RIGGS] lifting his cracked visor, squinting at the tiny ground,
scratching his helmet, looking for a house number. [STYLE]. Shallow focus on his bored face.
AUD: Riggs muttering in a bored voice "okay... where's the address", gum chew, faint wind.
```

### SH-15 · 1:58–2:07 · LEN 9s · REF: R-CITY
Footstep crushes a suburb (their POV).
```
PROMPT: Ground-level macro view inside the crystal city as a colossal white boot descends
from above and flattens an entire glowing suburb in one stomp, tiny [ZIBBITS] fleeing and
scattering as buildings explode into sparkling dust. [STYLE]. Catastrophic scale, slow-mo debris.
AUD: gigantic crushing boom, shattering crystal, tiny terrified screams, dust whoosh.
```

### SH-16 · 2:07–2:15 · LEN 8s · REF: R-RIGGS
He doesn't notice.
```
PROMPT: Wide shot of [RIGGS] obliviously stepping forward and scanning the horizon, the tiny
devastated city beneath his boot completely unnoticed, as he sips his slushie. [STYLE].
Dramatic irony framing, vast empty-looking rock around him.
AUD: casual slushie slurp, scanner beep, indifferent humming, faint distant squeaks.
```

### SH-17 · 2:15–2:24 · LEN 9s · REF: R-RIGGS, R-CITY
Leans on the "rock" (capital dome).
```
PROMPT: [RIGGS] casually rests his huge gloved hand on a small glowing dome to lean while he
checks his scanner; the dome — actually the Zibbit capital — shatters under his weight in a
burst of teal light. He doesn't react. [STYLE]. Comedic obliviousness, sparkling collapse.
AUD: crystal dome shattering, bored "this place is a dump", tiny faraway cries.
```

### SH-18 · 2:24–2:32 · LEN 8s · REF: R-CITY
Slushie-drop tidal wave.
```
PROMPT: Macro shot inside the city as a single colossal blue slushie droplet falls from far
above and crashes into a plaza, flooding the streets like a tidal wave, tiny [ZIBBITS] swept
along glowing water. [STYLE]. Slow-motion liquid sim, neon blue flood, dramatic scale.
AUD: huge water splash and rushing flood, tiny gurgling screams, ominous music.
```

### SH-19 · 2:32–2:41 · LEN 9s · REF: R-PIM, R-CITY
Zibbits launch their fleet.
```
PROMPT: Heroic low shot of dozens of tiny glowing teal Zibbit airships and fighters lifting
off from the ruined city in a brave last formation, flying up toward an enormous boot in the
background. [STYLE]. Epic miniature war vibe, glowing engine trails, smoky ruins below.
AUD: tiny heroic engine swarm, valiant orchestral theme, determined battle cries.
```

### SH-20 · 2:41–2:49 · LEN 8s · REF: R-RIGGS
The fleet hits his ankle.
```
PROMPT: Close-up on [RIGGS]'s ankle as tiny sparkles (the entire Zibbit fleet) burst against
his boot like harmless glitter; he pauses, looks down mildly puzzled. [STYLE]. Comedic anticlimax,
tiny explosions vs giant indifferent leg.
AUD: tiny fizzing pops, Riggs muttering "huh, mosquitoes? in space?", a slap.
```

### SH-21 · 2:49–2:57 · LEN 8s · REF: R-RIGGS
He scratches the "itch".
```
PROMPT: Medium shot of [RIGGS] lazily scratching his ankle with the other boot, annihilating
the remaining fleet without looking, while reading his comm-device. [STYLE]. Tragicomic irony,
warm careless body language.
AUD: scratching scuff, faint final tiny explosions, indifferent gum chew.
```

### SH-22 · 2:57–3:06 · LEN 9s · REF: R-PIM
Pim's desperate plea.
```
PROMPT: Dramatic upward shot of ELDER PIM climbing the last broken spire, waving his glowing
staff at the gigantic blurry face in the sky, shouting with all his might, tears in his big eyes.
[STYLE]. Emotional hero moment, godrays, smoke, single surviving light.
AUD: tiny straining male voice "we are HERE, please see us", wind, mournful strings.
```

### SH-23 · 3:06–3:15 · LEN 9s · REF: R-RIGGS
Riggs hears a faint squeak.
```
PROMPT: Close-up of [RIGGS] pausing, tilting his helmet as if hearing a faint tiny sound, glancing
down at the dusty rock, seeing nothing but haze, then shrugging and looking back at his comm.
[STYLE]. Beat of false hope, shallow focus on his face.
AUD: a faint tiny squeak, Riggs "...nah", dismissive grunt, wind.
```

### SH-24 · 3:15–3:23 · LEN 8s · REF: R-COCKPIT
Dashboard pings "window closing".
```
PROMPT: Insert of the comm-device screen flashing a red "DELIVERY WINDOW CLOSING" warning with
a countdown, reflected in Riggs' bored visor. [STYLE]. Tense UI glow, rack focus.
AUD: urgent beeping alert, robotic voice warning, impatient sigh.
```

### SH-25 · 3:23–3:30 · LEN 7s · REF: R-RIGGS
He decides to bail.
```
PROMPT: Medium shot of [RIGGS] rolling his eyes and waving a hand dismissively, turning the
scanner off, clearly deciding nobody is home. [STYLE]. Comedic resignation.
AUD: Riggs "yeah, yeah, nobody's even home", scanner power-down tone.
```

---

# ACT 3 — TWIST (3:30 – 5:00)

### SH-26 · 3:30–3:39 · LEN 9s · REF: R-RIGGS
Scanner: RECIPIENT NOT FOUND.
```
PROMPT: Close-up of the glowing handheld scanner displaying bold red text "RECIPIENT NOT FOUND",
then [RIGGS]'s gloved hand slapping a big "UNDELIVERABLE" stamp across the brown parcel. [STYLE].
Crisp product-shot lighting, satisfying stamp motion.
AUD: error buzz, heavy ka-chunk stamp, Riggs "not my problem".
```

### SH-27 · 3:39–3:47 · LEN 8s · REF: R-CITY
The ruined city looks up, still hoping.
```
PROMPT: Wide macro shot of the smoking, half-crushed crystal city, a few surviving tiny [ZIBBITS]
gathered in the central plaza still looking up hopefully at the giant. [STYLE]. Melancholy beauty,
embers drifting, soft teal glow fading.
AUD: soft wind, faint hopeful tiny murmurs, sorrowful piano.
```

### SH-28 · 3:47–3:55 · LEN 8s · REF: R-RIGGS
The careless toss begins.
```
PROMPT: Medium shot of [RIGGS] turning to leave and casually tossing the heavy brown parcel
over his shoulder without looking, already raising his comm to his ear. [STYLE]. Nonchalant motion,
the parcel arcing out of frame.
AUD: grunt of a toss, whoosh, Riggs starting to talk on the comm.
```

### SH-29 · 3:55–4:04 · LEN 9s · REF: R-CITY
The parcel falls (their POV).
```
PROMPT: Worm's-eye macro view as an enormous brown parcel plummets from the sky toward the last
standing district of the tiny city, growing huge, tiny [ZIBBITS] looking up in horror, shadow
swallowing them. [STYLE]. Terrifying scale, motion blur, impending impact.
AUD: rising whoosh of falling mass, collective tiny scream, ominous crescendo.
```

### SH-30 · 4:04–4:11 · LEN 7s · REF: R-CITY, R-CRATER
Impact. Silence.
```
PROMPT: The giant parcel smashes onto the last district in a massive dust-and-light explosion,
then settles; everything goes still and silent, a huge plume of dust rising over the flattened city.
[STYLE]. Devastating impact, slow dust bloom, sudden quiet.
AUD: enormous crushing boom, then abrupt eerie silence, dust settling, single ring tone.
```

### SH-31 · 4:11–4:20 · LEN 9s · REF: R-RIGGS, R-SHIP
Riggs walks back up the ramp.
```
PROMPT: Wide shot of [RIGGS] clomping back up his ship's ramp, still chatting on his comm,
not once looking back at the dust cloud behind him. [STYLE]. Tragic irony, golden engine glow,
tiny crater in the distance.
AUD: boot thuds on ramp, Riggs "...nah, total ghost town", hydraulic ramp close.
```

### SH-32 · 4:20–4:29 · LEN 9s · REF: R-SHIP, R-CRATER
Liftoff scorches the remains.
```
PROMPT: Exterior shot of the chunky orange WARP EXPRESS ship firing its engines and lifting off
from the tiny rock, the exhaust backwash scorching the last glittering fragments of the crystal
city to gray ash. [STYLE]. Powerful liftoff, heat distortion, embers scattering.
AUD: roaring engine ignition, debris blasting, fading music turning bleak.
```

### SH-33 · 4:29–4:36 · LEN 7s · REF: R-PLANET, R-CRATER
The planet, now a crater.
```
PROMPT: Slow aerial pull-back revealing the once-glittering planet now a gray, smoking crater,
its lights extinguished, the tiny ship shrinking to a dot among the stars. [STYLE]. Mournful wide
shot, desaturated, lonely.
AUD: quiet space hum, distant fading engine, single sustained sad note.
```

### SH-34 · 4:36–4:45 · LEN 9s · REF: R-MEDAL, R-CRATER
Push on the cracked parcel.
```
PROMPT: Slow cinematic push-in on the discarded brown parcel lying cracked open in the gray
rubble, revealing a small gleaming golden medal inside catching a last ray of light. [STYLE].
Reverent macro, dramatic spotlight, dust motes.
AUD: soft wind, delicate shimmering tone, sorrowful strings beginning.
```

### SH-35 · 4:45–4:53 · LEN 8s · REF: R-MEDAL
Read the engraving.
```
PROMPT: Extreme close-up slowly reading the engraving on the golden medal: "GALACTIC HONOR — TO
THE PEOPLE OF PEBBLE-9 — MOST PEACEFUL CIVILIZATION IN THE GALAXY", soft glints across the metal.
[STYLE]. Emotional reveal, shallow focus pulling across the words.
AUD: quiet, just a heartbreaking music swell and soft wind, no dialogue.
```

### SH-36 · 4:53–5:00 · LEN 7s · REF: R-MEDAL, R-CRATER, R-PIM
Final image — the survivor.
```
PROMPT: One tiny soot-covered Zibbit survivor crawls from the dust to the base of the giant
golden medal and rests a small hand on it, looking up at the empty sky where the ship has vanished.
Camera slowly pulls back into darkness. [STYLE]. Devastating, beautiful, intimate final shot.
AUD: faint tiny breath, final mournful piano note fading to silence.
```

### SH-37 · TITLE CARD (make in editor, not Seedance)
Black screen, the words **SPECIAL DELIVERY** fade in, hold 3s, fade out. (See `06-editing-guide.md`.)

---

## OPTIONAL EXTRA / SAFETY SHOTS (generate if you have time)
Use these to add breathing room or replace a weak generation.

### SH-38 · Riggs comedic reaction insert (8s) · REF: R-RIGGS
```
PROMPT: Comedic extreme close-up of [RIGGS] blowing a gum bubble that pops on his cracked visor,
totally unbothered. [STYLE]. AUD: gum bubble pop, bored exhale.
```
### SH-39 · Zibbit family micro-moment (8s) · REF: R-CITY
```
PROMPT: Tender macro shot of a tiny Zibbit child waving a little flag up at the giant before the
shadow falls. [STYLE]. AUD: sweet tiny giggle, hopeful chime.
```
### SH-40 · Ship interior takeoff (8s) · REF: R-COCKPIT, R-RIGGS
```
PROMPT: [RIGGS] flopping back into his cockpit seat, kicking his boots up, sipping slushie as
stars streak past the cracked windshield. [STYLE]. AUD: seat creak, slurp, warp whoosh.
```
### SH-41 · Wide scale gag (9s) · REF: R-RIGGS, R-PLANET
```
PROMPT: Comedic wide shot showing the absurd scale: giant [RIGGS] standing over a planet the
size of a basketball, hands on hips, looking confused. [STYLE]. AUD: wind, confused grunt.
```
### SH-42 · Star field transition (6s) · REF: R-PLANET
```
PROMPT: Abstract slow drift across a quiet starfield with soft nebula, usable as a transition
or end-card background. [STYLE]. AUD: ambient space pad, gentle chimes.
```

---

## Shot summary table

| ID | Time | Len | Beat |
|----|------|-----|------|
| 01–04 | 0:00–0:32 | 8s ea | Space, Zibbit city, Pim, sky darkens |
| 05–09 | 0:32–1:15 | 8–10s | Meet Riggs, the call, assignment, descent |
| 10–18 | 1:15–2:32 | 8–10s | Landing quake, walk, crushing the city |
| 19–25 | 2:32–3:30 | 7–9s | Fleet attack, Pim's plea, Riggs bails |
| 26–36 | 3:30–5:00 | 7–9s | Stamp, toss, impact, liftoff, medal reveal |
| 37 | end | — | Title card (editor) |
| 38–42 | — | — | Optional safety/extra shots |

**Estimated total core runtime:** ~4:55 + title card ≈ **5:00**. 

Next: `04-character-style-refs.md`
