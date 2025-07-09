# Directory Overview: server/utils

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains utility functions and middleware for the backend server, providing common functionalities like authentication middleware and error handling.

## 2. Directory Structure
```
.
├── authMiddleware.js
└── errorHandler.js
```

## 3. File Details

### 3.1 File: authMiddleware.js
* **Purpose:** Provides middleware functions for authenticating and authorizing user requests.
* **Role:** Backend middleware.
* **Usage:** Used in routes to protect endpoints that require authentication.
* **Interconnections:** Interacts with `passport.js` and `User.js` model.
* **In-File Structure:**
    * **Functions:** Anonymous middleware function for JWT verification.

### 3.2 File: errorHandler.js
* **Purpose:** Provides a centralized error handling middleware for the Express application, returning more meaningful JSON error responses.
* **Role:** Backend middleware.
* **Usage:** Catches and processes errors that occur during request processing, sending appropriate responses to the client.
* **Interconnections:** Used in `app.js` as a global error handler.
* **In-File Structure:**
    * **Functions:** `errorHandler` (Express error handling middleware function).

## 4. Recent Changes & Review Notes
* **Date:** 2025-07-09
* **Description:** The `errorHandler.js` file has been updated to provide more detailed JSON error responses, including dynamic status codes and error messages, improving consistency and debuggability for frontend clients. All files in this directory have been reviewed.
