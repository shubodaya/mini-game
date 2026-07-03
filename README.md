# Mini Game

A simple browser click-the-target game built with HTML, CSS, and JavaScript.

## Features

- Randomly positioned target
- Click target to score points
- 30 second countdown timer
- Final score screen
- Restart button
- Easy, Medium, and Hard difficulty levels
- Faster automatic target movement on higher difficulties
- Responsive layout for desktop and mobile browsers

## Run

Open `index.html` in a browser.

## Test

For the initial version, verification checks that the required files exist and that the JavaScript parses successfully:

```powershell
Test-Path .\README.md
Test-Path .\index.html
Test-Path .\styles.css
Test-Path .\script.js
node --check .\script.js
```

## Project Structure

- `index.html` - Game markup.
- `styles.css` - Game layout and visual design.
- `script.js` - Timer, scoring, target placement, and restart logic.
- `NOTES.md` - Project diary.
- `TODO.md` - Remaining tasks and future improvements.

## Difficulty

- Easy moves the target every 1.4 seconds.
- Medium moves the target every 0.9 seconds.
- Hard moves the target every 0.55 seconds.

Changing difficulty starts a fresh round with the selected speed.
