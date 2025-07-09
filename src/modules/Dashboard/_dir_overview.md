# Directory Overview: src/modules/Dashboard

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains the `Dashboard` React component, which serves as the main landing page for authenticated users, displaying personalized information, progress, and quick access to features.

## 2. Directory Structure
```
.
├── Dashboard.jsx
```

## 3. File Details

### 3.1 File: Dashboard.jsx
* **Purpose:** A React component that displays a personalized dashboard for the logged-in user.
* **Role:** UI Module.
* **Usage:** Used in `DashboardPage.jsx` to present an overview of user activity, progress, and relevant information.
* **Interconnections:** May interact with `AuthContext`, `CourseContext`, `ProgressMapDisplay`, `BadgeDisplay`, and `api.js` for fetching user-specific data.
* **In-File Structure:**
    * **Functions/Components/Classes:** `Dashboard` (React functional component).
    * **State:** `userData`, `learningProgress`, `recentActivity`.
    * **Functions:** `fetchDashboardData`.
