# Software Requirements Specification (SRS) for the AI-Powered Learning Experience

## 1. Introduction

### 1.1 Purpose
This Software Requirements Specification (SRS) document details the functional and non-functional requirements for the "AI-Powered Learning Experience" platform, an innovative educational application designed to provide a hyper-personalized and deeply engaging learning journey for students preparing for competitive exams in India. This document serves as a foundational guide for all development, testing, and deployment activities.

### 1.2 Scope
The application will provide dynamic, on-demand content generation, adaptive user interfaces, and interactive educational games, all driven by a sophisticated multi-agent AI system. It aims to eliminate the need for traditional, static front-end development and content creation by dynamically responding to individual learner needs and preferences. This SRS covers the requirements for the initial release, focusing on core user flows, AI agent interactions, and foundational technical architecture.

### 1.3 Intended Audience
This document is intended for:
* The AI Co-pilot (for autonomous development).
* Human Developers (for implementation and debugging).
* UI/UX Designers.
* Quality Assurance (QA) Engineers.
* Project Managers.
* Stakeholders interested in the system's capabilities.

## 2. Overall Description

### 2.1 Product Perspective
The AI-Powered Learning Experience is a standalone application, accessible via web browsers (and potentially mobile in future phases). It integrates with various backend services, including AI models (Teacher, Designer, Game Master Brains), a database, and potentially external APIs for deep search. It is designed to be highly interactive and adaptive, providing a unique experience for each user.

### 2.2 User Classes and Characteristics
* **Guest User:**
    * **Characteristics:** Not logged in, no profile.
    * **Access:** Limited to the Welcome Page and Curiosity Platform.
    * **Goals:** Explore application capabilities, learn about specific topics without commitment.
* **Student User (Logged In):**
    * **Characteristics:** Authenticated, has a profile (Name, Age, Gender, Student Status, Board, Class). May or may not have enrolled courses.
    * **Access:** Full access to Welcome Page, Login Module, Add Course Module, Dashboard, Curiosity Platform, Profile, Community, and Play features.
    * **Goals:** Prepare for specific exams, track progress, access personalized content, engage in practice, play educational games, collaborate with peers, seek AI assistance.

### 2.3 Operating Environment
* **Frontend:** Web-based Single Page Application (SPA) using React.
* **Backend:** Node.js with Express.js.
* **Database:** MongoDB (or similar NoSQL/SQL database, TBD, but assumed for backend interactions).
* **Cloud Platform:** Microsoft Azure (for deployment of backend services, AI models, and database).
* **AI Models:** Custom-trained AI models (Teacher, Designer, Game Master Brains) and potentially integration with Azure AI services (e.g., Azure OpenAI, Azure Cognitive Services) for specific functionalities.

### 2.4 General Constraints
* **No SVG Graphics:** All graphics (charts, diagrams, icons) must be rendered using Canvas (Chart.js, Plotly.js), structured HTML/CSS with Tailwind, or Unicode characters.
* **No Mermaid JS:** Diagrams must be implemented using structured HTML/CSS with Tailwind.
* **Tailwind CSS Only (Frontend Styling):** All frontend styling must primarily use Tailwind CSS utility classes. Minimal embedded CSS is allowed only for highly specific, non-Tailwind-achievable requirements (e.g., specific chart container responsiveness).
* **Chart.js & Plotly.js (Mandatory):** Charting must utilize Chart.js and Plotly.js (configured for Canvas/WebGL where possible).
* **No `alert()` or `confirm()`:** Custom modal UI must be used for user notifications.
* **Data Persistence:** User profiles, course enrollments, and generated content/strategies must be persistently stored (backend database).
* **AI Agent Development:** Actual AI model training and complex AI logic implementation for the "Brains" are deferred to later phases. Current development will use placeholder backend services.

## 3. Functional Requirements

### 3.1 Welcome Page (R001)
* **R001.1 Display User Icon:** The page shall display a user icon in the top right corner.
* **R001.2 Conditional Button Display:** The page shall dynamically display buttons based on the user's login status and course enrollment:
    * **R001.2.1 Not Logged In:** Display "Login" and "Curiosity" buttons.
    * **R001.2.2 Logged In (No Courses):** Display "Add Course" and "Curiosity" buttons.
    * **R001.2.3 Logged In (With Ongoing Courses):** Display "Continue," "Add Course," and "Curiosity" buttons.
