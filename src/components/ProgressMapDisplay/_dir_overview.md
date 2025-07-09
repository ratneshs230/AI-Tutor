# Directory Overview: src/components/ProgressMapDisplay

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains the `ProgressMapDisplay` React component, responsible for visualizing a user's learning progress or a course map.

## 2. Directory Structure
```
.
├── ProgressMapDisplay.jsx
```

## 3. File Details

### 3.1 File: ProgressMapDisplay.jsx
* **Purpose:** A React component that visually represents a user's progress through a learning path or a course structure.
* **Role:** UI Component.
* **Usage:** Used in dashboards or profile pages to show learning achievements and next steps.
* **Interconnections:** Receives progress data as props; might interact with `CourseContext` or user data.
* **In-File Structure:**
    * **Functions/Components/Classes:** `ProgressMapDisplay` (React functional component).
    * **Props:** `progressData` (object or array representing learning milestones and completion status).
