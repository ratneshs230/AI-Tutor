# Conceptual Wireframes & Mockups: AI-Powered Learning Experience

## 1. Introduction

This document provides detailed textual descriptions of conceptual wireframes and mockups for the key user interface screens of the "AI-Powered Learning Experience" platform. It outlines the layout, essential UI elements, and interactive components for each screen, serving as a blueprint for visual design and frontend implementation. As an AI, direct visual generation is not possible; thus, these descriptions aim to convey the visual and interactive intent clearly.

## 2. General UI/UX Principles

* **Material Design Aesthetics:** Clean, modern, intuitive design with emphasis on cards, shadows, clear typography, and consistent spacing.
* **Vibrant Color Palette:** Consistent use of the selected vibrant color palette (e.g., from 'colour combinations' image) for backgrounds, accents, text, and charts.
* **Responsiveness:** Layouts are designed to adapt seamlessly across various screen sizes (mobile, tablet, desktop) using Tailwind CSS.
* **Accessibility:** Consideration for clear contrast, sufficient touch target sizes, and semantic HTML.
* **User Feedback:** Clear loading indicators, success/error messages, and interactive feedback for user actions.

## 3. Screen Descriptions

### 3.1 Screen: Welcome Page

* **Purpose:** Initial landing page, guiding users based on their login and enrollment status.
* **Layout:**
    * **Header:**
        * Top-right corner: User icon (placeholder image/Unicode character, e.g., ) with a subtle hover effect.
    * **Central Content (Vertically Centered):**
        * Large, prominent application title: "Welcome to AI Tutor" (e.g., `text-5xl font-black text-blue-600`).
        * Subtitle: "Your personalized learning companion." (e.g., `text-xl text-gray-600`).
        * Main action buttons (conditionally displayed).
        * Below main buttons: A "Test Scenarios" section (for development/testing only) with buttons to toggle `isLoggedIn` and `hasOngoingCourses` states.
* **Key Elements & Interactions:**
    * **Not Logged In State:**
        * Two prominent, rounded buttons side-by-side:
            * "Login" (primary color, navigates to `/login`).
            * "Curiosity" (secondary color, navigates to `/curiosity-platform`).
    * **Logged In (No Courses) State:**
        * Two prominent, rounded buttons side-by-side:
            * "Add Course" (primary color, navigates to `/add-course`).
            * "Curiosity" (secondary color, navigates to `/curiosity-platform`).
    * **Logged In (With One Course) State:**
        * Two prominent, rounded buttons:
            * "Continue" (primary color, navigates to `/dashboard` for the single course).
            * "Curiosity" (secondary color, navigates to `/curiosity-platform`).
    * **Logged In (With Multiple Courses) State:**
        * Dropdown labeled "Continue" (primary color, displays course names).
            * Selecting a course from the dropdown navigates to `/dashboard` for that course.
        * "Curiosity" button (secondary color, navigates to `/curiosity-platform`).
    * **User Icon:** Clicking navigates to `/profile` (placeholder for now).
* **Visual Cues:** Clean background, ample whitespace, clear button labels, subtle shadows on buttons.

### 3.2 Screen: Login Module

* **Purpose:** Allows users to authenticate (login/signup) and create/update their basic profile.
* **Layout:**
    * **Header:** Simple "Login" or "Sign Up" title.
    * **Central Card/Panel:** A prominent, rounded card component (`bg-white shadow-lg p-8`) containing the forms.
        * Sections for Email/Password, Phone/Password, and Social Login options.
        * Conditional display for profile creation fields.
* **Key Elements & Interactions:**
    * **Email/Password Form:**
        * Input fields for "Email" and "Password" (using `InputField` component).
        * "Remember Me" checkbox (using `Checkbox` component).
        * "Login" button.
        * Link/button for "Forgot Password?" (placeholder).
        * Link/button for "Don't have an account? Sign Up".
    * **Phone/Password Form (Toggleable/Separate Tab):**
        * Input fields for "Phone Number" and "Password".
        * Similar "Remember Me" and action buttons.
    * **Social Login Section:**
        * Divider (e.g., "- OR -").
        * Prominent buttons/icons for "Continue with Google", "Continue with Facebook", "Continue with Instagram".
    * **Profile Creation Form (Conditional, after initial signup/social login):**
        * Input fields for "Name", "Age" (number input).
        * Dropdown for "Gender" (Male, Female, Other, Prefer not to say).
        * Checkbox: "Are you currently in school?".
        * If checked: Dropdowns for "Board" and "Class".
        * "Complete Profile" button.
* **Visual Cues:** Centered form, clear input labels, distinct buttons for different login methods, subtle animations for form transitions.

### 3.3 Screen: Add Course Module

