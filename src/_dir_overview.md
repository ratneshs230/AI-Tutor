# Directory Overview: src

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains the source code for the React frontend application, including components, pages, modules, and utility functions.

## 2. Directory Structure
```
.
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

### 3.1 File: App.jsx
* **Purpose:** The main React component that serves as the root of the application's component tree. It typically handles routing and global layout.
* **Role:** Root React Component.
* **Usage:** Renders the main application structure and routes different pages.
* **Interconnections:** Imports and uses components from `pages`, `components`, and `context`.
* **In-File Structure:**
    * **Functions/Components/Classes:** `App` (React functional component), `PrivateRoute` (component for protected routes).

### 3.2 File: index.css
* **Purpose:** Contains global CSS styles for the application.
* **Role:** Global Stylesheet.
* **Usage:** Imported into `index.js` to apply styles across the entire application.
* **Interconnections:** Applied to all components and pages.
* **In-File Structure:** CSS rules defining global styles, typography, and layout.

### 3.3 File: index.js
* **Purpose:** The entry point for the React application. It renders the main `App` component into the DOM.
* **Role:** React Application Entry Point.
* **Usage:** The first JavaScript file executed when the React application starts.
* **Interconnections:** Imports `App.jsx`, `index.css`, and `reportWebVitals.js`.
* **In-File Structure:**
    * **Functions:** `ReactDOM.render()`.

### 3.4 File: reportWebVitals.js
* **Purpose:** A utility file for measuring and reporting on Web Vitals, which are metrics that quantify the user experience of a website.
* **Role:** Performance Monitoring Utility.
* **Usage:** Used to collect and log performance metrics.
* **Interconnections:** Called from `index.js`.
* **In-File Structure:**
    * **Functions:** `reportWebVitals`.

### 3.5 File: setupTests.js
* **Purpose:** Configures the testing environment for the React application, typically used for Jest and React Testing Library setups.
* **Role:** Test Setup File.
* **Usage:** Executed before running tests to set up global test configurations.
* **Interconnections:** Used by Jest.
* **In-File Structure:**
    * **Functions:** `reportWebVitals`.

## 4. Recent Changes & Review Notes
* **Date:** 2025-07-09
* **Description:** The `src/utils/api.js` file has been updated to correct API endpoint paths for teacher-related functionalities and adaptive learning plans, ensuring proper frontend-backend communication. All files in this directory have been reviewed.