# Directory Overview: server/routes

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory defines the API routes for the backend server, mapping specific URL endpoints to their corresponding controller functions.

## 2. Directory Structure
```
.
├── adaptiveCoachRoutes.js
├── authRoutes.js
├── badgeRoutes.js
├── chatRoutes.js
├── contentRoutes.js
├── examRoutes.js
├── gameRoutes.js
├── leaderboardRoutes.js
├── studyGroupRoutes.js
├── teacherRoutes.js
└── userInteractionRoutes.js
```

## 3. File Details

### 3.1 File: adaptiveCoachRoutes.js
* **Purpose:** Defines API routes related to adaptive coaching functionalities.
* **Role:** Backend API routes.
* **Usage:** Maps HTTP requests to `adaptiveCoachController.js` functions.
* **Interconnections:** Interacts with `adaptiveCoachController.js`.
* **In-File Structure:**
    * **Variables:** `router` (Express Router instance).
    * **Functions/Components/Classes:** N/A
    * **Constants:** N/A
    * **Exports:** `router`.

### 3.2 File: authRoutes.js
* **Purpose:** Defines API routes for user authentication, including login, registration, and logout.
* **Role:** Backend API routes.
* **Usage:** Maps HTTP requests to `authController.js` functions.
* **Interconnections:** Interacts with `authController.js` and `authMiddleware.js`.
* **In-File Structure:**
    * **Variables:** `router` (Express Router instance).
    * **Functions/Components/Classes:** N/A
    * **Constants:** N/A
    * **Exports:** `router`.

### 3.3 File: badgeRoutes.js
* **Purpose:** Defines API routes for managing user badges.
* **Role:** Backend API routes.
* **Usage:** Maps HTTP requests to `badgeController.js` functions.
* **Interconnections:** Interacts with `badgeController.js`.
* **In-File Structure:**
    * **Variables:** `router` (Express Router instance).
    * **Functions/Components/Classes:** N/A
    * **Constants:** N/A
    * **Exports:** `router`.

### 3.4 File: chatRoutes.js
* **Purpose:** Defines API routes for chat functionalities.
* **Role:** Backend API routes.
* **Usage:** Maps HTTP requests to `chatController.js` functions.
* **Interconnections:** Interacts with `chatController.js`.
* **In-File Structure:**
    * **Variables:** `router` (Express Router instance).
    * **Functions/Components/Classes:** N/A
    * **Constants:** N/A
    * **Exports:** `router`.

### 3.5 File: contentRoutes.js
* **Purpose:** Defines API routes for educational content.
* **Role:** Backend API routes.
* **Usage:** Maps HTTP requests to `contentController.js` functions.
* **Interconnections:** Interacts with `contentController.js`.
* **In-File Structure:**
    * **Variables:** `router` (Express Router instance).
    * **Functions/Components/Classes:** N/A
    * **Constants:** N/A
    * **Exports:** `router`.

### 3.6 File: examRoutes.js
* **Purpose:** Defines API routes for exam-related functionalities.
* **Role:** Backend API routes.
* **Usage:** Maps HTTP requests to `examController.js` functions.
* **Interconnections:** Interacts with `examController.js`.
* **In-File Structure:**
    * **Variables:** `router` (Express Router instance).
    * **Functions/Components/Classes:** N/A
    * **Constants:** N/A
    * **Exports:** `router`.

### 3.7 File: gameRoutes.js
* **Purpose:** Defines API routes for educational games.
* **Role:** Backend API routes.
* **Usage:** Maps HTTP requests to `gameController.js` functions.
* **Interconnections:** Interacts with `gameController.js`.
* **In-File Structure:**
    * **Variables:** `router` (Express Router instance).
    * **Functions/Components/Classes:** N/A
    * **Constants:** N/A
    * **Exports:** `router`.

### 3.8 File: leaderboardRoutes.js
* **Purpose:** Defines API routes for leaderboard functionalities.
* **Role:** Backend API routes.
* **Usage:** Maps HTTP requests to `leaderboardController.js` functions.
* **Interconnections:** Interacts with `leaderboardController.js`.
* **In-File Structure:**
    * **Variables:** `router` (Express Router instance).
    * **Functions/Components/Classes:** N/A
    * **Constants:** N/A
    * **Exports:** `router`.

### 3.9 File: studyGroupRoutes.js
* **Purpose:** Defines API routes for study group functionalities.
* **Role:** Backend API routes.
* **Usage:** Maps HTTP requests to `studyGroupController.js` functions.
* **Interconnections:** Interacts with `studyGroupController.js`.
* **In-File Structure:**
    * **Variables:** `router` (Express Router instance).
    * **Functions/Components/Classes:** N/A
    * **Constants:** N/A
    * **Exports:** `router`.

### 3.10 File: teacherRoutes.js
* **Purpose:** Defines API routes for teacher-specific functionalities.
* **Role:** Backend API routes.
* **Usage:** Maps HTTP requests to `teacherController.js` functions.
* **Interconnections:** Interacts with `teacherController.js`.
* **In-File Structure:**
    * **Variables:** `router` (Express Router instance).
    * **Functions/Components/Classes:** N/A
    * **Constants:** N/A
    * **Exports:** `router`.

### 3.11 File: userInteractionRoutes.js
* **Purpose:** Defines API routes for tracking user interactions and progress.
* **Role:** Backend API routes.
* **Usage:** Maps HTTP requests to `userInteractionController.js` functions, which now utilize the `UserProgress` model.
* **Interconnections:** Interacts with `userInteractionController.js`.
* **In-File Structure:**
    * **Variables:** `router` (Express Router instance).
    * **Functions/Components/Classes:** N/A
    * **Constants:** N/A
    * **Exports:** `router`.

## 4. Recent Changes & Review Notes
* **Date:** 2025-07-09
* **Description:** All route files in this directory have been reviewed to ensure correct path consistency, controller linking, HTTP methods, and middleware application as part of a comprehensive API error fix. No direct changes were made to the route definitions themselves, but their corresponding controllers were updated for consistent error handling.
