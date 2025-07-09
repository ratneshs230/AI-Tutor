# Use Case Document: AI-Powered Learning Experience User Flows

## 1. Introduction

This Use Case Document describes the typical interactions between users and the "AI-Powered Learning Experience" platform. It outlines the step-by-step processes for various user goals, providing a clear understanding of the system's behavior from a user's perspective. It complements the Software Requirements Specification (SRS) by illustrating the "how" of user interaction.

## 2. Key Actors

* **Guest User:** An unauthenticated user exploring the application.
* **Student User:** An authenticated user preparing for exams.
* **System (AI-Powered Learning Experience Platform):** The application itself, encompassing frontend, backend services, and AI agents.
* **Teacher AI:** The AI agent responsible for content generation.
* **Designer AI:** The AI agent responsible for UI/UX adaptation.
* **Game Master AI:** The AI agent responsible for game generation.
* **Adaptive Coach (AI):** The AI orchestrator for learning paths.
* **Personal Watcher (AI):** The AI responsible for observing user behavior.
* **Matchmaker (AI):** The AI responsible for suggesting study groups.
* **Facilitator (AI):** The AI responsible for moderating community discussions.

## 3. Use Cases

### 3.1 UC001: Explore Application as a Guest User

* **Goal:** A Guest User wants to understand what the application offers and explore some basic content without logging in.
* **Actor:** Guest User
* **Preconditions:**
    * The application is running and accessible.
* **Flow:**
    1.  Guest User launches the application.
    2.  System displays the Welcome Page with "Login" and "Curiosity" buttons.
    3.  Guest User clicks "Curiosity".
    4.  System navigates to the Curiosity Platform.
    5.  Guest User enters a query (e.g., "What are Newton's Laws of Motion?").
    6.  System sends the query to the Teacher AI (via backend placeholder).
    7.  System displays a loading indicator.
    8.  Teacher AI (placeholder) generates and returns multi-modal content (text, dummy image/audio/video links).
    9.  System displays the generated content in the Curiosity Platform.
    10. Guest User consumes the content.
* **Postconditions:** Guest User has viewed generated content.
* **Related Requirements (from SRS):** R001.2.1, R001.5, R009.1, R009.2, R009.3.

### 3.2 UC002: Register and Create Profile

* **Goal:** A new user wants to create an account and set up their profile.
* **Actor:** Guest User, System
* **Preconditions:**
    * The application is running and accessible.
* **Flow:**
    1.  Guest User launches the application.
    2.  System displays the Welcome Page with "Login" and "Curiosity" buttons.
    3.  Guest User clicks "Login".
    4.  System navigates to the Login Module.
    5.  Guest User selects a signup method (e.g., "Sign up with Email").
    6.  Guest User enters required signup credentials (Email, Password) and clicks "Sign Up".
    7.  System validates credentials (backend placeholder).
    8.  System presents the "Create Profile" form.
    9.  Guest User enters Name, Age, Gender.
    10. Guest User checks "Are you currently in school?".
    11. If checked, System dynamically displays "Board" and "Class" fields.
    12. Guest User selects Board and Class.
    13. Guest User clicks "Complete Profile".
    14. System saves profile details to backend database (placeholder).
    15. System checks if the user has enrolled courses (initially, no).
    16. System navigates to the Welcome Page (now displaying "Add Course" and "Curiosity" buttons).
* **Postconditions:** User account created, profile saved, user is logged in, and redirected to Welcome Page.
* **Related Requirements (from SRS):** R001.2.1, R001.6, R002.1.1, R003.1, R003.1.1, R003.1.2, R003.1.3, R002.3.2.

### 3.3 UC003: Log In to Existing Account

* **Goal:** An existing user wants to access their personalized learning environment.
* **Actor:** Student User, System
* **Preconditions:**
    * User has an existing account.
    * The application is running and accessible.
* **Flow:**
    1.  Student User launches the application.
    2.  System determines if user is already logged in (e.g., via "remember me" session).
    3.  **Alternative Flow A: Already Logged In:**
        1.  System checks if user has ongoing courses.
        2.  If user has ongoing courses, System navigates directly to the Dashboard.
        3.  If user has no ongoing courses, System navigates to the Welcome Page (displaying "Add Course" and "Curiosity" buttons).
    4.  **Alternative Flow B: Not Logged In (Initial Launch):**
        1.  System displays the Welcome Page with "Login" and "Curiosity" buttons.
        2.  Student User clicks "Login".
        3.  System navigates to the Login Module.
        4.  Student User enters login credentials (e.g., Email, Password) and clicks "Login".
        5.  System validates credentials with backend (placeholder).
        6.  If successful, System retrieves user's enrolled courses.
        7.  System checks if user has ongoing courses.
        8.  If user has ongoing courses, System navigates to the Dashboard.
        9.  If user has no ongoing courses, System navigates to the Welcome Page (displaying "Add Course" and "Curiosity" buttons).
    10. **Alternative Flow C: Social Login (similar to B, but OAuth redirect)**
        1.  Student User clicks social login button (e.g., Google).
        2.  System redirects to social provider for authentication.
        3.  Social provider redirects back to application with token.
        4.  System processes token with backend (placeholder).
        5.  If successful and new user, proceed to Profile Creation (UC002, Step 8 onwards).
        6.  If successful and existing user, retrieve enrolled courses.
        7.  System checks if user has ongoing courses.
        8.  If user has ongoing courses, System navigates to the Dashboard.
        9.  If user has no ongoing courses, System navigates to the Welcome Page (displaying "Add Course" and "Curiosity" buttons).