* **Purpose:** Enables logged-in users to search for and enroll in new courses/exams.
* **Layout:**
    * **Header:** "Add New Course" title.
    * **Central Card/Panel:** A main card containing the search and enrollment flow.
* **Key Elements & Interactions:**
    * **Course Search Bar:**
        * Large `InputField` for "Search for an exam or course..."
        * Below the input: `SuggestionsList` component dynamically displaying course suggestions as user types. Clicking a suggestion selects it.
    * **Deep Search Trigger:**
        * A button (e.g., "Search Deeper" or "Can't find your exam?") that initiates the AI-powered deep search.
        * `LoadingSpinner` displayed while deep search is active.
        * Success/Error message area: "Exam found and added!" or "Exam not found. Please try a different query."
    * **Selected Course Display:**
        * Once a course is selected/found, display its name prominently.
    * **Target Date Option:**
        * Checkbox: "Set Target Date".
        * If checked: `DatePicker` component appears (e.g., a calendar pop-up or inline calendar).
    * **Action Button:**
        * "Add Course" button to finalize enrollment.
* **Visual Cues:** Clean search interface, clear feedback on search status, intuitive date picker.

### 3.4 Screen: Dashboard Module

* **Purpose:** The central hub for a user's active exam preparation, displaying personalized content, progress, and access to all learning features.
* **Layout:**
    * **Header (Sticky):**
        * Top-left: Application Logo/Name.
        * Center: Prominent display of "Dashboard for [Selected Course Name]".
        * Top-right: User Profile Icon (navigates to `/profile`).
        * Course Selector (Dropdown) to switch between enrolled courses.
    * **Main Content Area (Grid/Flex Layout):** Divided into logical sections.
        * **Left Sidebar (Optional, or Top-level sections):** Links to Profile, Community, Play.
        * **Central Learning Area:** Dynamically populated with content.
        * **Right Sidebar/Widgets:** Progress, Agenda, Tests, Leaderboard.
    * **Floating Chat Icon:** Fixed at bottom-right.
* **Key Elements & Interactions:**
    * **Course Selector:** `Dropdown` component listing `ongoingCourses`. Selecting a course updates the dashboard content.
    * **Progress Section:**
        * Toggle: "Daily Learning Path" / "Overall Progress".
        * Placeholder for `ProgressBar` and visual progress map.
        * Dummy text for "Completed Topics," "Upcoming Topics," "Overall %".
        * Placeholder for `BadgeDisplay`.
    * **Leaderboard Section:** Placeholder text.
    * **Content Area (`LearningContentArea`):**
        * Large, central section.
        * Dummy buttons/placeholders for multi-modal content: "Load Text Lesson," "Show Interactive Visual," "Play Audio," "Play Video," "Show 3D Model," "Launch Game."
    * **Learning Control Button:** Prominent "Start Learning" / "Resume Session" / "Pause Session" button. Toggles text on click.
    * **Today's Agenda Section:** List of dummy topics/tasks.
    * **Today's Tests Section:** Button "Take Today's Quiz" (console log on click).
    * **Chat Interface:**
        * Floating `ChatIcon` (bottom-right).
        * Clicking it opens a modal/slide-out `ChatPanel`.
        * `ChatPanel` contains dummy links: "Community Chats," "Chat with Teacher AI," "Personal/Group Chats." Close button.
    * **Navigation Links:**
        * Profile Icon: Navigates to `/profile`.
        * "Community Page" link: Navigates to `/community`.
        * "Play" link: Navigates to `/play-games`.
* **Visual Cues:** A busy but organized layout. Clear headings for sections. Cards for individual content blocks or widgets. Consistent use of primary/secondary colors for actions and highlights.

### 3.5 Screen: Curiosity Platform (Initial)

* **Purpose:** Open-ended inquiry for any topic, accessible without login.
* **Layout:**
    * **Header:** "Curiosity Platform" title.
    * **Central Area:**
        * Input field for user query.
        * Button to submit query.
        * Loading indicator.
        * Display area for AI-generated multi-modal content.
* **Key Elements & Interactions:**
    * **Query Input:** Large `InputField` for "Ask me anything..."
    * **Submit Button:** "Generate Answer" or "Explore".
    * **Content Display Area:** Empty initially, then dynamically populated with text, dummy image/audio/video links.
* **Visual Cues:** Minimalist, clean, inviting design, focusing on the input and output areas.

## 4. Interaction Flows (Visualized by Element Placement)

* **Navigation:** Buttons and links clearly indicate their destination.
* **Conditional Display:** Elements appear/disappear based on user state (e.g., login, course enrollment).
* **Loading States:** Visual feedback (spinners) for asynchronous operations (e.g., deep search, content generation).
* **Modals/Panels:** Chat panel as an overlay, not a full page navigation.