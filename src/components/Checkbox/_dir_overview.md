# Directory Overview: src/components/Checkbox

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains the `Checkbox` React component, providing a reusable UI element for boolean input.

## 2. Directory Structure
```
.
├── Checkbox.jsx
```

## 3. File Details

### 3.1 File: Checkbox.jsx
* **Purpose:** A reusable React component for rendering a checkbox input element.
* **Role:** UI Component.
* **Usage:** Used throughout the application wherever a checkbox is needed for user input.
* **Interconnections:** Accepts props for checked state, onChange handler, label, etc.
* **In-File Structure:**
    * **Functions/Components/Classes:** `Checkbox` (React functional component).
    * **Props:** `checked`, `onChange`, `label`, `name`, `disabled`.
