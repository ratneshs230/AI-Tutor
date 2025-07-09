# Software Design Document (SDD) for the AI-Powered Learning Experience

## 1. Introduction

### 1.1 Purpose
This Software Design Document (SDD) describes the high-level architecture and detailed design of the "AI-Powered Learning Experience" platform. It translates the requirements outlined in the Software Requirements Specification (SRS) and the user interactions defined in the Use Case Document into a concrete technical design. This document serves as a blueprint for development, guiding implementation, integration, and testing efforts.

### 1.2 Scope
This SDD covers the architectural overview, major system components (frontend, backend, AI services, database), technology stack, and key design considerations for the initial release of the application. It focuses on how the system's functionalities will be realized, including the interaction patterns between different modules and AI agents.

### 1.3 Intended Audience
This document is intended for:
* The AI Co-pilot (for autonomous development).
* Human Developers (for implementation and debugging).
* Database Administrators.
* Quality Assurance (QA) Engineers.
* System Integrators.

## 2. System Architecture

The AI-Powered Learning Experience platform adopts a **microservices-oriented architecture** (conceptual for AI brains) combined with a **single-page application (SPA)** frontend and a **hybrid cloud-edge computing model**.

### 2.1 High-Level Architectural Diagram (Conceptual Textual Representation)

+----------------+       +-------------------+       +--------------------+
| User Device    |       | Backend Services  |       | AI Agent Services  |
| (Frontend SPA) | <---> | (Node.js/Express) | <---> | (Teacher, Designer,|
|                |       |                   |       | Game Master, etc.) |
+----------------+       +-------------------+       +--------------------+
^                        ^
|                        |
+------------------------+
Database
(MongoDB)


### 2.2 Architectural Components

* **Frontend (User Device / Client-Side):**
    * **Type:** Single Page Application (SPA).
    * **Framework:** React.js.
    * **Purpose:** Provides the dynamic, adaptive user interface, handles user interactions, and consumes APIs from the Backend Services. It's designed to be lightweight and responsive, leveraging edge caching for pre-generated content.
* **Backend Services (Server-Side):**
    * **Type:** RESTful API services.
    * **Framework:** Node.js with Express.js.
    * **Purpose:** Acts as the central orchestrator and data layer. It handles user authentication, course management, data persistence, and acts as the intermediary between the Frontend and the AI Agent Services. It exposes APIs for the Frontend and orchestrates calls to the various AI agents.
* **AI Agent Services (Conceptual Microservices):**
    * **Type:** Specialized AI models exposed as services.
    * **Purpose:** Each "Brain" (Teacher, Designer, Game Master) and supporting agent (Adaptive Coach, Personal Watcher, Matchmaker, Facilitator) will conceptually operate as a distinct service responsible for its specific AI logic and processing. These will be accessed by the Backend Services. (Initially, these are placeholder dummy APIs).
* **Database:**
    * **Type:** NoSQL Document Database (e.g., MongoDB).
    * **Purpose:** Persistently stores all application data, including user profiles, course details, learning progress, generated content metadata, and community data, as defined in the ERD.
* **Cloud Platform (Azure):**
    * **Purpose:** Provides the infrastructure for hosting Backend Services (Azure App Service/Functions), Database (Azure Cosmos DB), and potentially the actual AI models (Azure Machine Learning, Azure OpenAI Service, etc.). It supports scalability and global deployment.
* **Edge Computing (User Device):**
    * **Purpose:** Leveraged for caching personalized content and UI components directly on the user's device, ensuring low-latency interactions and reducing reliance on constant cloud communication. AI inference for lightweight models might also occur here in future.

## 3. Component Design

### 3.1 Frontend Design

* **Framework:** React.js (functional components with Hooks).
* **Routing:** `react-router-dom` for client-side navigation.
* **State Management:**
    * **Local Component State:** `useState` for managing UI-specific state within components.
    * **Global Application State:** React Context API (`AuthContext`, `CourseContext`, `LearningPathContext`, `ProgressContext`) for managing shared data across the application (e.g., user authentication status, enrolled courses, current learning session).
* **Styling:** Tailwind CSS for utility-first styling. Modular CSS (`.module.css`) for component-specific styles where necessary.
* **Component Hierarchy:**
    * `src/pages/`: Top-level components mapped to routes (e.g., `HomePage`, `LoginPage`, `DashboardPage`). These primarily compose `modules`.
    * `src/modules/`: Self-contained feature units (e.g., `LoginModule`, `AddCourseModule`, `Dashboard`, `CuriosityPlatform`). These encapsulate business logic and compose `components`.
    * `src/components/`: Reusable, presentational UI elements (e.g., `Button`, `InputField`, `Dropdown`, `DatePicker`, `LoadingSpinner`, `ChatIcon`).
* **API Interaction:** `src/utils/api.js` will contain functions for making HTTP requests to the backend services.

### 3.2 Backend Design

* **Framework:** Node.js with Express.js.
* **API Style:** RESTful APIs using JSON for data exchange.
* **Module Structure:**
    * `server/app.js`: Main Express application setup, middleware, and route mounting.
    * `server/routes/`: Defines API endpoints (e.g., `authRoutes.js`, `courseRoutes.js`, `teacherRoutes.js`).
    * `server/controllers/`: Contains the business logic for handling requests and preparing responses for each route.
    * `server/models/`: Defines Mongoose schemas (for MongoDB) corresponding to the entities in the ERD (e.g., `User.js`, `Exam.js`, `LearningStrategy.js`).
    * `server/services/`: Abstracts interactions with external systems (e.g., AI Agent Services, third-party APIs for deep search, email/SMS services).
    * `server/middleware/`: Custom middleware for authentication, authorization, error handling.
