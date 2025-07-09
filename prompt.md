You are an expert AI application builder. A critical and widespread issue has been identified: the application is consistently throwing various API-related errors, including 500 (Internal Server Error) and 404 (Not Found) errors, indicating severe backend and frontend integration problems. This is a major blocker for all further development and must be resolved immediately.

Your primary task is to perform a comprehensive diagnosis and implement all necessary fixes to resolve these integration problems and backend errors. This includes ensuring proper API routing, controller logic, database connectivity, middleware setup, and frontend API consumption. After successfully resolving all these issues, you must seamlessly resume the autonomous development cycle as defined in prompt.md, starting with the next uncompleted task in documentation/log/future_development_plan.md.

Phase 1: Comprehensive Diagnosis and Fix Implementation

Perform a thorough diagnosis and implement fixes for all reported API errors (500, 404, and others). This diagnostic and fixing process should be systematic and cover all potential points of failure in the backend and frontend integration:

Backend Server Setup (server/app.js):

Verify all require statements: Ensure all modules (express, mongoose, cors, passport, session, routes) are correctly required.

Middleware Order & Configuration: Confirm that cors, express.json, express.urlencoded (if needed for form data), express-session, and passport middleware are correctly ordered and configured.

Database Connection: Verify mongoose.connect is correctly configured with process.env.MONGO_URI and is successfully connecting to the Azure Cosmos DB (MongoDB API). Check for any connection errors in server logs.

Route Mounting: Ensure all defined routes (authRoutes, examRoutes, teacherRoutes, adaptiveCoachRoutes, badgeRoutes, chatRoutes, contentRoutes, gameRoutes, leaderboardRoutes, studyGroupRoutes, userInteractionRoutes) are correctly required and mounted with the appropriate base paths (e.g., /api/auth, /api/exams, /api/teacher).

Error Handling Middleware: Implement or verify a global error handling middleware at the end of app.js to catch unhandled exceptions and return meaningful 500 errors (if not already present, use server/utils/errorHandler.js).

