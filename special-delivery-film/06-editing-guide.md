# 06 — EDITING / ASSEMBLY GUIDE + PRODUCTION CHECKLIST

This is the "put it all together" phase. Recommended editor: **CapCut** (easiest, free) or
**DaVinci Resolve** (free, more pro). Both handle 1080p and multitrack audio.

---

## STEP 1 — Project setup
1. New project, **1920×1080, 24 fps** (24fps = cinematic; or 30fps if your clips are 30).
2. Make 4 tracks (top to bottom):
   - **V2** — titles, captions, text
   - **V1** — your Seedance video clips
   - **A1** — narration (voiceover)
   - **A2** — music
   - **A3** — SFX (and Seedance native audio if you keep it)

## STEP 2 — Lay the picture (rough cut)
1. Import all `SH-XX.mp4` clips. They're already named in story order — drop them on **V1**
   from SH-01 → SH-36.
2. Don't fuss over trimming yet. Just get them all on the timeline in order.
3. Add the **title card** (SH-37) at the very end: a black clip 5s long with text
   "SPECIAL DELIVERY" fading in/out (use V2 text over a black background clip).
4. Watch it once start-to-finish. You now have a silent rough cut. 🎉

## STEP 3 — Trim to the beats
1. Trim each clip so the action hits cleanly. Aim for the timecodes in `02-script.md`.
2. Cut on motion/impact where possible (e.g., cut SH-11 right on the earthquake boom).
3. Keep total length around **5:00**. If long, trim the slowest clips first.
4. Use the optional shots (SH-38–42) to patch any clip that came out weak or too short.

## STEP 4 — Add narration (A1)
1. Drop each `VO-XX` recording at its timecode (see `05-audio-plan.md`).
2. Nudge clips slightly so the picture matches what the narrator says.
3. Narration is the spine — let it lead; adjust visuals around it.

## STEP 5 — Music (A2)
1. Lay M1–M5 across their sections. Crossfade between cues (0.5–1s overlap).
2. Lower music volume under narration (see ducking below).
3. Make sure **M5 (sad reveal)** lands exactly on the medal push-in (SH-34).

## STEP 6 — SFX + native audio (A3)
1. Decide per clip: keep Seedance's native audio, or mute it and use your own SFX.
   - Keep native audio for ambience/foley that sounds good.
   - Replace with punchy SFX for the big hits (booms, shatters) if native is weak.
2. Add the key SFX from the table in `05-audio-plan.md`.
3. **Honor the silence at SH-30** — cut all sound for ~1s before M4 creeps in.

## STEP 7 — Audio mix (ducking)
- Narration (A1): loudest, around **-6 dB** peaks.
- Music (A2): **6 dB under** narration; auto-duck when narration plays.
- SFX (A3): brief punches above music, then settle.
- Master output target: **about -14 LUFS** (YouTube-friendly loudness).

## STEP 8 — Color & polish
1. Apply a light film LUT or boost contrast slightly for a cinematic feel.
2. Keep the **warm Riggs / cool teal Zibbits** contrast consistent across all clips
   (color-correct any clip that drifted too warm/cool).
3. Add subtle **film grain** + a gentle **vignette** to glue AI clips together (this hides
   small inconsistencies between generations — very effective).

## STEP 9 — Titles & captions
1. Opening: optional small "WARP EXPRESS presents" card (2s) — or jump straight in.
2. Closing title card "SPECIAL DELIVERY" (SH-37).
3. **Burn-in captions / subtitles** for accessibility & retention (CapCut auto-captions work).
4. End screen: 5–10s with a "Subscribe" + next-video thumbnail (helps YouTube watch time).

## STEP 10 — Export
- Format **MP4 (H.264)**, **1920×1080**, **24/30 fps**, bitrate **12–20 Mbps**.
- Audio: AAC, 320 kbps, stereo.
- Filename: `Special-Delivery_FINAL_1080p.mp4`.

---

## TRANSITIONS — keep it clean
- Mostly **hard cuts** (most cinematic).
- Use a quick **dip-to-black** between acts (after SH-09 and after SH-25).
- A slow **fade to black** before the final title.
- Avoid flashy swipe/zoom transitions — they cheapen the film.

---

## ✅ MASTER PRODUCTION CHECKLIST

### Pre-production
- [ ] Read `01-story-bible.md` and `02-script.md` fully
- [ ] Decide: my story as-is, or tweak names/ending?

### References (do FIRST)
- [ ] Generate all 8 (+2 extra) reference images from `04-character-style-refs.md`
- [ ] Save them in `/references` with exact key names

### Clip generation (Seedance 2)
- [ ] Generate SH-01 → SH-36 (attach the right REF images each time)
- [ ] Generate optional SH-38 → SH-42 if needed
- [ ] Keep best variant per shot, name files `SH-XX.mp4`
- [ ] Quick-review all clips for consistency before editing

### Audio
- [ ] Record/generate narration VO-01 → VO-10
- [ ] (Optional) record Riggs & Pim character lines
- [ ] Download 5 music cues (M1–M5), license-cleared
- [ ] Gather SFX

### Edit
- [ ] Rough cut (clips in order)
- [ ] Trim to beats (~5:00)
- [ ] Narration synced
- [ ] Music laid + ducked
- [ ] SFX added, SH-30 silence honored
- [ ] Color + grain + vignette pass
- [ ] Title card + captions + end screen
- [ ] Final mix ~ -14 LUFS
- [ ] Export 1080p MP4

### Publish
- [ ] Thumbnail made (see `07-youtube-publishing.md`)
- [ ] Title, description, tags ready
- [ ] Upload, set end screen, captions
- [ ] Watch the final once more before going public 🎬

---

## Realistic time & effort estimate
| Phase | Rough time |
|-------|-----------|
| References | 1–2 hours |
| Generating ~40 clips (with retries) | 1–3 days (depends on Seedance speed/credits) |
| Voiceover | 1–2 hours |
| Editing + mix | 1–2 days |
| **Total** | **~4–6 days of part-time work** |

> Biggest variables: Seedance credits/queue, and how picky you are about consistency.
> Generate references carefully and you'll save the most time.

Next: `07-youtube-publishing.md`
