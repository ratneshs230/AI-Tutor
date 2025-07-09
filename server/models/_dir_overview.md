# Directory Overview: server/models

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory defines the Mongoose schemas and models for the AI Tutor backend application, representing the data structures and their relationships within the MongoDB database.

## 2. Directory Structure
```
.
├── Badge.js
├── ChatMessage.js
├── DailyAgenda.js
├── Exam.js
├── Game.js
├── LeaderboardEntry.js
├── LearningStrategy.js
├── Question.js
├── StudyGroup.js
├── User.js
├── UserBadge.js
├── UserExamEnrollment.js
└── UserInteraction.js
```

## 3. File Details

### 3.1 File: Badge.js
* **Purpose:** Defines the Mongoose schema and model for badges that can be awarded to users.
* **Role:** Database model.
* **Usage:** Used by `badgeController.js` and other modules to interact with badge data in the database.
* **Interconnections:** Related to `UserBadge.js`.
* **In-File Structure:**
    * **Schema:** `name`, `description`, `icon`.
    * **Model:** `Badge`.

### 3.2 File: ChatMessage.js
* **Purpose:** Defines the Mongoose schema and model for chat messages exchanged within the application.
* **Role:** Database model.
* **Usage:** Used by `chatController.js` to store and retrieve chat messages.
* **Interconnections:** Related to `User.js` (for sender/receiver).
* **In-File Structure:**
    * **Schema:** `sender`, `receiver`, `message`, `timestamp`.
    * **Model:** `ChatMessage`.

### 3.3 File: DailyAgenda.js
* **Purpose:** Defines the Mongoose schema and model for a user's daily agenda or learning plan.
* **Role:** Database model.
* **Usage:** Used to manage and track user's daily learning activities.
* **Interconnections:** Related to `User.js`.
* **In-File Structure:**
    * **Schema:** `user`, `date`, `tasks`.
    * **Model:** `DailyAgenda`.

### 3.4 File: Exam.js
* **Purpose:** Defines the Mongoose schema and model for exams or assessments.
* **Role:** Database model.
* **Usage:** Used by `examController.js` to manage exam content and structure.
* **Interconnections:** Related to `Question.js` and `UserExamEnrollment.js`.
* **In-File Structure:**
    * **Schema:** `title`, `description`, `questions`, `duration`.
    * **Model:** `Exam`.

### 3.5 File: Game.js
* **Purpose:** Defines the Mongoose schema and model for educational games.
* **Role:** Database model.
* **Usage:** Used by `gameController.js` to manage game data.
* **Interconnections:** Related to `LeaderboardEntry.js`.
* **In-File Structure:**
    * **Schema:** `name`, `description`, `rules`, `url`.
    * **Model:** `Game`.

### 3.6 File: LeaderboardEntry.js
* **Purpose:** Defines the Mongoose schema and model for entries in the game leaderboard.
* **Role:** Database model.
* **Usage:** Used by `leaderboardController.js` to store and retrieve leaderboard data.
* **Interconnections:** Related to `User.js` and `Game.js`.
* **In-File Structure:**
    * **Schema:** `user`, `game`, `score`, `timestamp`.
    * **Model:** `LeaderboardEntry`.

### 3.7 File: LearningStrategy.js
* **Purpose:** Defines the Mongoose schema and model for different learning strategies or styles.
* **Role:** Database model.
* **Usage:** Used to categorize and manage learning approaches.
* **Interconnections:** Potentially related to `User.js` for user preferences.
* **In-File Structure:**
    * **Schema:** `name`, `description`.
    * **Model:** `LearningStrategy`.

### 3.8 File: Question.js
* **Purpose:** Defines the Mongoose schema and model for questions used in exams or content.
* **Role:** Database model.
* **Usage:** Used by `examController.js` and `contentController.js` to manage question data.
* **Interconnections:** Related to `Exam.js`.
* **In-File Structure:**
    * **Schema:** `text`, `options`, `correctAnswer`, `type`.
    * **Model:** `Question`.

### 3.9 File: StudyGroup.js
* **Purpose:** Defines the Mongoose schema and model for study groups.
* **Role:** Database model.
* **Usage:** Used by `studyGroupController.js` to manage study group information.
* **Interconnections:** Related to `User.js` (for members).
* **In-File Structure:**
    * **Schema:** `name`, `description`, `members`, `admin`.
    * **Model:** `StudyGroup`.

### 3.10 File: User.js
* **Purpose:** Defines the Mongoose schema and model for user accounts.
* **Role:** Database model.
* **Usage:** The central model for user management, used by `authController.js` and many other modules.
* **Interconnections:** Connected to almost all other models (e.g., `ChatMessage.js`, `Badge.js`, `Exam.js`).
* **In-File Structure:**
    * **Schema:** `username`, `email`, `password`, `roles`, `profile`.
    * **Model:** `User`.

### 3.11 File: UserBadge.js
* **Purpose:** Defines the Mongoose schema and model for tracking badges awarded to users.
* **Role:** Database model.
* **Usage:** Used by `badgeController.js` to manage user-specific badge data.
* **Interconnections:** Related to `User.js` and `Badge.js`.
* **In-File Structure:**
    * **Schema:** `user`, `badge`, `awardedDate`.
    * **Model:** `UserBadge`.

### 3.12 File: UserExamEnrollment.js
* **Purpose:** Defines the Mongoose schema and model for tracking user enrollments and progress in exams.
* **Role:** Database model.
* **Usage:** Used by `examController.js` to manage user exam data.
* **Interconnections:** Related to `User.js` and `Exam.js`.
* **In-File Structure:**
    * **Schema:** `user`, `exam`, `status`, `score`, `startTime`, `endTime`.
    * **Model:** `UserExamEnrollment`.

### 3.13 File: UserInteraction.js
* **Purpose:** Defines the Mongoose schema and model for logging various user interactions within the application.
* **Role:** Database model.
* **Usage:** Used by `userInteractionController.js` to track user activity for analytics or adaptive learning.
* **Interconnections:** Related to `User.js`.
* **In-File Structure:**
    * **Schema:** `user`, `eventType`, `details`, `timestamp`.
    * **Model:** `UserInteraction`.
