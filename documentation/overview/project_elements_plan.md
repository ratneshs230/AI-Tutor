# Project Development Plan: By Application Elements

## 1. Introduction

This document provides a detailed development plan for the "AI-Powered Learning Experience" platform, organized by major functional and architectural elements. It breaks down the project into manageable components, outlining specific tasks, their dependencies, and their current status. This plan serves as a granular roadmap, complementing the high-level `project_development_plan_log.md` and the immediate `future_development_plan.md`.

## 2. Status Key

* **Not Started:** Work on this element/task has not yet begun.
* **In Progress:** Work is actively underway.
* **Completed:** The element/task has been fully implemented and verified (at least at a placeholder/dummy level for AI components).
* **Blocked:** Progress is halted due to an unresolved dependency or issue.

## 3. Application Elements and Development Tasks

### 3.1 Core UI & Navigation (Frontend Foundation)

**Description:** Establishes the basic user interface, navigation flow, and global styling for the application.

* **Task 3.1.1: Welcome Page UI & Navigation**
    * **Details:** Implement conditional rendering for buttons (Login/Add Course/Continue/Curiosity), dropdown for multiple courses, and navigation to respective routes. Includes temporary state for testing.
    * **Status:** Completed
    * **Related SRS:** R001.1, R001.2, R001.3, R001.4, R001.5, R001.6, R001.7
    * **Related SDD:** Frontend Design (SPA structure, React, Routing)
* **Task 3.1.2: Login Module UI**
    * **Details:** Implement UI for Email/Password, Phone/Password, Social Login placeholders, "Remember Me," and conditional profile creation form (Name, Age, Gender, Student details).
    * **Status:** Completed
    * **Related SRS:** R002.1, R002.2, R003.1
    * **Related SDD:** Frontend Design (Components, State Management)
* **Task 3.1.3: Add Course Module UI**
    * **Details:** Implement UI for course search bar, dynamic suggestions, target date setting (with calendar), and placeholders for AI-powered deep search integration.
    * **Status:** Completed
    * **Related SRS:** R004.1, R004.2, R006.1
    * **Related SDD:** Frontend Design (Components, State Management)
* **Task 3.1.4: Dashboard Module UI (Dummy)**
    * **Details:** Create comprehensive dummy Dashboard UI with placeholders for all major features (progress, content area, agenda, tests, chat, etc.) and ensure all internal links/buttons are navigable. Implement access control.
    * **Status:** Completed
    * **Related SRS:** R007.1, R007.2, R007.3, R007.4, R007.5, R007.6, R007.7, R007.8, R007.9, R007.10, R007.11, R008.1
    * **Related SDD:** Frontend Design (Components, State Management), AI Service Integration Design (Placeholders)
* **Task 3.1.5: Curiosity Platform UI (Initial)**
    * **Details:** Create foundational UI for open-ended inquiry, with a placeholder area for AI-driven content generation and display.
    * **Status:** Not Started
    * **Related SRS:** R009.1, R009.2, R009.3
    * **Related SDD:** Frontend Design (Components, State Management)
* **Task 3.1.6: Core UI Components & Global Styling Refinement**
    * **Details:** Standardize and refine reusable UI components (`Button`, `InputField`, `Dropdown`, `DatePicker`, `SuggestionsList`, `LoadingSpinner`, `Checkbox`) and establish robust global styling.
    * **Status:** Not Started
    * **Related SDD:** Frontend Design (Styling, Component Hierarchy)

### 3.2 User Management (Backend & Frontend Integration)

**Description:** Handles user registration, authentication, profile creation, and management.

* **Task 3.2.1: User Authentication Backend (Placeholders)**
    * **Details:** Implement dummy backend APIs for user registration, login (email/password, phone), and social login (OAuth) integration.
    * **Status:** Not Started
    * **Related SRS:** R002.1, R002.2
    * **Related SDD:** Backend Design (Authentication), Database Design (User entity)
    * **Related ERD:** [User] entity
* **Task 3.2.2: User Profile Management Backend (Placeholders)**
    * **Details:** Implement dummy backend APIs for storing and retrieving user profiles (Name, Age, Gender, Student details).
    * **Status:** Not Started
    * **Related SRS:** R003.1, R003.1.1, R003.1.2, R003.1.3
    * **Related SDD:** Backend Design (API Style, Controllers), Database Design (User entity)
    * **Related ERD:** [User] entity
