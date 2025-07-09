# Directory Overview: src/utils

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains utility functions for the frontend application, providing common functionalities such as API interactions and constants.

## 2. Directory Structure
```
.
├── api.js
└── constants.js
```

## 3. File Details

### 3.1 File: api.js
* **Purpose:** Provides functions for making API calls to the backend server.
* **Role:** Frontend utility.
* **Usage:** Used by various components and modules to interact with the backend API.
* **Interconnections:** Interacts with the backend server routes.
* **In-File Structure:**
    * **Functions:** `enrollInExam`, `getExams`, `createExam`, `getUserEnrollments`, `registerUser`, `loginUser`, `getUserProfile`, `updateUserProfile`, `getUserBadges`, `initiateDeepCourseSearchApi`, `teacherResearchExam`, `teacherGenerateStrategy`, `teacherGenerateDailyAgenda`, `teacherGenerateContent`, `teacherGeneratePractice`, `getContent`, `generateCuriosityContent`, `getLearningStrategyApi` (formerly `getAdaptiveLearningPlan`), `getChatMessages`, `sendChatMessage`, `generateGame`, `getStudyGroups`.

## 4. Recent Changes & Review Notes
* **Date:** 2025-07-09
* **Description:** The `api.js` file has been comprehensively reviewed and updated to correct API endpoint paths for teacher-related functionalities and adaptive learning plans, ensuring proper frontend-backend communication and resolving previous mismatches. The `getAdaptiveLearningPlan` function was renamed to `getLearningStrategyApi` to better reflect its backend counterpart.

### 3.2 File: constants.js
* **Purpose:** Stores application-wide constants, such as API endpoints, magic strings, or configuration values.
* **Role:** Frontend utility.
* **Usage:** Provides a centralized location for values that do not change during runtime.
* **Interconnections:** Used by various components and modules that require constant values.
* **In-File Structure:**
    * **Constants:** `API_BASE_URL`, `USER_ROLES`, `DEFAULT_THEME` (example constants).