* **R001.3 "Continue" Button Functionality:**
    * **R001.3.1 Single Course:** If only one course is ongoing, the "Continue" button shall directly navigate to the Dashboard for that course.
    * **R001.3.2 Multiple Courses:** If multiple courses are ongoing, the "Continue" button shall function as a dropdown menu, allowing the user to select a specific course. Upon selection, the system shall navigate to the Dashboard for the chosen course.
* **R001.4 "Add Course" Button Navigation:** The "Add Course" button shall navigate to the Add Course Module (`/add-course`). This button shall be visible to all logged-in users.
* **R001.5 "Curiosity" Button Navigation:** The "Curiosity" button shall navigate to the Curiosity Platform (`/curiosity-platform`). This button shall be visible to all users (logged in or not).
* **R001.6 "Login" Button Navigation:** The "Login" button shall navigate to the Login Module (`/login`). This button shall be visible only to not-logged-in users.
* **R001.7 Initial Launch Behavior:** Upon application launch, if the user is not logged in, the application shall land on the Welcome Page. If the application is already running in the background and not closed, it shall resume directly to the Dashboard (if logged in with a selected course).

### 3.2 Login Module (R002, R003)
* **R002.1 Authentication Options:** The module shall provide various authentication options:
    * **R002.1.1 Email/Password:** Allow users to log in or sign up using email and password.
    * **R002.1.2 Phone/Password:** Allow users to log in or sign up using phone number and password.
    * **R002.1.3 Social Logins:** Provide options to log in or sign up using Google, Facebook, or Instagram accounts (placeholder for OAuth flows).
* **R002.2 "Remember Me" Option:** A "remember me" checkbox shall be available to maintain the user's login session.
* **R003.1 Profile Creation (New Users):** Upon successful login/signup for new users, the module shall prompt for profile creation details.
    * **R003.1.1 Required Details:** Collect Name, Age, and Gender.
    * **R003.1.2 Student-Specific Details (Conditional):**
        * **R003.1.2.1 School Status:** Ask if the user is currently in school (Yes/No).
        * **R003.1.2.2 Board & Class:** If "Yes" to school status, prompt for Board (e.g., CBSE, ICSE, State Board, Other) and Class (e.g., Nursery, KG, 1st, ..., 12th, Graduate, Post-Graduate, Other).
    * **R003.1.3 Data Persistence:** All collected profile details shall be saved to the user's personal profile in the backend database.
* **R002.3 Post-Authentication Navigation:** Upon successful login or profile creation:
    * **R002.3.1 With Courses:** If the user has one or more enrolled courses, the system shall automatically navigate to the Dashboard.
    * **R002.3.2 Without Courses:** If the user has no enrolled courses, the system shall navigate to the Welcome Page (where they will see the "Add Course" button).