* **Task 3.2.3: Frontend-Backend Auth Integration**
    * **Details:** Connect frontend Login Module UI to actual backend authentication APIs. Update `AuthContext` to manage real user session.
    * **Status:** Not Started
    * **Related SRS:** R002.3
    * **Related SDD:** Frontend Design (API Interaction), Backend Design (Authentication)

### 3.3 Course Management (Backend & Frontend Integration)

**Description:** Manages course enrollment, exam details, and the AI-powered course discovery.

* **Task 3.3.1: Course Management Backend & Database (Placeholders)**
    * **Details:** Develop dummy backend APIs for managing courses (adding, retrieving enrolled courses), storing course details, and handling target dates. Set up core course database schema.
    * **Status:** Not Started
    * **Related SRS:** R004.3, R006.1.1
    * **Related SDD:** Backend Design (API Style, Controllers), Database Design (Exam, UserExamEnrollment entities)
    * **Related ERD:** [Exam], [UserExamEnrollment] entities
* **Task 3.3.2: AI-Powered Course Discovery Backend (Teacher Brain Integration - Placeholders)**
    * **Details:** Implement the dummy backend logic for the "deep search" in the Add Course Module, simulating AI-powered web search and database augmentation.
    * **Status:** Completed
    * **Related SRS:** R005.1, R005.1.1, R005.1.2, R005.1.3, R010.1
    * **Related SDD:** Backend Design (AI Service Integration Design), AI Service Integration Design (Placeholders)
* **Task 3.3.3: Frontend-Backend Course Integration**
    * **Details:** Connect frontend Add Course Module UI to actual backend course management APIs. Update `CourseContext` to manage real enrolled courses.
    * **Status:** Not Started
    * **Related SRS:** R004.4
    * **Related SDD:** Frontend Design (API Interaction), Backend Design (API Style)

### 3.4 Content Delivery & Generation (Teacher Brain Focus)

**Description:** Core functionality for generating and delivering personalized learning content.

* **Task 3.4.1: Teacher Brain Backend Service Placeholders**
    * **Details:** Implement dummy backend API endpoints to simulate core functionalities of the 'Teacher' Brain (exam research, strategy generation, daily agenda, content generation, practice generation).
    * **Status:** Completed
    * **Related SRS:** R010.1, R010.2, R010.3, R010.4, R010.5
    * **Related SDD:** AI Service Integration Design (Placeholders)
* **Task 3.4.2: Frontend Integration of Teacher Brain Content**
    * **Details:** Integrate Dashboard's content area with calls to Teacher Brain backend placeholders to display multi-modal content (text, visuals, audio, video, practice questions).
    * **Status:** Not Started
    * **Related SRS:** R007.4, R010.4, R010.5
    * **Related SDD:** Frontend Design (API Interaction), AI Service Integration Design
* **Task 3.4.3: Daily Agenda & Strategy Persistence**
    * **Details:** Implement backend logic to store and retrieve generated daily agendas and learning strategies.
    * **Status:** Not Started
    * **Related SRS:** R010.2, R010.3
    * **Related SDD:** Backend Design (Controllers), Database Design (LearningStrategy, DailyAgenda entities)
    * **Related ERD:** [LearningStrategy], [DailyAgenda] entities

### 3.5 AI Orchestration & Adaptive Learning (Adaptive Coach/Personal Watcher Focus)

**Description:** Manages the intelligent adaptation of the learning path and user experience.

* **Task 3.5.1: Personal Watcher Backend (Placeholder)**
    * **Details:** Implement dummy backend APIs to simulate collection and storage of user interaction data (clicks, answers, time spent, chat interactions).
    * **Status:** Not Started
    * **Related SRS:** R013.1
    * **Related SDD:** AI Service Integration Design (Placeholders)
    * **Related ERD:** [UserProgress] entity
* **Task 3.5.2: Adaptive Coach Backend (Placeholder)**
    * **Details:** Implement dummy backend APIs to simulate learning path adjustment, content delivery triggers, and predictive analytics. This will orchestrate calls to other AI Brains.
    * **Status:** Not Started
    * **Related SRS:** R013.2, R013.3
    * **Related SDD:** AI Service Integration Design (Placeholders, Orchestration)
* **Task 3.5.3: Automated Learning Flow Frontend**
    * **Details:** Implement the "Start/Resume/Pause Learning" button logic to interact with Adaptive Coach placeholders, dynamically requesting and displaying content/practice/games.
    * **Status:** Not Started
    * **Related SRS:** R007.6
    * **Related SDD:** Frontend Design (State Management, API Interaction)

### 3.6 Gamification (Game Master Brain Focus)

