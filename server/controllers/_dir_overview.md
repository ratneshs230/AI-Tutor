# Directory Overview: server/controllers

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains the controller modules for the backend server, each responsible for handling specific API requests, processing data, and interacting with models and services.

## 2. Directory Structure
```
.
├── adaptiveCoachController.js
├── authController.js
├── badgeController.js
├── chatController.js
├── contentController.js
├── examController.js
├── gameController.js
├── leaderboardController.js
├── studyGroupController.js
├── teacherController.js
└── userInteractionController.js
```

## 3. File Details

### 3.1 File: adaptiveCoachController.js
* **Purpose:** Handles API requests related to adaptive coaching functionalities, such as providing personalized learning paths or feedback.
* **Role:** Backend API controller.
* **Usage:** Processes requests from adaptive coach routes, interacts with AI services and user models.
* **Interconnections:** Interacts with `adaptiveCoachRoutes.js`, `aiService.js`, and user-related models.
* **In-File Structure:**
    * **Functions:** `getAdaptiveLearningPath`, `submitFeedback`, `getPersonalizedRecommendations`.

### 3.2 File: authController.js
* **Purpose:** Manages user authentication and authorization, including login, registration, and session management.
* **Role:** Backend API controller.
* **Usage:** Processes requests from authentication routes, interacts with user models and Passport.js.
* **Interconnections:** Interacts with `authRoutes.js`, `User.js` model, and `passport.js`.
* **In-File Structure:**
    * **Functions:** `registerUser`, `loginUser`, `loadUser`, `updateUserProfile`.

### 3.3 File: badgeController.js
* **Purpose:** Handles API requests related to user badges, such as awarding badges, retrieving user badges, or listing available badges.
* **Role:** Backend API controller.
* **Usage:** Processes requests from badge routes, interacts with Badge and UserBadge models.
* **Interconnections:** Interacts with `badgeRoutes.js`, `Badge.js`, and `UserBadge.js` models.
* **In-File Structure:**
    * **Functions:** `awardBadge`, `getUserBadges`, `getAllBadges`.

### 3.4 File: chatController.js
* **Purpose:** Manages chat functionalities, including sending and receiving messages, and retrieving chat history.
* **Role:** Backend API controller.
* **Usage:** Processes requests from chat routes, interacts with ChatMessage model.
* **Interconnections:** Interacts with `chatRoutes.js` and `ChatMessage.js` model.
* **In-File Structure:**
    * **Functions:** `sendMessage`, `getChatHistory`.

### 3.5 File: contentController.js
* **Purpose:** Handles API requests related to educational content, such as retrieving courses, lessons, or specific learning materials.
* **Role:** Backend API controller.
* **Usage:** Processes requests from content routes, interacts with content-related models.
* **Interconnections:** Interacts with `contentRoutes.js` and content-related models (e.g., `Question.js`).
* **In-File Structure:**
    * **Functions:** `getCourse`, `getLesson`, `getQuestion`.

### 3.6 File: examController.js
* **Purpose:** Manages exam-related functionalities, including starting exams, submitting answers, and grading.
* **Role:** Backend API controller.
* **Usage:** Processes requests from exam routes, interacts with Exam and UserExamEnrollment models.
* **Interconnections:** Interacts with `examRoutes.js`, `Exam.js`, and `UserExamEnrollment.js` models.
* **In-File Structure:**
    * **Functions:** `startExam`, `submitExam`, `getExamResults`.

### 3.7 File: gameController.js
* **Purpose:** Handles API requests related to educational games, such as starting games, submitting scores, and retrieving game data.
* **Role:** Backend API controller.
* **Usage:** Processes requests from game routes, interacts with Game model.
* **Interconnections:** Interacts with `gameRoutes.js` and `Game.js` model.
* **In-File Structure:**
    * **Functions:** `startGame`, `submitGameScore`, `getGameData`.

### 3.8 File: leaderboardController.js
* **Purpose:** Manages leaderboard functionalities, including retrieving top scores and user rankings.
* **Role:** Backend API controller.
* **Usage:** Processes requests from leaderboard routes, interacts with LeaderboardEntry model.
* **Interconnections:** Interacts with `leaderboardRoutes.js` and `LeaderboardEntry.js` model.
* **In-File Structure:**
    * **Functions:** `getLeaderboard`, `getUserRank`.

### 3.9 File: studyGroupController.js
* **Purpose:** Handles API requests related to study groups, such as creating groups, joining groups, and managing group members.
* **Role:** Backend API controller.
* **Usage:** Processes requests from study group routes, interacts with StudyGroup model.
* **Interconnections:** Interacts with `studyGroupRoutes.js` and `StudyGroup.js` model.
* **In-File Structure:**
    * **Functions:** `createStudyGroup`, `joinStudyGroup`, `getStudyGroupMembers`.

### 3.10 File: teacherController.js
* **Purpose:** Manages functionalities specific to teachers, such as creating content, managing students, or viewing progress.
* **Role:** Backend API controller.
* **Usage:** Processes requests from teacher routes, interacts with various models.
* **Interconnections:** Interacts with `teacherRoutes.js` and relevant models (e.g., `User.js`, `Question.js`).
* **In-File Structure:**
    * **Functions:** `createContent`, `manageStudents`, `viewStudentProgress`.

### 3.11 File: userInteractionController.js
* **Purpose:** Handles API requests related to user progress and detailed interactions, logging events and tracking user activity.
* **Role:** Backend API controller.
* **Usage:** Processes requests from user interaction routes, interacts with the `UserProgress` model.
* **Interconnections:** Interacts with `userInteractionRoutes.js` and `UserProgress.js` model.
* **In-File Structure:**
    * **Functions:** `logUserInteraction`, `getUserInteractions`.

## 4. Recent Changes & Review Notes
* **Date:** 2025-07-09
* **Description:** All controller files in this directory have been reviewed and updated to implement consistent error handling using `next(err)` to propagate errors to the global error handling middleware. This ensures more robust and standardized error responses across the API. The `userInteractionController.js` has been updated to align with the `UserProgress` model schema defined in the ERD.
