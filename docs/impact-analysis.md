# Impact Analysis

## 1. Change Request Information

**Change Request ID:** CR-M9-01

**Project:** Student Task Management System

**Module:** Module 9 – Software Evolution

**Change Type:** Perfective Maintenance

**Target Version:** 1.1.0

---

## 2. Change Description

The requested change is to add an **Active/Inactive record filter** to the existing Student Task Management System.

The purpose of the change is to improve the organization and usability of task records by allowing users to display all records, only active records, or only inactive records.

The change will extend the existing system without replacing its current architecture or removing existing functionality.

---

## 3. Current Architecture

The current application is a Vue.js and Vite-based frontend system.

The main application logic is handled by `App.vue`, while different interface responsibilities are separated into Vue components.

The current structure includes:

* `App.vue` – main application logic and task management
* `AppHeader.vue` – application header
* `TaskForm.vue` – task input and validation
* `TaskFormModal.vue` – task form modal
* `TaskList.vue` – displays task records
* `TabSwitcher.vue` – switches between task views
* `ConfirmDialog.vue` – delete confirmation
* `NotificationToast.vue` – displays notifications
* `AppFooter.vue` – application footer
* `AppIcon.vue` – reusable icons

Task records are stored in the browser using `localStorage`.

---

## 4. Areas Affected

### 4.1 App.vue

**Impact: High**

`App.vue` contains the main task state, task operations, and filtering logic.

The following areas will be affected:

* Task state
* Task filtering
* Active/Inactive filter state
* Task display logic
* Interaction between the new filter and existing search functionality

The existing Add, Edit, Delete, Complete, and Search functions must continue working after the change.

---

### 4.2 Task Records

**Impact: High**

Task records will need to support the new Active/Inactive information.

Existing task records may not contain this information because they were created before the Module 9 change.

Therefore, backward compatibility must be considered when loading records from `localStorage`.

Existing records should continue to display instead of being lost or causing application errors.

---

### 4.3 TaskList.vue

**Impact: Medium**

The task list displays the records provided by `App.vue`.

The component may require minor changes if the Active/Inactive state needs to be displayed or controlled directly in the task list.

The existing display of task information should remain unchanged unless the new activity status needs to be shown.

---

### 4.4 Search Function

**Impact: Medium**

The existing search feature searches task titles and subjects.

The new Active/Inactive filter must work together with the search feature.

For example:

* Active + "Mathematics" → only active Mathematics tasks
* Inactive + "Science" → only inactive Science tasks
* All + "English" → all matching English tasks

The filtering order and logic must be implemented carefully so that search results remain correct.

---

### 4.5 localStorage

**Impact: High**

The system currently uses:

```text
module7-task-records
```

as the localStorage key.

The existing storage mechanism should be retained.

The new implementation must support older records that do not contain the new activity information.

A default activity value should be assigned when older records are loaded.

This prevents existing data from becoming unusable after the software evolution change.

---

### 4.6 User Interface

**Impact: Medium**

A new filter control will be added to the interface.

The user should be able to select:

* All
* Active
* Inactive

The new control should follow the existing design and remain usable on desktop and mobile-width screens.

---

### 4.7 Automated Tests

**Impact: High**

New automated tests are required for the Module 9 change.

At least two tests should verify the Active/Inactive filtering behavior.

Examples include:

1. Active filter displays only active records.
2. Inactive filter displays only inactive records.

The existing Module 8 automated tests must also be retained and executed as regression tests.

---

### 4.8 Manual Tests

**Impact: High**

The existing manual test cases from the previous module must be retained.

Additional manual test cases will be created for the Active/Inactive filter.

Testing should cover:

* All records
* Active records
* Inactive records
* Search with Active filter
* Search with Inactive filter
* Empty filter results
* Existing task operations
* localStorage compatibility
* Responsive behavior

---

### 4.9 GitHub Actions

**Impact: Medium**

The existing CI workflow will continue to run the automated tests and production build.

The workflow should verify that:

```text
npm run test:run
npm run build
```

continue to pass after the Module 9 changes.