**Description:** Integrates educational games and motivational elements.

* **Task 3.6.1: Game Master Backend Service Placeholders**
    * **Details:** Implement dummy backend API endpoints to simulate game generation based on topic.
    * **Status:** Completed
    * **Related SRS:** R012.1
    * **Related SDD:** AI Service Integration Design (Placeholders)
* **Task 3.6.2: Frontend Game Integration**
    * **Details:** Implement the "Play" link to trigger game generation via backend placeholder and embed/display the dummy game in the UI.
    * **Status:** Not Started
    * **Related SRS:** R007.11
    * **Related SDD:** Frontend Design (API Interaction)
* **Task 3.6.3: Dynamic Badges Implementation (Frontend & Backend)**
    * **Details:** Implement backend logic for badge earning criteria and frontend display of dynamic badges.
    * **Status:** Not Started
    * **Related SRS:** R007.2.4, R011.2
    * **Related SDD:** Backend Design (Controllers), Database Design (Badge, UserBadge entities)
    * **Related ERD:** [Badge], [UserBadge] entities
* **Task 3.6.4: Leaderboard Implementation (Frontend & Backend)**
    * **Details:** Implement backend logic for tracking and retrieving top performers and frontend display of the leaderboard.
    * **Status:** Not Started
    * **Related SRS:** R007.3
    * **Related SDD:** Backend Design (Controllers)

### 3.7 Community & Collaboration (Matchmaker/Facilitator Focus)

**Description:** Facilitates social learning and communication.

* **Task 3.7.1: Chat Backend Service Placeholders**
    * **Details:** Implement dummy backend APIs for sending/receiving chat messages (AI Tutor, Community, Group).
    * **Status:** Not Started
    * **Related SRS:** R007.9
    * **Related SDD:** Backend Design (API Style), Database Design (ChatMessage entity)
    * **Related ERD:** [ChatMessage] entity
* **Task 3.7.2: Frontend Chat Integration**
    * **Details:** Connect the floating chat icon to the chat panel, and integrate chat panel with backend placeholders for message sending/receiving.
    * **Status:** Not Started
    * **Related SRS:** R007.9
    * **Related SDD:** Frontend Design (API Interaction)
* **Task 3.7.3: Study Group Backend Service Placeholders**
    * **Details:** Implement dummy backend APIs for suggesting and managing study groups.
    * **Status:** Completed
    * **Related SRS:** R014.1
    * **Related SDD:** AI Service Integration Design (Placeholders), Database Design (StudyGroup entity)
    * **Related ERD:** [StudyGroup] entity
* **Task 3.7.4: Community Page UI**
    * **Details:** Develop the UI for a dedicated Community Page with sections for forums and study group suggestions.
    * **Status:** Not Started
    * **Related SRS:** R007.10
    * **Related SDD:** Frontend Design (Component Hierarchy)

### 3.8 Cross-Cutting Concerns

**Description:** Tasks that span multiple modules or affect the entire system.

* **Task 3.8.1: Global Error Handling & Notifications**
    * **Details:** Implement a consistent system for displaying user-friendly error messages and notifications (e.g., toast messages).
    * **Status:** Not Started
    * **Related SDD:** Frontend Design, Backend Design (Middleware)
* **Task 3.8.2: Comprehensive Testing (Unit, Integration, E2E)**
    * **Details:** Develop and execute test suites across the entire application.
    * **Status:** Not Started
    * **Related SDD:** Development Practices
* **Task 3.8.3: Performance Optimization**
    * **Details:** Implement optimizations like code splitting, lazy loading, image optimization, and API caching.
    * **Status:** Not Started
    * **Related NFR:** NFR001.1, NFR001.2, NFR001.3
    * **Related SDD:** Scalability Considerations
* **Task 3.8.4: Security Hardening**
    * **Details:** Implement security best practices, input validation, and authorization checks.
    * **Status:** Not Started
    * **Related NFR:** NFR002.1, NFR002.2, NFR002.3, NFR002.4
    * **Related SDD:** Security Considerations
* **Task 3.8.5: Accessibility (A11y) Compliance**
    * **Details:** Ensure the UI components and overall application adhere to WCAG 2.1 AA standards.
    * **Status:** Not Started
    * **Related NFR:** NFR003.2
    * **Related SDD:** Development Practices
* **Task 3.8.6: Azure Deployment Setup**
    * **Details:** Configure Azure resources and set up CI/CD pipelines.
    * **Status:** Not Started
    * **Related SDD:** Deployment Strategy