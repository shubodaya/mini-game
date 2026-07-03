# Project Diary

## 2026-07-03

- Created `mini-game` from `C:\Dev\PROJECT_TEMPLATE`.
- Built a dependency-free browser game using HTML, CSS, and JavaScript.
- Designed the game around one clear mechanic: click the moving target before the 30 second timer expires.
- Kept state explicit in JavaScript: score, timer, running state, and target placement.
- Verified required files exist: `README.md`, `index.html`, `styles.css`, and `script.js`.
- Ran `node --check script.js`; it completed successfully.
- Created public GitHub repository `shubodaya/mini-game`.
- Enabled GitHub Pages from the `main` branch root.
- Verified the live site returned HTTP 200 at `https://shubodaya.github.io/mini-game/`.
- Added Easy, Medium, and Hard difficulty levels.
- Made the target move automatically at difficulty-specific intervals: 1400ms, 900ms, and 550ms.
- Difficulty changes restart the round so timing and score remain consistent.
