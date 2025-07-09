# Directory Overview: src/modules/AddCourseModule

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains the `AddCourseModule` React component, which provides the user interface and logic for adding new courses to the system.

## 2. Directory Structure
```
.
├── AddCourseModule.jsx
```

## 3. File Details

### 3.1 File: AddCourseModule.jsx
* **Purpose:** A React component that allows users to input details and add a new course.
* **Role:** UI Module.
* **Usage:** Used in `AddCoursePage.jsx` to provide the course creation functionality.
* **Interconnections:** Interacts with `InputField`, `Button`, and potentially `api.js` for submitting course data.
* **In-File Structure:**
    * **Functions/Components/Classes:** `AddCourseModule` (React functional component).
    * **State:** `courseName`, `courseDescription`, `courseCategory`.
    * **Functions:** `handleSubmit`.
