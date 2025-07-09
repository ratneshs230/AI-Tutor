# Directory Overview: src/modules

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains larger, self-contained React modules that represent significant features or sections of the application. Each module typically has its own subdirectory.

## 2. Directory Structure
```
.
├── AddCourseModule/
│   └── AddCourseModule.jsx
├── CuriosityPlatform/
│   └── CuriosityPlatform.jsx
├── Dashboard/
│   └── Dashboard.jsx
└── LoginModule/
    ├── LoginModule.jsx
    └── LoginModule.test.js
```

## 3. File Details

### 3.1 File: AddCourseModule.jsx
* **Purpose:** Handles the logic and UI for searching, selecting, and adding new courses/exams for the user.
* **Role:** React Module.
* **Usage:** Used in `AddCoursePage.jsx`.
* **Interconnections:** Interacts with `api.js`, `CourseContext`, `AuthContext`, and various components.
* **In-File Structure:**
    * **Functions/Components/Classes:** `AddCourseModule` (React functional component).

### 3.2 File: CuriosityPlatform.jsx
* **Purpose:** Provides an interface for users to ask open-ended queries and receive AI-generated multi-modal content.
* **Role:** React Module.
* **Usage:** Used in `CuriosityPage.jsx`.
* **Interconnections:** Interacts with `api.js` and various components.
* **In-File Structure:**
    * **Functions/Components/Classes:** `CuriosityPlatform` (React functional component).

### 3.3 File: Dashboard.jsx
* **Purpose:** The main dashboard module for logged-in users, displaying personalized learning content, progress, and access to various features.
* **Role:** React Module.
* **Usage:** Used in `DashboardPage.jsx`.
* **Interconnections:** Interacts with `AuthContext`, `CourseContext`, `api.js`, and various components.
* **In-File Structure:**
    * **Functions/Components/Classes:** `Dashboard` (React functional component).

### 3.4 File: LoginModule.jsx
* **Purpose:** Handles user login, registration, and profile completion.
* **Role:** React Module.
* **Usage:** Used in `LoginPage.jsx`.
* **Interconnections:** Interacts with `AuthContext`, `CourseContext`, `api.js`, and various components.
* **In-File Structure:**
    * **Functions/Components/Classes:** `LoginModule` (React functional component).

### 3.5 File: LoginModule.test.js
* **Purpose:** Contains unit tests for the `LoginModule` component.
* **Role:** Frontend Test File.
* **Usage:** Executed by the testing framework (e.g., Jest, React Testing Library) to verify the `LoginModule` component.
* **Interconnections:** Tests `LoginModule.jsx`, mocks `api.js` and `react-router-dom`.
* **In-File Structure:**
    * **Functions:** `describe`, `test`, `beforeEach`, `renderLoginModule`.

## 4. Recent Changes & Review Notes
* **Date:** 2025-07-09
* **Description:** Modules in this directory have been reviewed to ensure proper integration with the updated `src/utils/api.js` and consistent error handling. No direct changes were made to the modules themselves as part of this fix, but their API consumption relies on the `api.js` updates.