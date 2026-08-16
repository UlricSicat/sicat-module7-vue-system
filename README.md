# Student Task Management System

**Student Name:** [Your Full Name]
**Section:** [Your Section]
**Course:** Software Engineering 1 — Module 7 Design and Implementation

## Project Overview

The Student Task Management System is a proposed web-based information system designed
to help students organize and monitor their academic tasks and deadlines. This
repository contains a Module 7 frontend prototype of the **Tasks** entity selected from
the Module 6 architectural design. It provides an easy-to-use interface for creating,
managing, updating, and tracking tasks, allowing students to improve their productivity
and time management.

## Problem Statement

Many students struggle to keep track of assignments, projects, quizzes, and examination
schedules. Missing deadlines often results in lower academic performance. This proposed
system aims to provide a centralized platform where students can efficiently manage
their academic responsibilities and monitor the progress of their tasks.

## Target Users

- College Students
- University Students
- Senior High School Students

## Selected Module 6 Entity: Tasks

| Field     | Description                                  |
| --------- | --------------------------------------------- |
| Title     | Name/description of the task                  |
| Subject   | Course or subject the task belongs to         |
| Due Date  | Deadline for the task                         |
| Priority  | Low, Medium, or High                          |
| Status    | Pending or Completed                          |

## Implemented Features

1. **Create** — Add a new task through a validated form.
2. **Read** — View all tasks in a responsive table.
3. **Update** — Edit an existing task's details.
4. **Delete** — Remove a task after a confirmation prompt.
5. **Mark as Completed** — Toggle a task's status directly from the list.
6. **Search** — Filter tasks by title or subject.
7. **Validation** — Prevents submission when required fields (title, subject, due date)
   are empty.
8. **Persistence** — Tasks remain saved after refreshing the browser, using
   browser `localStorage`.

## Technologies Used

| Technology       | Purpose                                       |
| ----------------- | ---------------------------------------------- |
| Vue.js + Vite      | Frontend application framework and tooling    |
| Tailwind CSS v4    | Responsive interface styling                  |
| JavaScript         | Application and CRUD logic                    |
| localStorage       | Browser-based prototype data persistence      |
| Git + GitHub       | Version control and repository submission     |
| GitHub Actions     | Continuous-integration build check             |

## Project Structure

```
src/
├── components/
│   ├── AppHeader.vue
│   ├── TaskForm.vue
│   ├── TaskList.vue
│   └── AppFooter.vue
├── App.vue
├── main.js
└── style.css
```

## Installation and Run Instructions

1. Make sure Node.js, npm, and Git are installed:
   ```
   node --version
   npm --version
   git --version
   ```
2. Clone the repository and enter the folder:
   ```
   git clone YOUR_REPOSITORY_URL
   cd surname-module7-vue-system
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm run dev
   ```
5. Open the local address shown in the terminal (e.g. `http://localhost:5173/`).

To build for production:
```
npm run build
```

## Explanation of localStorage

Because this prototype does not yet have a backend, API, or database, task records are
saved directly in the browser using the `localStorage` Web API. Whenever a task is
added, edited, deleted, or marked complete, the full list of tasks is serialized with
`JSON.stringify()` and saved under the key `module7-task-records`. When the app loads,
it reads this key back with `JSON.parse()` and restores the task list, so records
survive a page refresh. Because `localStorage` is scoped to the browser and device, data
is not shared across devices — this limitation will be resolved once a real backend and
database are implemented.

## Connection Between Module 6 and Module 7

| Module 6 Element              | Module 7 Implementation                          |
| ------------------------------ | ------------------------------------------------- |
| Proposed complete system       | Student Task Management System (long-term goal)  |
| Presentation layer              | Vue components + Tailwind CSS interface           |
| System module/entity            | Tasks (selected functional prototype)             |
| User interactions               | Task form, search field, table, action buttons    |
| Application logic                | Vue/JavaScript CRUD and validation functions      |
| Data layer                       | Simulated using browser localStorage              |
| Backend/API/database             | Future implementation — not required in Module 7  |

## Application Screenshots

_Add screenshots here as described in the Module 7 evidence checklist
(01-running-application.png through 11-ci-success.png)._

## Known Limitations and Proposed Future Improvements

**Limitations**
- Data is stored only in the current browser/device (no shared backend).
- No user authentication — all tasks are visible to anyone using the browser.
- No due-date reminders or notifications.

**Future Improvements**
- Connect to a real backend API and database (per the full Module 6 architecture).
- Add user accounts so each student has a private task list.
- Add sorting by due date/priority and automated deadline reminders.
- Add categories/tags for tasks (e.g., Assignment, Quiz, Project, Exam).
