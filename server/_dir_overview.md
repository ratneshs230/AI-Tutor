# Directory Overview: server

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains the backend server application for the AI Tutor project, handling API requests, database interactions, and business logic.

## 2. Directory Structure
```
.
├── app.js
├── package.json
├── config/
│   ├── default.json
│   └── passport.js
├── controllers/
│   ├── adaptiveCoachController.js
│   ├── authController.js
│   ├── badgeController.js
│   ├── chatController.js
│   ├── contentController.js
│   ├── examController.js
│   ├── gameController.js
│   ├── leaderboardController.js
│   ├── studyGroupController.js
│   ├── teacherController.js
│   └── userProgressController.js
├── models/
│   ├── Badge.js
│   ├── ChatMessage.js
│   ├── DailyAgenda.js
│   ├── Exam.js
│   ├── Game.js
│   ├── LeaderboardEntry.js
│   ├── LearningStrategy.js
│   ├── Question.js
│   ├── StudyGroup.js
│   ├── User.js
│   ├── UserBadge.js
│   ├── UserExamEnrollment.js
│   └── UserProgress.js
├── routes/
│   ├── adaptiveCoachRoutes.js
│   ├── authRoutes.js
│   ├── badgeRoutes.js
│   ├── chatRoutes.js
│   ├── contentRoutes.js
│   ├── examRoutes.js
│   ├── gameRoutes.js
│   ├── leaderboardRoutes.js
│   ├── studyGroupRoutes.js
│   ├── teacherRoutes.js
│   └── userProgressRoutes.js
├── services/
│   ├── aiService.js
│   └── dbService.js
└── utils/
    ├── authMiddleware.js
    └── errorHandler.js
```

## 3. File Details

### 3.1 File: app.js
* **Purpose:** The main entry point for the backend Express application, setting up middleware, routes, and starting the server. Now includes warnings for essential environment variables.
* **Role:** Backend application entry point.
* **Usage:** Executed to start the AI Tutor backend server.
* **Interconnections:** Imports and uses various modules from `config`, `routes`, `utils`, and `services`.
* **In-File Structure:**
    * **Variables:** `app` (Express application instance), `PORT` (server port).
    * **Functions/Components/Classes:** N/A
    * **Constants:** N/A
    * **Exports:** N/A
    * **Routes:** All API routes are mounted here, including the updated `/api/progress` route.

## 4. Recent Changes & Review Notes
* **Date:** 2025-07-09
* **Description:** The `app.js` file has been updated to include warnings for missing `MONGO_URI`, `JWT_SECRET`, and `SESSION_SECRET` environment variables, aiding in debugging runtime configuration issues. The route for user progress was updated from `/api/interactions` to `/api/progress` to reflect the renaming of `UserInteraction` to `UserProgress`.

### 3.2 File: package.json
* **Purpose:** Defines project metadata, scripts, and dependencies for the backend server.
* **Role:** Configuration file for npm/yarn.
* **Usage:** Used by package managers to install dependencies and run scripts for the backend.
* **Interconnections:** Relates to `package-lock.json` (though excluded from listing), `node_modules` (excluded), and various backend scripts.
* **In-File Structure:**
    * **Variables:** N/A
    * **Functions/Components/Classes:** N/A
    * **Constants:**
        * `name`: Project name.
        * `version`: Project version.
        * `description`: Project description.
        * `main`: Main entry file.
        * `scripts`: Defines various command-line scripts.
        * `keywords`: Search keywords.
        * `author`: Author information.
        * `license`: Project license.
        * `dependencies`: List of production dependencies.
        * `devDependencies`: List of development dependencies.
    * **Exports:** N/A
