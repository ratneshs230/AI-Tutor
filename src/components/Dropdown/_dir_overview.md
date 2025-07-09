# Directory Overview: src/components/Dropdown

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains the `Dropdown` React component, providing a reusable UI element for selecting options from a list.

## 2. Directory Structure
```
.
├── Dropdown.jsx
```

## 3. File Details

### 3.1 File: Dropdown.jsx
* **Purpose:** A reusable React component for rendering a dropdown (select) input element.
* **Role:** UI Component.
* **Usage:** Used throughout the application wherever a dropdown selection is needed.
* **Interconnections:** Accepts props for options, selected value, onChange handler, etc.
* **In-File Structure:**
    * **Functions/Components/Classes:** `Dropdown` (React functional component).
    * **Props:** `options` (array of objects with value and label), `selectedValue`, `onChange`, `placeholder`.
