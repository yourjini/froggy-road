# Froggy Road

Endless arcade game (Crossy Road style). Part of the SEA + US casual game portal POC.

## Origin

| Field | Value |
|---|---|
| Source | [CodeCanyon item #62291875](https://codecanyon.net/item/froggy-road-html5-game/62291875) |
| Author | demonisblack (Elite Author) |
| License | Regular License |
| Acquired | 2026-05-17 |
| Used as | 1 end product (game portal POC — SEA + US) |
| End-user payments | None |
| Ads | Allowed (deferred until traffic data) |

## Tech

- CreateJS (HTML5)
- Resolution: 1280×720 (landscape) / 720×1280 (portrait)
- Controls: keyboard + mouse + touch
- Difficulty: built-in 5-stage progression (`gameSettings.stage[0..4]`), no extra stage authoring needed

## Layout

- `game/` — deployable static files (entry: `game/index.html`)
- `_source/` — original PSD / documentation / preview (gitignored; retained locally for license attribution and skin work)

## Run locally

```
cd game
python -m http.server 8001
# http://localhost:8001
```

## Planned customizations (tracked in commit history)

- Replace author Google Analytics ID `G-RS6KZYVEZ3` with ours (or remove)
- Replace OG/Twitter meta URLs (vendor's `demonisblack.com/code/2025/...` hardcoded)
- Replace `share.php` (PHP unsupported on Vercel) with static share links
- Add KO/EN i18n
- Add nickname + Top-10 leaderboard (Identity / ScoreStore modules with adapter pattern; portal-injectable identity)
- Resolve `daily_bold` font license (vendor's "personal use only" — Phase 3 decision pending)

## Deployment

- POC: Vercel + Supabase (Singapore region)
- Final: company server (designed to be portable — env vars for API URL, standard Postgres only)

## License notice

**Private repository per CodeCanyon Regular License terms.** Source redistribution is prohibited.
This repo is permitted as backup / single-developer working copy only.
