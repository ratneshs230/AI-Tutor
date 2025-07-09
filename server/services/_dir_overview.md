# Directory Overview: server/services

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains service modules for the backend server, encapsulating business logic and interactions with external systems or databases.

## 2. Directory Structure
```
.
├── aiService.js
└── dbService.js
```

## 3. File Details

### 3.1 File: aiService.js
* **Purpose:** Provides an interface for interacting with AI models or services, abstracting the underlying AI logic.
* **Role:** Backend service.
* **Usage:** Used by controllers (e.g., `adaptiveCoachController.js`) to leverage AI capabilities.
* **Interconnections:** Interacts with external AI APIs or internal AI models.
* **In-File Structure:**
    * **Functions:** `getAIResponse`, `processNaturalLanguage`.

### 3.2 File: dbService.js
* **Purpose:** Handles database connection and common database operations, providing a centralized way to interact with the database.
* **Role:** Backend service.
* **Usage:** Used by models and controllers to perform CRUD operations on the database.
* **Interconnections:** Interacts with MongoDB (via Mongoose).
* **In-File Structure:**
    * **Functions:** `connectDB`, `disconnectDB`.
