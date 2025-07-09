# Directory Overview: src/context

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains React Context API providers and consumers, used for managing global state and sharing data across the component tree without prop drilling.

## 2. Directory Structure
```
.
├── AuthContext.js
└── CourseContext.js
```

## 3. File Details

### 3.1 File: AuthContext.js
* **Purpose:** Provides authentication-related state and functions (e.g., login, logout, user data) to components throughout the application.
* **Role:** React Context Provider.
* **Usage:** Wraps parts of the application that need access to authentication status or user information.
* **Interconnections:** Used by `LoginModule.jsx`, `App.jsx`, and other components requiring user authentication.
* **In-File Structure:**
    * **Variables:** `AuthContext` (React Context object).
    * **Functions/Components/Classes:** `AuthProvider` (React component that provides the context value), `useAuth` (custom hook for consuming the context).
    * **State:** `isLoggedIn`, `user`, `authToken`, `loading`.

### 3.2 File: CourseContext.js
* **Purpose:** Provides course-related state and functions (e.g., current course, course progress, course data) to components throughout the application.
* **Role:** React Context Provider.
* **Usage:** Wraps parts of the application that need access to course information.
* **Interconnections:** Used by `AddCourseModule.jsx`, `Dashboard.jsx`, and other components displaying course content.
* **In-File Structure:**
    * **Variables:** `CourseContext` (React Context object).
    * **Functions/Components/Classes:** `CourseProvider` (React component that provides the context value), `useCourse` (custom hook for consuming the context).

## 4. Recent Changes & Review Notes
* **Date:** 2025-07-09
* **Description:** Context files in this directory have been reviewed to ensure proper interaction with the updated `src/utils/api.js` and consistent error handling. No direct changes were made to the context files themselves as part of this fix, but their API consumption relies on the `api.js` updates.