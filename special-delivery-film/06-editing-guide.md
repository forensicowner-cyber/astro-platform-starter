# 06 — EDITING / ASSEMBLY GUIDE + PRODUCTION CHECKLIST

This is the "put it all together" phase. Recommended editor: **CapCut** (easiest, free) or
**DaVinci Resolve** (free, more pro). Both handle 1080p and multitrack audio.

---

## STEP 1 — Project setup
1. New project, **1920×1080, 24 fps** (24fps = cinematic; or 30fps if your clips are 30).
2. Make these tracks (top to bottom):
   - **V2** — titles, text
   - **V1** — your Seedance video clips
   - **A1** — music score (the spine — there's no narration in a silent film)
   - **A2** — SFX
   - **A3** — Seedance native audio (keep the good foley, mute the rest)

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

## STEP 4 — Music (A1) — this is the spine
1. In a silent film, **music leads.** Lay M1–M5 across their sections (see `05-audio-plan.md`).
2. Crossfade between cues (0.5–1s overlap) so transitions feel smooth.
3. Make sure **M5 (sad reveal)** lands exactly on the medal push-in (SH-34), and that
   **M5 is a slow, sad version of the happy M1 melody** — that's the emotional twist.
4. Time your edits so visual jokes hit on a musical accent or a sudden musical stop.

## STEP 5 — SFX (A2)
1. Add the key SFX from the table in `05-audio-plan.md` (booms, shatters, boot thuds, fizzes).
2. Punch SFX briefly above the music on impacts, then let them settle.
3. Wordless character sounds (grunts, gasps, squeaks) are fine — just no spoken words.

## STEP 6 — Native audio (A3) + the silence beat
1. Per clip, decide: keep Seedance's native foley/ambience, or mute it and use your own SFX.
   - Keep native audio when it sounds good; mute messy clips.
2. **Honor the silence at SH-30** — cut ALL sound for ~1s before M4 creeps in. In a silent
   film, a beat of true silence is your most powerful "sound."

## STEP 7 — Audio mix
- Music (A1): the foundation; keep it clear and present.
- SFX (A2): brief punches above the music on hits, then settle back.
- Native audio (A3): low under everything; mute anything distracting.
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
3. **No dialogue to caption** (silent film). The in-world text — the "UNDELIVERABLE" stamp and
   the medal engraving — is already on screen as part of the shots, so make sure those frames
   are held long enough to read.
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
- [ ] Download 5 music cues (M1–M5), license-cleared
- [ ] Make M5 a slow/sad version of M1
- [ ] Gather SFX (booms, shatters, boot thuds, fizzes, shimmer)
- [ ] (No voiceover — silent film)

### Edit
- [ ] Rough cut (clips in order)
- [ ] Trim to beats (~5:00)
- [ ] Music laid + crossfaded (M5 lands on the medal)
- [ ] SFX added, SH-30 silence honored
- [ ] Color + grain + vignette pass
- [ ] Title card + end screen
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
| Music + SFX gathering | 1–2 hours |
| Editing + mix | 1–2 days |
| **Total** | **~4–6 days of part-time work** |

> Biggest variables: Seedance credits/queue, and how picky you are about consistency.
> Generate references carefully and you'll save the most time.

Next: `07-youtube-publishing.md`
