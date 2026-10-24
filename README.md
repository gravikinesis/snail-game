# Snail Game

A snail spawns one day's crawl away and slowly, endlessly chases your real location.
You can outrun it easily. The danger is sitting still.

## Install on your phone

1. Open the **Releases** page of this repo on your Android phone.
2. Download `snail-game.apk` from the newest release.
3. Open it and allow "Install unknown apps" for your browser if asked.

Every push to `main` builds a new APK automatically (see the **Actions** tab).

## What's in it

- Live map with your location and the snail (OpenStreetMap)
- Snail always starts 24 hours away; three speeds
- Salt: gray 1h (150–700 m), blue 2h (0.7–1.3 km), gold 4h (1.3–2 km, about every 2 days, gone in 1 hour). Max 4 on the map.
- 30 m catch range with a 30-second "move!" warning
- Leaderboard: days survived, distance traveled, close calls, salt
- **Chase mode**: keeps tracking with the app closed (ongoing notification)
- Scheduled alerts even when the app is fully closed: snail 1 hour away, 10 minutes away, on you, gold ready, salt wore off
- Small banner ad at the bottom of the map (Google TEST ads for now)

## Before publishing to Google Play

- Replace the AdMob test IDs (`AD_BANNER_ID` in `www/index.html`, `ADMOB_APP_ID` in `scripts/patch-android.js`)
- Add the ad consent popup (UMP) for EU/US-state users
- Create a real signing key, stored as a GitHub secret, and build a release `.aab`
- Switch map tiles to a provider that allows app traffic (OpenStreetMap's free tiles are not meant for published apps)
- Privacy policy page, store listing, and the 12-tester / 14-day closed test
