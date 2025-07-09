# Directory Overview: src/components/GameDisplay

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains the `GameDisplay` React component, responsible for rendering and displaying educational games within the application.

## 2. Directory Structure
```
.
├── GameDisplay.jsx
```

## 3. File Details

### 3.1 File: GameDisplay.jsx
* **Purpose:** A React component that displays an educational game, potentially embedding an iframe or rendering game-specific UI.
* **Role:** UI Component.
* **Usage:** Used in pages like `PlayGamesPage.jsx` to present interactive games to the user.
* **Interconnections:** Receives game data as props; might interact with game-specific APIs or state management.
* **In-File Structure:**
    * **Functions/Components/Classes:** `GameDisplay` (React functional component).
    * **Props:** `game` (object containing game details like URL, title, description), `onGameEnd` (callback for when the game finishes).