### 3.3 Add Course Module (R004, R005, R006)
* **R004.1 Course Search Bar:** The module shall feature a search bar where users can enter keywords to find courses/exams.
* **R004.2 Dynamic Suggestions:** The application shall offer real-time suggestions from its existing course database as the user types.
* **R005.1 AI-Powered Deep Search:** If a desired exam is not found in the local suggestions/database:
    * **R005.1.1 Backend Research:** The system shall initiate a deeper, AI-powered web search on the backend to discover new exam data (simulating Gemini's deep research).
    * **R005.1.2 Database Augmentation:** If an exam is successfully found through deep research, it shall be added to the application's core course database.
    * **R005.1.3 Not Found Message:** If no valid exam is found after deep search, a message shall appear prompting the user to choose a valid exam.
* **R006.1 Target Date Option:** Users shall have the option to set a target date for the course.
    * **R006.1.1 Calendar Interface:** If the option is chosen, a calendar interface shall be provided to select a future date.
* **R004.3 Course Enrollment:** Upon successful selection (or discovery) and optional target date setting, the user shall be able to enroll in the course.
* **R004.4 Post-Enrollment Navigation:** Once a course is successfully added, the application shall automatically navigate to the Dashboard.

### 3.4 Dashboard Module (R007, R008)
* **R007.1 Course Overview & Selection:**
    * **R007.1.1 Display Current Course:** Clearly display the currently selected course/exam.
    * **R007.1.2 Switch Courses:** Allow users to switch between their enrolled courses (if multiple) via a selector.
* **R007.2 Personalized Learning Path & Progress:**
    * **R007.2.1 Toggle View:** Provide a toggle between "Daily Learning Path" and "Overall Progress" for the selected course.
    * **R007.2.2 Visual Progress:** Display a visual representation of progress (e.g., "constellation map" or "quest path").
    * **R007.2.3 Progress Metrics:** Display completed topics, upcoming topics, and overall course completion percentage.
    * **R007.2.4 Dynamic Badges:** Showcase dynamic badges earned.
* **R007.3 Leaderboard (Placeholder):** Include a placeholder section for a future leaderboard tracking top performers.
* **R007.4 Content Area (Designer Brain Orchestration):**
    * **R007.4.1 Dynamic Content Display:** A central area for dynamically presenting "today's learning content," orchestrated by the "Designer" Brain.
    * **R007.4.2 Multi-Modal Playback:** The dashboard shall be able to play audio, videos, show interactive illustrations, 3D models, and allow users to play games directly within this area.
* **R007.5 Profile Access:** Provide a clear link/icon to access the user's profile.
* **R007.6 Learning Control Button:** Implement a prominent "Start Learning" / "Resume Session" / "Pause Session" button to initiate/control the automated learning flow.
* **R007.7 Today's Agenda:** Display the topics and tasks planned for the current day's learning.
* **R007.8 Today's Tests:** Provide access to questions and quizzes specific to today's agenda.
* **R007.9 Chat Interface:**
    * **R007.9.1 Floating Icon:** A persistent chat icon in the bottom right corner.
    * **R007.9.2 Chat Panel:** Clicking the icon opens a chat panel with access to Community Chats, Chat with Teacher AI, and Personal/Group Chats.
* **R007.10 Community Page Link:** Provide a link to a dedicated Community Page.
* **R007.11 "Play" Link:** Provide a link for users to talk with AI and generate custom games.
* **R008.1 Access Control:** The Dashboard shall only be accessible if the user is logged in AND has a `currentCourse` selected. If not, the system shall redirect the user to the Welcome Page.

### 3.5 Curiosity Platform (R009)
* **R009.1 Open-Ended Inquiry:** The platform shall allow users to freely input any query or topic.
* **R009.2 AI-Powered Multi-Modal Content Generation:** The "Teacher" Brain shall dynamically generate comprehensive, multi-format content (text, visuals, audio, video, notes) in response to user queries.
* **R009.3 No Login Required:** The Curiosity Platform shall be accessible to all users, regardless of their login status.

### 3.6 AI Agent Interactions (Functional Requirements for Backend Orchestration)
* **R010.1 Teacher Brain - Exam Research:** The system shall trigger the "Teacher" Brain to perform deep research on newly added exams, creating a comprehensive data set.
* **R010.2 Teacher Brain - Strategy Generation:** The system shall use the "Teacher" Brain to generate mock preparation strategies (based on target time/difficulty) and refine them into "true strategies" based on initial diagnostic test results.
* **R010.3 Teacher Brain - Daily Agenda Generation:** The system shall trigger the "Teacher" Brain to generate a daily agenda once per day, and on user request for more content.
* **R010.4 Teacher Brain - Content Generation:** The system shall trigger the "Teacher" Brain to generate specific multi-modal content (lessons, visuals, audio, video, notes) on demand, ensuring non-redundancy and novelty.
* **R010.5 Teacher Brain - Practice Generation:** The system shall trigger the "Teacher" Brain to generate practice questions and quizzes.
* **R011.1 Designer Brain - UI/UX Adaptation:** The system shall leverage the "Designer" Brain to dynamically arrange UI elements and adapt layouts based on user behavior and learning style.
* **R011.2 Designer Brain - Motivational Elements:** The system shall use the "Designer" Brain to integrate gamified motivational elements (e.g., dynamic badges, visual progress maps).
* **R012.1 Game Master Brain - Game Generation:** The system shall trigger the "Game Master" Brain to instantly create interactive educational games tailored to specific concepts or user requests.
* **R013.1 Personal Watcher - Behavior Observation:** The system shall continuously observe user behavior (clicks, answers, time spent, chat interactions) to gather data.
* **R013.2 Adaptive Coach - Learning Path Adjustment:** The system shall use the "Adaptive Coach" to continuously adjust the learning path, content delivery, and difficulty based on "Personal Watcher" data.
* **R013.3 Adaptive Coach - Predictive Analytics:** The system shall use the "Adaptive Coach" to forecast future difficulties and proactively suggest interventions.
* **R014.1 Matchmaker - Study Group Suggestions:** The system shall use the "Matchmaker" to intelligently identify and suggest temporary study groups.
* **R014.2 Facilitator - Discussion Moderation:** The system shall use the "Facilitator" to moderate community discussions, guide conversations, and summarize key points.

## 4. Non-Functional Requirements

### 4.1 Performance
* **NFR001.1 Responsiveness:** The application UI shall be highly responsive, with transitions and interactions occurring smoothly (e.g., < 100ms for UI updates).
* **NFR001.2 Load Times:** Initial page load time shall be minimized (< 3 seconds on broadband). Content generation and retrieval (from AI brains) should aim for reasonable latency (e.g., < 5 seconds for complex content, < 2 seconds for simple content/practice questions).
* **NFR001.3 Scalability:** The system shall be designed to scale efficiently to support a large user base (e.g., tens of thousands of concurrent users) without significant degradation in performance. This includes efficient management of AI inference costs.

### 4.2 Security
* **NFR002.1 Authentication:** The system shall securely authenticate users using industry-standard protocols (e.g., OAuth for social logins, secure password hashing for email/phone).
* **NFR002.2 Authorization:** The system shall ensure that users can only access data and functionalities for which they have explicit permission (e.g., only their own profile, courses they are enrolled in).
* **NFR002.3 Data Privacy:** User behavior data collected by the "Personal Watcher" and personal profile information shall be handled with strict adherence to data privacy regulations. Data anonymization techniques shall be applied where feasible.
* **NFR002.4 Data Encryption:** All sensitive data (e.g., passwords, personal details) shall be encrypted both in transit and at rest.

### 4.3 Usability
* **NFR003.1 Intuitive UI:** The user interface shall be intuitive and easy to navigate for users with varying levels of technical proficiency.
* **NFR003.2 Accessibility:** The application shall adhere to WCAG 2.1 AA standards to ensure accessibility for users with disabilities.
* **NFR003.3 User Feedback:** The system shall provide clear and immediate feedback to user actions (e.g., loading indicators, success/error messages).

### 4.4 Maintainability
* **NFR004.1 Modular Design:** The codebase shall be modular, with clear separation of concerns (frontend, backend, AI services, components, modules).
* **NFR004.2 Code Standards:** All code shall adhere to established coding standards and best practices (e.g., consistent formatting, meaningful variable names, comprehensive comments where appropriate).
* **NFR004.3 Documentation:** The project shall be well-documented (including this SRS, design documents, API documentation, and detailed log files).

### 4.5 Reliability
* **NFR005.1 Uptime:** The production system shall aim for high availability (e.g., 99.9% uptime).
* **NFR005.2 Error Handling:** The system shall gracefully handle errors, providing informative messages to users and logging detailed errors for developers.
* **NFR005.3 Data Integrity:** The system shall ensure the integrity and consistency of all stored data.

### 4.6 Ethical AI Considerations
* **NFR006.1 Bias Mitigation:** The AI models shall be continuously monitored and audited to detect and mitigate biases in content generation, UI adaptation, and assessment.
* **NFR006.2 Transparency & Explainability:** Where feasible, the system shall provide a degree of transparency regarding AI decisions (e.g., why a certain content format or layout was chosen).
* **NFR006.3 Prevent Over-reliance:** The application design shall incorporate features and pedagogical approaches that encourage critical thinking and prevent students from becoming overly dependent on AI.

## 5. Data Requirements (High-Level)

* **User Data:** User ID, Name, Email/Phone, Password (hashed), Age, Gender, Is Student, Board, Class, Login Status, Session Tokens.
* **Course Data:** Course ID, Course Name, Exam Syllabus Details, Exam Difficulty, Target Date (per user enrollment).
* **Learning Progress Data:** Topic Completion Status, Quiz Scores, Practice Performance, Time Spent on Content, Interaction Patterns.
* **Content Data:** Generated Text, Image URLs/Data, Audio URLs/Data, Video URLs/Data, Quick Notes, Practice Questions, Quiz Definitions.
* **Strategy Data:** Personalized Learning Strategies, Daily Agendas.
* **Gamification Data:** Earned Badges, Progress Map Data, Leaderboard Scores.
* **Community Data:** Chat Messages, Forum Posts, Study Group Information.

## 6. AI Agent Interaction Overview

The system's core functionality relies on the seamless interaction and orchestration of specialized AI agents:

* **Teacher Brain:** Generates all learning content (text, visual, audio, video, practice).
* **Designer Brain:** Adapts UI/UX, integrates motivational elements.
* **Game Master Brain:** Generates educational games.
* **Personal Watcher:** Observes user behavior and collects data.
* **Adaptive Coach:** Orchestrates learning paths, triggers interventions, uses predictive analytics.
* **Matchmaker:** Suggests study groups.
* **Facilitator:** Moderates community discussions.

These agents communicate via a sophisticated orchestration layer (the "Adaptive Coach" acting as a central intelligence) and backend APIs, ensuring a unified and adaptive user experience.