* **Postconditions:** User is logged in, global authentication state is updated, and user is navigated to the appropriate page.
* **Related Requirements (from SRS):** R001.2, R001.6, R001.7, R002.1, R002.2, R002.3, R003.1.

### 3.4 UC004: Add a New Course

* **Goal:** A logged-in user wants to enroll in a new exam/course.
* **Actor:** Student User, System, Teacher AI (via backend)
* **Preconditions:**
    * Student User is logged in.
    * The application is running.
* **Flow:**
    1.  Student User is on the Welcome Page (or Profile Page, future).
    2.  System displays "Add Course" button.
    3.  Student User clicks "Add Course".
    4.  System navigates to the Add Course Module.
    5.  System displays a search bar and potentially initial suggestions.
    6.  Student User types keywords into the search bar.
    7.  System dynamically displays suggestions from its local database (placeholder).
    8.  **Alternative Flow A: Course Found in Suggestions:**
        1.  Student User selects a course from suggestions.
        2.  System displays course details and "Set Target Date" option.
    9.  **Alternative Flow B: Course Not Found Locally / Deep Search Needed:**
        1.  Student User clicks a "Search Deeply" button (or system automatically triggers if no local match).
        2.  System displays a loading indicator.
        3.  System initiates AI-powered deep search via backend (R005.1.1).
        4.  If deep search finds the exam (placeholder), System adds it to the core database (R005.1.2) and displays course details.
        5.  If deep search does not find the exam (placeholder), System displays "Exam not found. Please try a different query." (R005.1.3) and remains on Add Course Module.
    10. Student User chooses "Set Target Date" (optional).
    11. If chosen, System displays a calendar interface.
    12. Student User selects a future target date.
    13. Student User clicks "Add Course" (enrollment button).
    14. System adds the course to the user's enrolled courses in the backend (placeholder).
    15. System triggers Teacher AI (via backend placeholder) for initial exam research and data set creation (R010.1).
    16. System displays a success message.
    17. System automatically navigates to the Dashboard.
* **Postconditions:** Course is added to user's profile, Teacher AI research initiated, user is on Dashboard.
* **Related Requirements (from SRS):** R001.4, R004.1, R004.2, R004.3, R004.4, R005.1, R006.1, R010.1.

### 3.5 UC005: Access Dashboard and Resume Learning

* **Goal:** A logged-in user with enrolled courses wants to continue their exam preparation.
* **Actor:** Student User, System, Teacher AI, Designer AI, Adaptive Coach, Personal Watcher
* **Preconditions:**
    * Student User is logged in.
    * Student User has at least one enrolled course.
    * A `currentCourse` is selected (either automatically or by user).
* **Flow:**
    1.  Student User launches application (or navigates from Welcome/Login/Add Course).
    2.  System checks login status and `currentCourse`.
    3.  System navigates to the Dashboard.
    4.  System displays the Dashboard interface, showing the selected course, progress elements, and content areas.
    5.  Student User interacts with the "Start Learning" / "Resume Session" button.
    6.  System (via Adaptive Coach placeholder) determines the next learning activity based on daily agenda and strategy.
    7.  System requests content from Teacher AI (via backend placeholder) based on the determined activity (e.g., text lesson on Topic X).
    8.  System requests Designer AI (via backend placeholder) to determine optimal presentation for the content.
    9.  System displays the content in the Content Area.
    10. Student User consumes the content.
    11. Student User clicks "Continue" (or similar action).
    12. Personal Watcher (placeholder) observes user interaction (e.g., time spent, completion).
    13. System (via Adaptive Coach placeholder) determines next activity (e.g., a quiz).
    14. System requests practice questions from Teacher AI (via backend placeholder).
    15. System displays quiz in Content Area.
    16. Student User takes the quiz.
    17. Personal Watcher (placeholder) observes quiz performance.
    18. System provides immediate feedback.
    19. System (via Adaptive Coach placeholder) updates strategy based on quiz results and determines next activity (e.g., a game for a struggling concept).
    20. System requests game from Game Master AI (via backend placeholder).
    21. System displays game in Content Area.
    22. Student User plays the game.
    23. Personal Watcher (placeholder) observes game interaction.
    24. Student User clicks "Pause Session" (or similar).
    25. System saves current progress.
