# Student Task Management System

**Student Name:** John Ulric F. Sicat
**Section:** BSCS-3A
**Course:** Software Engineering 1 — Module 7 Design and Implementation

## Project Overview

The Student Task Management System is a web-based Vue.js application designed to help students organize and monitor their academic tasks and deadlines. This repository contains the Module 7 frontend implementation of the **Tasks** entity selected from the Module 6 architectural design. The system provides features for creating, viewing, updating, deleting, searching, completing, and managing academic tasks while providing validation, notifications, and browser-based data persistence.

## Problem Statement

Many students struggle to keep track of assignments, projects, quizzes, and examination schedules. Missing deadlines can affect academic performance and time management. The Student Task Management System provides a centralized interface where students can manage their academic responsibilities, monitor task status, and keep track of important deadlines.

## Target Users

* College Students
* University Students
* Senior High School Students

## Selected Module 6 Entity: Tasks

| Field    | Description                           |
| -------- | ------------------------------------- |
| Title    | Name or description of the task       |
| Subject  | Course or subject the task belongs to |
| Due Date | Deadline for the task                 |
| Priority | Low, Medium, or High                  |
| Status   | Pending or Completed                  |

## Implemented Features

1. **Create** — Click the **Add Task** button to open a popup form for creating a new task.

2. **Read / Display** — Tasks are displayed as cards under the **Ongoing** and **Completed** tabs.

3. **Update** — Existing tasks can be edited through the Edit action, which opens the form with the task's current information.

4. **Delete** — Tasks can be deleted using an in-app confirmation dialog before permanent removal.

5. **Mark as Completed / Restore** — Ongoing tasks can be marked as completed and moved to the Completed tab. Completed tasks can also be restored to the Ongoing tab.

6. **Search** — Tasks can be filtered by title or subject using the search field in the currently selected tab.

7. **Form Validation** — Required fields such as title, subject, and due date are validated before a task can be submitted.

8. **Due-Date Validation** — The system prevents users from adding a task with a past due date. Today's date and future dates are accepted.

9. **Notifications** — Toast notifications provide feedback for actions such as adding, updating, deleting, completing, restoring, and invalid form submission.

10. **Persistence** — Task records are stored in browser `localStorage` and remain available after refreshing the page.

## Technologies Used

| Technology      | Purpose                                   |
| --------------- | ----------------------------------------- |
| Vue.js 3        | Frontend application framework            |
| Vite            | Development server and build tooling      |
| Tailwind CSS v4 | Responsive interface styling              |
| JavaScript      | Application logic and task management     |
| localStorage    | Browser-based data persistence            |
| Vitest          | Automated unit testing                    |
| jsdom           | Browser-like testing environment          |
| Vue Test Utils  | Vue component testing                     |
| Git + GitHub    | Version control and repository submission |
| GitHub Actions  | Continuous-integration build checking     |

## Testing

The system was tested using **Vitest** with the **jsdom** environment.

Five automated unit tests were prepared to verify important system functionality:

1. **Add Task Test** — Verifies that a valid task can be added to the system.
2. **Display Records Test** — Verifies that saved task records are displayed correctly.
3. **Edit Task Test** — Verifies that an existing task can be updated.
4. **Delete Task Test** — Verifies that a selected task can be removed.
5. **Due-Date Validation Test** — Verifies that a past due date is rejected while a valid due date is accepted.

The testing process included an intentionally failed test to demonstrate the identification and debugging of the due-date defect. After the source code was corrected, the test was executed again and passed successfully.

## Manual Testing

Ten manual test cases were performed for the five major tested features. Each feature contains one positive test case and one negative or edge test case.

The five tested features were:

* Add Task
* Display Task Records
* Edit Task
* Delete Task
* Search / Due-Date Validation

The manual testing results were documented with expected and actual results. The corrected due-date validation was also manually retested to confirm that past dates are rejected and valid dates can still be submitted.

## Defect Identification and Correction

During testing, an actual defect was identified in the task form's due-date validation.

### Identified Defect

The original system checked whether the due-date field was empty but did not prevent users from selecting a date that had already passed.

### Expected Behavior

The system should reject a past due date and display an appropriate validation message.

### Correction

The `validate()` function in `TaskForm.vue` was updated to compare the selected due date with the current date.

Past dates now produce the following error message:

**"Due date cannot be in the past."**

Today's date and future dates remain valid.

After the correction, the due-date feature was successfully retested, followed by regression testing of the other major system features.

## Design System

The interface follows an Apple-inspired visual language, built using Tailwind CSS v4 utility classes and CSS custom properties.

