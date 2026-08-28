# Sounds

Audio files for the site live here.

## Background music

The site plays background music through the `#background-music` audio element and a "Play Music / Pause Music" button.

- **Current file:** `sounds/mfcc-sport-football-baseball-music-337978.mp3`
- **To use a different track:** drop your `.mp3` (or `.ogg`/`.wav`) file in this folder, then update the `src` on the `<audio id="background-music">` element in `index.html`.
- The music is set to `loop` so it repeats, and playback/pause is controlled by the button in `script.js` (`toggleBackgroundMusic()`).

## Note

Browsers block autoplay, so the music starts only after the visitor clicks the "Play Music" button. The button updates its label and `aria-pressed` state to stay accessible.