* **Postconditions:** User has engaged with personalized learning content, progress is updated, and session state is saved.
* **Related Requirements (from SRS):** R001.3, R004.4, R007.1, R007.2, R007.4, R007.6, R007.7, R007.8, R008.1, R010.3, R010.4, R010.5, R011.1, R012.1, R013.1, R013.2.

### 3.6 UC006: Interact with AI Tutor / Chat

* **Goal:** A Student User wants to ask questions or get help from the AI Tutor or engage in community discussions.
* **Actor:** Student User, System, Teacher AI, Facilitator AI
* **Preconditions:**
    * Student User is logged in and on the Dashboard.
* **Flow:**
    1.  Student User clicks the floating chat icon.
    2.  System opens the chat panel.
    3.  Student User selects a chat type (e.g., "Chat with Teacher AI").
    4.  Student User types a question (e.g., "Explain photosynthesis again").
    5.  System sends query to Teacher AI (via backend placeholder).
    6.  Teacher AI (placeholder) generates a response.
    7.  System displays AI's response in the chat panel.
    8.  **Alternative Flow: Community Chat:**
        1.  Student User selects "Community Chats".
        2.  System displays community chat interface.
        3.  Student User types a message.
        4.  System sends message to community backend.
        5.  Facilitator AI (placeholder) moderates the message.
        6.  System displays message in chat for relevant users.
* **Postconditions:** User has received AI assistance or participated in community chat.
* **Related Requirements (from SRS):** R007.9, R010.4, R014.2.

### 3.7 UC007: Generate Custom Game

* **Goal:** A Student User wants to play a custom educational game on a specific topic.
* **Actor:** Student User, System, Game Master AI
* **Preconditions:**
    * Student User is logged in and on the Dashboard.
* **Flow:**
    1.  Student User clicks the "Play" link on the Dashboard.
    2.  System navigates to a game generation interface (or a modal within Dashboard).
    3.  Student User specifies a topic (e.g., "Force Vectors").
    4.  Student User clicks "Generate Game".
    5.  System displays a loading indicator.
    6.  System requests game from Game Master AI (via backend placeholder).
    7.  Game Master AI (placeholder) generates game assets and logic.
    8.  System embeds and launches the generated game within the Dashboard's content area.
    9.  Student User plays the game.
* **Postconditions:** User has played a custom-generated educational game.
* **Related Requirements (from SRS):** R007.11, R012.1.

### 3.8 UC008: Access Profile

* **Goal:** A Student User wants to view or update their profile details.
* **Actor:** Student User, System
* **Preconditions:**
    * Student User is logged in.
* **Flow:**
    1.  Student User clicks the user icon/profile link (e.g., on Dashboard or Welcome Page).
    2.  System navigates to the Profile Page.
    3.  System displays user's profile details (Name, Age, Gender, Board, Class, etc.).
    4.  Student User can view or modify editable fields.
    5.  Student User clicks "Save Changes".
    6.  System updates profile in backend database (placeholder).
    7.  System displays success message.
* **Postconditions:** User profile viewed/updated.
* **Related Requirements (from SRS):** R007.5.

### 3.9 UC009: Access Community Page

* **Goal:** A Student User wants to explore broader community features and forums.
* **Actor:** Student User, System
* **Preconditions:**
    * Student User is logged in.
* **Flow:**
    1.  Student User clicks the "Community Page" link on the Dashboard (or chat panel).
    2.  System navigates to the Community Page.
    3.  System displays community forums, study group suggestions, etc.
* **Postconditions:** User is on the Community Page.
* **Related Requirements (from SRS):** R007.10.

## 4. Future Use Cases (High-Level)

These use cases represent future enhancements that will be developed in later phases, leveraging the full capabilities of the AI agents:

* **UCF001: Adaptive Learning Path Adjustment:** System dynamically alters learning path based on real-time performance and inferred emotional state.
* **UCF002: Proactive Intervention:** System suggests additional resources or different explanations *before* user explicitly struggles.
* **UCF003: Personalized Gamification:** System adapts game mechanics and rewards based on individual user motivation patterns.
* **UCF004: AI-Assisted Study Group Formation:** System automatically identifies and suggests compatible study partners.
* **UCF005: Collaborative Whiteboard Session:** Users engage in real-time problem-solving on a shared digital whiteboard.
* **UCF006: Advanced AI Tutor Interaction:** AI Tutor engages in deeper Socratic dialogue and provides more nuanced assistance.