* **Typography:** `-apple-system` / `BlinkMacSystemFont` with Inter as a cross-platform alternative
* **Palette:** Indigo primary color with violet-tinted surfaces and emerald, red, and amber accents
* **Style:** Rounded cards, layered shadows, priority-coded accent bars, and frosted navigation elements
* **Navigation:** Sliding segmented control for the Ongoing and Completed task tabs
* **Motion:** Smooth hover, button, modal, and toast transitions
* **Accessibility:** Visible focus states, appropriate touch targets, and readable color contrast

Design tokens are defined in `src/style.css`, while the shared SVG icon system is located in `src/components/icons/AppIcon.vue`.

## Project Structure

```text
src/
├── components/
│   ├── icons/
│   │   └── AppIcon.vue
│   ├── AppHeader.vue
│   ├── TaskForm.vue
│   ├── TaskFormModal.vue
│   ├── TaskList.vue
│   ├── TabSwitcher.vue
│   ├── ConfirmDialog.vue
│   ├── NotificationToast.vue
│   └── AppFooter.vue
├── App.vue
├── main.js
└── style.css

test/
├── basic.spec.js
├── TestComponent.spec.js
└── App.spec.js
```

## Installation and Run Instructions

### 1. Check the required software

Make sure Node.js, npm, and Git are installed.

```bash
node --version
npm --version
git --version
```

### 2. Clone the repository

```bash
git clone https://github.com/UlricSicat/sicat-module7-vue-system.git
cd sicat-module7-vue-system
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open the local address displayed in the terminal, usually:

```text
http://localhost:5173/
```

### 5. Run the automated tests

To execute the Vitest unit tests:

```bash
npm run test:run
```

To run Vitest in watch mode:

```bash
npm run test
```

### 6. Build the application

```bash
npm run build
```

## Explanation of localStorage

Because the Module 7 prototype does not use a backend API or database, task records are stored directly in the browser using the `localStorage` Web API.

The application uses the storage key:

```text
module7-task-records
```

When a task is added, edited, deleted, or its status is changed, the task list is converted to JSON using `JSON.stringify()` and stored in the browser. When the application loads, the stored data is retrieved using `localStorage` and converted back into JavaScript data using `JSON.parse()`.

This allows task records to remain available after refreshing the browser.

Because `localStorage` is limited to the current browser and device, the data is not synchronized between different devices or users.

## Connection Between Module 6 and Module 7

| Module 6 Element         | Module 7 Implementation                            |
| ------------------------ | -------------------------------------------------- |
| Proposed complete system | Student Task Management System                     |
| Selected entity          | Tasks                                              |
| Presentation layer       | Vue.js components and Tailwind CSS                 |
| User interactions        | Task form, search field, tabs, and action buttons  |
| Application logic        | Vue and JavaScript CRUD, filtering, and validation |
| Data layer               | Browser `localStorage`                             |
| Backend/API/database     | Future implementation                              |

The Module 7 project implements the **Tasks** entity selected from the Module 6 design as a functional frontend prototype. The project demonstrates how the selected entity can be created, displayed, updated, deleted, searched, validated, and persisted before connecting the system to a real backend and database.

## Application and Testing Screenshots

The following screenshots document the development, testing, defect correction, and final verification process:

| Screenshot                       | Description                                                           |
| -------------------------------- | --------------------------------------------------------------------- |
| `01-existing-application.png`    | Existing Module 7 Vue.js system running in the browser                |
| `02-passing-unit-tests.png`      | Initial automated unit tests successfully executed using Vitest       |
| `03-failed-unit-test.png`        | Failed unit test showing the expected and actual results              |
| `04-identified-defect.png`       | Actual application behavior showing the past due-date defect          |
| `05-defect-correction.png`       | `TaskForm.vue` source code showing the due-date validation correction |
| `06-successful-retesting.png`    | Corrected due-date feature successfully tested                        |
| `07-final-regression-result.png` | Final passing unit tests and regression-testing results               |
| `08-github-commit.png`           | GitHub repository showing the testing and defect-correction commit    |

## Known Limitations and Proposed Future Improvements

### Limitations

* Task data is stored only in the current browser and device.
* There is no backend API or centralized database.
* There is no user authentication.
* Tasks cannot currently be synchronized between multiple devices.
* There are no automated deadline reminders.
* Browser `localStorage` is not suitable for multi-user or large-scale data storage.

### Future Improvements

* Connect the application to a real backend API and database based on the Module 6 architecture.
* Add user accounts and authentication so each student has a private task list.
* Add sorting by due date, priority, and status.
* Add automated deadline reminders and notifications.
* Add categories or tags such as Assignment, Quiz, Project, and Exam.
* Improve automated test coverage for additional components and edge cases.

## Repository

**Public GitHub Repository:**
https://github.com/UlricSicat/sicat-module7-vue-system.git
