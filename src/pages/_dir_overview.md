# Directory Overview: src/pages

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains the top-level React components that represent distinct pages or views of the frontend application. Each page typically composes multiple smaller components and modules.

## 2. Directory Structure
```
.
├── AddCoursePage.jsx
├── CollaborativeWorkspacePage.jsx
├── CommunityPage.jsx
├── CuriosityPage.jsx
├── DashboardPage.jsx
├── HomePage.jsx
├── LoginPage.jsx
├── PlayGamesPage.jsx
├── ProfilePage.jsx
└── WelcomePage/
    ├── WelcomePage.jsx
    └── WelcomePage.test.js
```

## 3. File Details

### 3.1 File: AddCoursePage.jsx
* **Purpose:** A React component that serves as the page for adding new courses.
* **Role:** UI Page.
* **Usage:** Accessed via routing to allow users to create new courses.
* **Interconnections:** Renders the `AddCourseModule` and potentially other related components.
* **In-File Structure:**
    * **Functions/Components/Classes:** `AddCoursePage` (React functional component).

### 3.2 File: CollaborativeWorkspacePage.jsx
* **Purpose:** A React component that serves as the page for collaborative learning or project workspaces.
* **Role:** UI Page.
* **Usage:** Provides an environment for users to collaborate on tasks or projects.
* **Interconnections:** May integrate with chat components, document editors, or other collaboration tools.
* **In-File Structure:**
    * **Functions/Components/Classes:** `CollaborativeWorkspacePage` (React functional component).

### 3.3 File: CommunityPage.jsx
* **Purpose:** A React component that serves as the page for community features, such as forums, discussion boards, or social interactions.
* **Role:** UI Page.
* **Usage:** Provides a platform for users to connect and interact with each other.
* **Interconnections:** May integrate with chat components, user profiles, and notification systems.
* **In-File Structure:**
    * **Functions/Components/Classes:** `CommunityPage` (React functional component).

### 3.4 File: CuriosityPage.jsx
* **Purpose:** A React component that serves as the page for the curiosity-driven learning platform.
* **Role:** UI Page.
* **Usage:** Provides access to the interactive curiosity platform.
* **Interconnections:** Renders the `CuriosityPlatform` module.
* **In-File Structure:**
    * **Functions/Components/Classes:** `CuriosityPage` (React functional component).

### 3.5 File: DashboardPage.jsx
* **Purpose:** A React component that serves as the main dashboard page for authenticated users.
* **Role:** UI Page.
* **Usage:** The primary landing page after login, displaying personalized information.
* **Interconnections:** Renders the `Dashboard` module and other relevant components.
* **In-File Structure:**
    * **Functions/Components/Classes:** `DashboardPage` (React functional component).

### 3.6 File: HomePage.jsx
* **Purpose:** A React component that serves as the main landing page for the application, typically for unauthenticated users.
* **Role:** UI Page.
* **Usage:** The initial page displayed when a user visits the application.
* **Interconnections:** May contain links to login, registration, or welcome pages.
* **In-File Structure:**
    * **Functions/Components/Classes:** `HomePage` (React functional component).

### 3.7 File: LoginPage.jsx
* **Purpose:** A React component that serves as the login and registration page for users.
* **Role:** UI Page.
* **Usage:** Provides the interface for user authentication.
* **Interconnections:** Renders the `LoginModule`.
* **In-File Structure:**
    * **Functions/Components/Classes:** `LoginPage` (React functional component).

### 3.8 File: PlayGamesPage.jsx
* **Purpose:** A React component that serves as the page for playing educational games.
* **Role:** UI Page.
* **Usage:** Provides access to the educational games available in the application.
* **Interconnections:** Renders the `GameDisplay` component and interacts with game-related data.
* **In-File Structure:**
    * **Functions/Components/Classes:** `PlayGamesPage` (React functional component).

### 3.9 File: ProfilePage.jsx
* **Purpose:** A React component that serves as the user's profile page, displaying personal information, progress, and settings.
* **Role:** UI Page.
* **Usage:** Allows users to view and manage their profile details.
* **Interconnections:** May integrate with `UserIcon`, `BadgeDisplay`, `ProgressMapDisplay`, and user data from `AuthContext`.
* **In-File Structure:**
    * **Functions/Components/Classes:** `ProfilePage` (React functional component).