* **Authentication:** Passport.js for handling various authentication strategies (local email/password, social OAuth).
* **Data Access:** Mongoose ODM for interacting with MongoDB.

### 3.3 Database Design

* **Type:** MongoDB (NoSQL Document Database).
* **Schema:** Based directly on the textual ERD (`documentation/erd.md`). Each entity in the ERD will generally map to a MongoDB collection. Relationships will be managed using embedded documents for one-to-one/few-to-many, and references (Object IDs) for many-to-one/many-to-many relationships (with explicit join collections where necessary, e.g., `UserExamEnrollment`).
* **Data Integrity:** Enforced at the application level (backend validation) and through Mongoose schema definitions.

### 3.4 AI Service Integration Design (Placeholder Phase)

* **Interaction Pattern:** Frontend modules will make API calls to the Backend Services. The Backend Services will then make calls to the respective AI Agent Services.
* **Current State (Placeholders):**
    * AI Agent Services are currently simulated by dummy API endpoints within the Node.js Express backend (e.g., `server/controllers/teacherController.js`). These endpoints return mock data with simulated delays.
    * This allows frontend development to proceed without direct dependency on fully developed AI models.
* **Future State:** These placeholder calls will be replaced with actual API calls to deployed AI models (e.g., Azure Machine Learning endpoints, Azure OpenAI Service) or dedicated microservices for each AI agent.
* **Orchestration:** The "Adaptive Coach" (initially simulated backend logic, later a dedicated AI agent) will be responsible for orchestrating interactions between the "Teacher," "Designer," and "Game Master" brains based on user progress and needs.

## 4. Technology Stack Summary

* **Frontend:**
    * React.js
    * `react-router-dom`
    * Tailwind CSS
    * Chart.js (for standard charts)
    * Plotly.js (for advanced charts, configured for Canvas/WebGL)
* **Backend:**
    * Node.js
    * Express.js
    * Mongoose (ODM for MongoDB)
    * Passport.js (Authentication)
    * `cors`, `express-session`, `bcryptjs`, `jsonwebtoken`
* **Database:**
    * MongoDB (or Azure Cosmos DB for MongoDB API in Azure)
* **Cloud Platform:**
    * Microsoft Azure (Azure Static Web Apps, Azure Functions, Azure App Service, Azure Cosmos DB, Azure Machine Learning, Azure OpenAI Service)

## 5. Development Practices

* **Coding Standards:** Adherence to JavaScript/React/Node.js best practices, consistent formatting, clear variable naming, and modularity.
* **Testing Strategy:**
    * **Unit Tests:** For individual functions and components.
    * **Integration Tests:** For module interactions and API endpoints.
    * **End-to-End (E2E) Tests:** For critical user flows.
* **Documentation:** Comprehensive documentation including SRS, Use Cases, ERD, SDD, and detailed log files (`project_modification_log.md`, `error_and_fix_log.md`, `project_completion_report.md`, `future_development_plan.md`, `decision_log.md`, `requirements_traceability_log.md`, `ai_interaction_summary_log.md`, `project_development_plan_log.md`).
* **Version Control:** Git.
* **Autonomous Development:** Guided by `copilot_prompt.md` and updated log files.

## 6. Deployment Strategy (High-Level)

The application will be deployed on Microsoft Azure.
* **Frontend:** Azure Static Web Apps (for hosting the React SPA).
* **Backend APIs:** Azure Functions or Azure App Service (for Node.js Express backend).
* **Database:** Azure Cosmos DB (using MongoDB API for compatibility).
* **AI Models:** Azure Machine Learning or Azure OpenAI Service (for deploying custom AI models and leveraging pre-trained ones).
* **CI/CD:** Automated Continuous Integration/Continuous Deployment pipelines will be set up to streamline deployment.

## 7. Security Considerations

* **Authentication:** Robust user authentication mechanisms (email/password, social logins) with secure token management.
* **Authorization:** Role-based access control (RBAC) to ensure users only access authorized resources.
* **Data Encryption:** All data encrypted in transit (HTTPS) and at rest (database encryption).
* **Input Validation:** Strict input validation on both frontend and backend to prevent injection attacks and data corruption.
* **API Security:** Rate limiting, API key management, and secure handling of sensitive data in API requests/responses.

## 8. Scalability Considerations

* **Hybrid Cloud-Edge Model:** Offloads some processing and caching to user devices, reducing cloud load.
* **Serverless Functions/App Service:** Azure Functions/App Service provide automatic scaling for backend APIs.
* **Cosmos DB:** Designed for global distribution and horizontal scalability.
* **AI Inference Optimization:** Future implementation of techniques like model distillation, efficient prompt engineering, and caching strategies for AI models.
* **Modular Architecture:** Microservices approach for AI agents allows independent scaling of computationally intensive components.

## 9. Future Enhancements

The SDD provides the foundation for future enhancements, including:
* Full implementation and integration of all AI agent functionalities.
* Advanced gamification features (leaderboards, complex rewards).
* Rich community features (real-time chat, collaborative whiteboards).
* Detailed analytics and monitoring dashboards.
* Mobile native applications.