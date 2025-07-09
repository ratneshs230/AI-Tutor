# Directory Overview: AI Tutor

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This is the root directory of the AI Tutor project, containing the main application configuration, top-level documentation, and the primary entry points for both the frontend and backend services.

## 2. Directory Structure
```
.
├── package.json
├── tailwind.config.js
├── documentation/
│   ├── Agents/
│   │   ├── adaptive_learning_agents_report.md
│   │   ├── designer_brain_report.md
│   │   ├── game_master_brain_report.md
│   │   └── teacher_brain_report.md
│   ├── Azure config/
│   │   ├── aitutor-frontend-123.json
│   │   ├── aitutor-keyvault-123.json
│   │   ├── aitutordb.json
│   │   └── Brains.json
│   ├── log/
│   │   ├── decision_log.md
│   │   ├── Error and fixes.md
│   │   ├── error_and_fix_log.md
│   │   ├── future_development_plan.md
│   │   ├── project_completion_report.md
│   │   ├── project_development_plan_log.md
│   │   ├── project_modification_log.md
│   │   └── requirements_traceability_log.md
│   ├── overview/
│   │   ├── erd.md
│   │   ├── project_elements_plan.md
│   │   ├── sdd.md
│   │   ├── srs.md
│   │   ├── use_cases.md
│   │   └── wireframes_mockups_conceptual.md
│   └── temp_screenshots/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── images/
├── server/
│   ├── app.js
│   ├── package.json
│   ├── config/
│   │   ├── default.json
│   │   └── passport.js
│   ├── controllers/
│   │   ├── adaptiveCoachController.js
│   │   ├── authController.js
│   │   ├── badgeController.js
│   │   ├── chatController.js
│   │   ├── contentController.js
│   │   ├── examController.js
│   │   ├── gameController.js
│   │   ├── leaderboardController.js
│   │   ├── studyGroupController.js
│   │   ├── teacherController.js
│   │   └── userInteractionController.js
│   ├── models/
│   │   ├── Badge.js
│   │   ├── ChatMessage.js
│   │   ├── DailyAgenda.js
│   │   ├── Exam.js
│   │   ├── Game.js
│   │   ├── LeaderboardEntry.js
│   │   ├── LearningStrategy.js
│   │   ├── Question.js
│   │   ├── StudyGroup.js
│   │   ├── User.js
│   │   ├── UserBadge.js
│   │   ├── UserExamEnrollment.js
│   │   └── UserInteraction.js
│   ├── routes/
│   │   ├── adaptiveCoachRoutes.js
│   │   ├── authRoutes.js
│   │   ├── badgeRoutes.js
│   │   ├── chatRoutes.js
│   │   ├── contentRoutes.js
│   │   ├── examRoutes.js
│   │   ├── gameRoutes.js
│   │   ├── leaderboardRoutes.js
│   │   ├── studyGroupRoutes.js
│   │   ├── teacherRoutes.js
│   │   └── userInteractionRoutes.js
│   ├── services/
│   │   ├── aiService.js
│   │   └── dbService.js
│   └── utils/
│       ├── authMiddleware.js
│       └── errorHandler.js
└── src/
    ├── App.jsx
    ├── index.css
    ├── index.js
    ├── reportWebVitals.js
    ├── setupTests.js
    ├── assets/
    │   ├── fonts/
    │   ├── images/
    │   └── styles/
    ├── components/
    │   ├── BadgeDisplay/
    │   │   └── BadgeDisplay.jsx
    │   ├── Button/
    │   │   ├── Button.jsx
    │   │   └── Button.test.jsx
    │   ├── Checkbox/
    │   │   └── Checkbox.jsx
    │   ├── DatePicker/
    │   │   └── DatePicker.jsx
    │   ├── Dropdown/
    │   │   └── Dropdown.jsx
    │   ├── GameDisplay/
    │   │   └── GameDisplay.jsx
    │   ├── InputField/
    │   │   └── InputField.jsx
    │   ├── LoadingSpinner/
    │   │   └── LoadingSpinner.jsx
    │   ├── Notification/
    │   │   └── Notification.jsx
    │   ├── ProgressMapDisplay/
    │   │   └── ProgressMapDisplay.jsx
    │   ├── SuggestionsList/
    │   │   └── SuggestionsList.jsx
    │   └── UserIcon/
    │       └── UserIcon.jsx
    ├── context/
    │   ├── AuthContext.js
    │   └── CourseContext.js
    ├── hooks/
    ├── modules/
    │   ├── AddCourseModule/
    │   │   └── AddCourseModule.jsx
    │   ├── CuriosityPlatform/
    │   │   └── CuriosityPlatform.jsx
    │   ├── Dashboard/
    │   │   └── Dashboard.jsx
    │   └── LoginModule/
    │       ├── LoginModule.jsx
    │       └── LoginModule.test.js
    ├── pages/
    │   ├── AddCoursePage.jsx
    │   ├── CollaborativeWorkspacePage.jsx
    │   ├── CommunityPage.jsx
    │   ├── CuriosityPage.jsx
    │   ├── DashboardPage.jsx
    │   ├── HomePage.jsx
    │   ├── LoginPage.jsx
    │   ├── PlayGamesPage.jsx
    │   ├── ProfilePage.jsx
    │   └── WelcomePage/
    │       ├── WelcomePage.jsx
    │       └── WelcomePage.test.js
    ├── tests/
    │   └── App.test.js
    └── utils/
        ├── api.js
        └── constants.js
```

## 3. File Details

### 3.1 File: package.json
* **Purpose:** Defines project metadata, scripts, and dependencies for the frontend application.
* **Role:** Configuration file for npm/yarn.
* **Usage:** Used by package managers to install dependencies and run scripts.
* **Interconnections:** Relates to `package-lock.json` (though excluded from listing), `node_modules` (excluded), and various build/run scripts.
* **In-File Structure:**
    * **Variables:** N/A
    * **Functions/Components/Classes:** N/A
    * **Constants:**
        * `name`: Project name.
        * `version`: Project version.
        * `private`: Indicates if the package is private.
        * `dependencies`: List of production dependencies.
        * `devDependencies`: List of development dependencies.
        * `scripts`: Defines various command-line scripts.
        * `eslintConfig`: ESLint configuration.
        * `browserslist`: Browser compatibility.
    * **Exports:** N/A

### 3.2 File: tailwind.config.js
* **Purpose:** Configures Tailwind CSS for the project.
* **Role:** Tailwind CSS configuration file.
* **Usage:** Used by Tailwind CSS to generate utility classes based on the defined configuration.
* **Interconnections:** Integrates with the frontend build process.
* **In-File Structure:**
    * **Variables:** N/A
    * **Functions/Components/Classes:** N/A
    * **Constants:**
        * `content`: Files to scan for Tailwind classes.
        * `theme`: Customization for Tailwind's default theme.
        * `plugins`: List of Tailwind plugins.
    * **Exports:** `module.exports`: Exports the configuration object.
