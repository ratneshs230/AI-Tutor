# Directory Overview: src/components/UserIcon

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains the `UserIcon` React component, responsible for displaying a user's profile icon or avatar.

## 2. Directory Structure
```
.
├── UserIcon.jsx
```

## 3. File Details

### 3.1 File: UserIcon.jsx
* **Purpose:** A React component that displays a user's profile icon, potentially with a default image if none is provided.
* **Role:** UI Component.
* **Usage:** Used throughout the application wherever a user's avatar needs to be displayed.
* **Interconnections:** Can receive an image URL as a prop; might use a default image from `public/images/user-icon.png`.
* **In-File Structure:**
    * **Functions/Components/Classes:** `UserIcon` (React functional component).
    * **Props:** `imageUrl` (optional, URL of the user's avatar), `size` (optional, for styling).