No major change to the workflow is expected unless the existing configuration requires an update.

---

## 5. Dependency Impact

The change does not require a new backend or database.

The existing technologies will remain:

* Vue.js
* Vite
* JavaScript
* Tailwind CSS
* localStorage
* Vitest
* Vue Test Utils
* jsdom
* GitHub Actions

No external database or server-side dependency is required for this change.

---

## 6. Data Impact

The new feature introduces additional information needed to distinguish active and inactive records.

The system must account for records created under the previous version.

### Existing Records

Existing Module 7/8 records may not contain an Active/Inactive value.

When these records are loaded, the application should assign an appropriate default value rather than rejecting or deleting the record.

### New Records

New records should contain the information required by the Active/Inactive filtering feature.

### Data Preservation

Existing records must not be deleted during the software evolution process.

The existing localStorage key should continue to be used unless there is a documented reason to change it.

---

## 7. Functional Impact

The following functionality will be affected:

| Functionality          | Impact | Expected Result                              |
| ---------------------- | ------ | -------------------------------------------- |
| Add Task               | Medium | New tasks remain functional                  |
| Display Tasks          | High   | Records display according to selected filter |
| Edit Task              | Medium | Editing continues to work                    |
| Delete Task            | Medium | Deleting continues to work                   |
| Search                 | High   | Search works together with the filter        |
| Complete/Restore       | Medium | Existing behavior remains functional         |
| Notifications          | Low    | Existing notifications continue working      |
| localStorage           | High   | Existing data remains compatible             |
| Active/Inactive Filter | High   | New filtering feature works correctly        |

---

## 8. Non-Functional Impact

### Usability

The new filter should make it easier for users to organize and locate task records.

### Performance

The change should have minimal performance impact because filtering is performed on the existing in-memory task records.

### Responsiveness

The new filter control should remain usable at both desktop and mobile-width screen sizes.

### Maintainability

The change should be implemented using the existing Vue component structure and should avoid unnecessary changes to unrelated components.

---

## 9. Risk Analysis

| Risk                                    | Level  | Mitigation                                      |
| --------------------------------------- | ------ | ----------------------------------------------- |
| Old records do not have activity status | High   | Assign a default value when loading old records |
| Filter hides the wrong records          | High   | Add automated and manual tests                  |
| Search and filter conflict              | Medium | Test combined filtering and searching           |
| Existing features stop working          | High   | Perform regression testing                      |
| Mobile layout problems                  | Medium | Perform responsive testing                      |
| Build or CI failure                     | Medium | Run tests, build, and GitHub Actions            |

---

## 10. Regression Impact

Regression testing is required because the new filtering logic modifies how task records are displayed.

The following existing features must be retested:

* Add Task
* Display Task
* Edit Task
* Delete Task
* Search Task
* Complete/Restore Task
* Due-date validation
* Notifications
* localStorage persistence
* Task counts
* Responsive interface

The purpose of regression testing is to verify that the Module 9 change does not introduce defects into functionality that already worked in the previous version.

---

## 11. Architecture Impact

The existing architecture does not need to be completely replaced.

The main architectural change will be the addition of an **Active/Inactive filtering capability** to the task-management logic.

The updated flow will be:

```text
User
  |
  v
Vue Interface
  |
  v
App.vue
  |
  +--> Active/Inactive Filter
  |
  +--> Search Filter
  |
  +--> Task Operations
  |
  v
Task Records
  |
  v
localStorage
```

The existing component-based structure remains in place while the new filtering capability is added.

---

## 12. Version Impact

The change will be included in:

**Version 1.1.0**

The version represents the evolution of the existing Module 7/8 system through a controlled perfective-maintenance change.

---

## 13. Overall Impact Assessment

**Overall Impact Level: Medium to High**

The change is manageable because it does not require a new backend, database, or major framework change.

However, the impact on task data, filtering logic, search behavior, testing, and backward compatibility is significant enough to require controlled implementation and regression testing.

The change should be implemented incrementally, tested thoroughly, and documented before the version 1.1.0 release.