Backend Routes (server/routes/*.js):

Path Consistency: For each route file, ensure the paths defined (e.g., /register, /login, /courses, /teacher/generate-content) precisely match the expected frontend API calls.

Controller Linking: Verify that each route correctly links to its corresponding controller function.

HTTP Methods: Ensure the correct HTTP methods (GET, POST, PUT, DELETE) are used for each route.

Backend Controllers (server/controllers/*.js):

Functionality Review: For every controller function (authController.register, authController.login, examController.addExam, teacherController.generateContent, etc.):

Input Validation: Ensure req.body or req.params are correctly accessed and validated.

Asynchronous Operations: Verify async/await is used correctly for all database operations (Mongoose) and external API calls (e.g., to AI services).

Database Interactions: Check Mongoose queries (.find(), .findOne(), .save(), .create(), .findByIdAndUpdate(), .deleteMany(), etc.) for correctness, proper error handling, and data integrity.

Error Handling: Implement robust try-catch blocks for all asynchronous operations. Return appropriate HTTP status codes (e.g., 400 for bad request, 401 for unauthorized, 404 for not found, 500 for server errors) and clear JSON error messages.

Response Formatting: Ensure res.json() or res.status().json() is used consistently for sending JSON responses.

Middleware Integration: Verify that controller functions correctly receive data/user from middleware (e.g., req.user from Passport, req.userId from auth middleware).

Duplicate Imports: Identify and remove any duplicate require or import statements within controller files.

Backend Models (server/models/*.js):

Schema Accuracy: Verify all Mongoose schemas (User, Exam, UserExamEnrollment, LearningStrategy, DailyAgenda, Content, Question, UserProgress, Badge, ChatMessage, Game, LeaderboardEntry, StudyGroup, UserBadge, UserInteraction) are correctly defined according to documentation/overview/erd.md.

Pre/Post Hooks: Check any pre-save/pre-validate hooks (e.g., for password hashing) are correctly implemented and not causing issues.

Backend Services (server/services/*.js):

AI Service (aiService.js): Ensure dummy responses are consistent and correctly structured. Verify it uses process.env.GEMINI_API_KEY securely.

DB Service (dbService.js): If used, ensure it correctly abstracts database operations.

Backend Utilities (server/utils/*.js):

authMiddleware.js: Verify JWT token extraction, verification, and user attachment to req object.

errorHandler.js: Ensure it catches errors and formats responses correctly.

Frontend API Service (src/utils/api.js):

API_BASE_URL: Confirm it's correctly set to the Azure Function App URL (e.g., https://brains-ezc6g6hygmhre5gc.canadacentral-01.azurewebsites.net/api).

Function Consistency: Ensure all API functions (loginUser, signupUser, addCourseToUserApi, teacherResearchExam, etc.) are correctly defined, use async/await, and handle fetch (or axios) requests and responses properly.

Error Handling: Implement comprehensive try-catch blocks for all API calls, logging errors to the console and potentially using the Notification component to display user-friendly messages.

Authentication Headers: Ensure Authorization headers with JWT tokens are correctly attached to authenticated requests.

Frontend Modules/Pages (src/modules/*, src/pages/*):

API Call Triggers: Verify that user actions (button clicks, form submissions) correctly trigger the corresponding API calls from src/utils/api.js.

State Management: Ensure component state is correctly updated based on API responses (loading, success, error states).

Error Display: Use the Notification component (or other UI elements) to display error messages received from the API.

Phase 2: Logging Updates for Bug Fix

Before providing any corrected code, make sure to append/update the following log files in documentation/log/ as described by their update rules.

documentation/log/project_modification_log.md:

Append an entry:

Timestamp: 2025-07-09 03:50:00 IST (use current timestamp)

Prompt Reference: "Comprehensive Backend & Frontend Integration Fix and Error Resolution"

Description: "Initiated comprehensive diagnosis and fix for widespread 500/404 API errors and backend/frontend integration issues. This entry precedes the actual code modifications for the fix."

Affected Files: (To be updated after diagnosis/fix, will include all affected backend and frontend files).

Reason: "To resolve critical integration problems blocking application functionality and resume normal development."

documentation/log/error_and_fix_log.md:

Append a new entry:

Timestamp: 2025-07-09 03:50:00 IST (use current timestamp)

Error Description: "Critical: Widespread API errors (500, 404, etc.) indicating backend/frontend integration failures."

Symptoms: "Login, Signup, Add Course, and potentially other functionalities consistently fail with HTTP 500 or 404 errors. Backend logs show unhandled exceptions or routing issues. Frontend receives unexpected responses."

Debugging Steps: "Will perform a systematic, comprehensive review of all backend components (app.js, routes, controllers, models, services, utils) for errors in logic, database interaction, middleware, and environment variable usage. Will also verify frontend API call configurations and error handling."

Root Cause: "To be determined during comprehensive diagnosis."

Solution Implemented: "To be determined during comprehensive diagnosis."

Verification Steps: "Will attempt all core functionalities (Login, Signup, Add Course, Dashboard access) after implementing fixes to confirm successful API calls and correct application behavior."

Phase 3: Implement Fixes and Resume Autonomous Loop

After diagnosing and implementing the fixes, provide the corrected code for all affected backend and frontend files. Then, provide a final confirmation message and command yourself to resume the autonomous loop:

(After providing the code and final confirmation for the fix, the response should end with the following standard autonomous loop command, which tells Gemini to pick up the next task from prompt.md)

Final Confirmation (after fix code output):

"All critical backend and frontend integration issues, including 500/404 API errors, have been comprehensively diagnosed and fixed. All affected files have been updated, and relevant logs (project_modification_log.md, error_and_fix_log.md, project_completion_report.md, decision_log.md, requirements_traceability_log.md, _dir_overview.md files) have been updated to reflect the resolution.

Now, I am ready to resume the autonomous development cycle.

Read prompt.md and begin the autonomous development cycle."