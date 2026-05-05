# 💘 valentine

> A hand-coded pixel-art Valentine's gift site — built with vanilla HTML, CSS, and JavaScript. No frameworks. No build step. Just love.

I made this as a Valentine's Day gift for my partner. It's a single-page interactive site with custom chibi art, three mini-games, and a music-on background. **You can fork it and personalize it for your own partner in about 30 minutes** — see [Make your own](#-make-your-own).

<p align="center">
  <img src="images/chibi-abir.png" alt="Chibi Abir" width="240">
</p>

## ✨ Features

- 💌 **The classic "Yes / No" prompt** — the *No* button runs away when you try to click it
- 🎮 **Three mini-games:**
  - 🎯 *Catch the Floating Hearts* — arrow-key arcade game, score 10 to win
  - 💌 *Love Letter Puzzle* — drag-and-drop fill-in-the-blanks
  - 💘 *Find Me!* — pixel hide-and-seek with a chibi reveal
- 🎁 **Gift selection screen** with three reward options after winning
- 🎵 **Background music** with a toggle
- 🖱️ **Custom pixel cursor**
- 📜 **Press Start 2P retro font** + Y2K aesthetic
- 🚫 **Zero dependencies** — open `index.html` and you're done

## 🚀 Live demo

[**youthinkyoucancode.github.io/valentine**](https://youthinkyoucancode.github.io/valentine)

## 🛠 Run locally

It's static. Just open `index.html` in your browser — no `npm install`, no build, nothing.

```bash
git clone https://github.com/youthinkyoucancode/valentine.git
cd valentine
# open index.html directly, or serve it:
python -m http.server 8000
# then visit http://localhost:8000
```

## 💝 Make your own

Want to use this as a Valentine's gift for *your* partner? Fork the repo and personalize it. The whole thing is ~300 lines of JS across 4 small files.

| Want to change | Edit |
|---|---|
| The chibi art (currently me) | `images/chibi-abir.png` — draw/pixelate yourself |
| The gift options (cookies, pasta, etc.) | `index.html` (gift buttons) + `script.js` (gift messages) |
| The love-letter words and answers | `games/loveletter.js` |
| The hide-and-seek hiding spots | `games/findme.js` |
| The background music | `audio/love-music.mp3` |
| The colors / font | `styles.css` |
| The page title and meta description | `index.html` `<head>` |

Then push to GitHub and enable **Settings → Pages → Deploy from main branch** to get a free live URL like `yourname.github.io/valentine`.

## 🧱 Tech

- HTML / CSS / vanilla JavaScript
- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) from Google Fonts
- Hosted on GitHub Pages
- No build, no dependencies, no tracking

## 📜 License

[MIT](LICENSE) — fork it, remix it, gift it. Just don't claim my chibi art is you.

---

Made by [Abir](https://github.com/youthinkyoucancode).
