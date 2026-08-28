# Sounds

Place audio files here to add sound effects to the site.

## How to add a sound

1. Drop an audio file (`.mp3`, `.ogg`, or `.wav`) into this folder.
2. Update `index.html` — the `<audio id="click-sound">` element currently points to `sounds/clicksound.mp3`. Change it to your actual file name, e.g.:

```html
<audio id="click-sound" src="sounds/your-file.mp3" preload="auto"></audio>
```

3. The site already plays this audio when any button is clicked once the file exists.

## Note

The referenced `clicksound.mp3` does not exist yet, so nothing plays until you add your own audio file here.
