# Change Request

## Change Request Information

**Change Request ID:** CR-M9-01

**Project:** Student Task Management System

**Module:** Module 9 – Software Evolution

**Change Type:** Perfective Maintenance

**Target Version:** 1.1.0

**Status:** Proposed

---

## 1. Change Title

Add Active/Inactive Record Filter

---

## 2. Change Description

The Student Task Management System currently allows users to create, view, edit, delete, search, and manage task records. However, the current system does not provide a dedicated way to filter task records based on whether they are active or inactive.

This change will introduce an **Active/Inactive record filter** to improve task organization and make it easier for users to view records based on their current activity status.

The existing task management features will remain available, while the new filter will be added as an enhancement to the current system.

---

## 3. Reason for Change

The change is requested to improve the usability and organization of task records.

As the number of stored tasks increases, users may need to separate currently active tasks from inactive records. Providing an Active/Inactive filter will allow users to quickly view the appropriate records without removing existing task data.

This is classified as **Perfective Maintenance** because it improves the existing system's functionality and usability without changing its main purpose.

---

## 4. Current System

The current Student Task Management System provides the following features:

* Add task records
* Display task records
* Edit task records
* Delete task records
* Search tasks by title or subject
* Mark tasks as completed or move them back to ongoing
* Validate required task information
* Validate due dates
* Store task records using browser localStorage
* Display task counts
* Provide notifications and confirmation dialogs

The current system does not have a dedicated Active/Inactive record filter.

---

## 5. Requested Change

The system shall be enhanced with an **Active/Inactive filter**.

The filter should allow the user to:

1. View all task records.
2. View only active task records.
3. View only inactive task records.

The filter should work together with the existing task list and search functionality.

---

## 6. Scope of Change

### In Scope

* Add an Active/Inactive status or filtering mechanism.
* Add a user interface control for selecting the filter.
* Update the task display logic to show records according to the selected filter.
* Preserve existing task records.
* Maintain compatibility with existing localStorage data.
* Add automated tests for the new filtering functionality.
* Add manual test cases for the new feature.
* Perform regression testing on existing features.
* Update the system documentation and README.
* Update the system version to **1.1.0**.

### Out of Scope

* Replacing Vue.js or Vite.
* Adding a backend server.
* Replacing localStorage with a server database.
* Redesigning the entire application.
* Removing existing task management features.
* Changing the main purpose of the Student Task Management System.

---

## 7. Expected Behavior

After the change is implemented:

### All Records

When **All** is selected, the system displays both active and inactive task records.

### Active Records

When **Active** is selected, the system displays only records marked as active.

### Inactive Records

When **Inactive** is selected, the system displays only records marked as inactive.

### Existing Records

Existing records stored in localStorage should continue to work after the system is updated. Existing records must not be lost because of the new filtering feature.

### Search

The existing search feature should continue working with the selected Active/Inactive filter.

For example, when the Active filter is selected and the user searches for a subject, only matching active records should be displayed.

---

## 8. Acceptance Criteria

The change request will be considered complete when:

* [ ] An Active/Inactive filtering mechanism is available in the application.
* [ ] The user can view all records.
* [ ] The user can view only active records.
* [ ] The user can view only inactive records.
* [ ] Existing task records are preserved.
* [ ] Existing localStorage records remain usable.
* [ ] Search continues to work with the new filter.
* [ ] Existing Add, Display, Edit, Delete, and other task features continue working.
* [ ] At least two automated tests are created for the new feature.
* [ ] Manual tests cover the new feature.
* [ ] Regression testing is completed.
* [ ] The application builds successfully.
* [ ] GitHub Actions successfully runs the required tests and build.
* [ ] README documentation is updated.
* [ ] Release version is updated to **1.1.0**.

---

## 9. Expected Impact

The change is expected to have a positive impact on the usability and organization of the system.

Users will be able to quickly separate active records from inactive records without deleting information. The change should also make the system easier to use as the number of task records increases.

The existing application architecture will be extended rather than replaced.

---

## 10. Risk Considerations

The main risks associated with the change are:

* Existing localStorage records may not contain the new status information.
* Incorrect filtering could hide records that should be displayed.
* The new filter could interfere with the existing search functionality.
* Changes to task display logic could affect existing features.

These risks will be addressed through backward compatibility handling, automated testing, manual testing, and regression testing.

---

## 11. Implementation Plan

The change will be implemented through the following steps:

1. Review the existing Module 7 architecture.
2. Perform an impact analysis.
3. Add the Active/Inactive record state or filtering mechanism.
4. Update the task filtering logic.
5. Add the Active/Inactive filter to the user interface.
6. Ensure existing localStorage records remain compatible.
7. Add automated tests for the new feature.
8. Update the manual test cases.
9. Perform regression testing.
10. Run the production build.
11. Verify the GitHub Actions workflow.
12. Update the README and release notes.
13. Update the project version to **1.1.0**.

---

## 12. Deliverables

The following outputs will be produced for this change:

* Updated Student Task Management System
* Updated architecture documentation
* Impact analysis document
* Updated automated tests
* Updated manual test cases
* Regression test results
* Updated README
* Release notes for version 1.1.0
* GitHub Actions test/build results
* Screenshots documenting the software evolution process

---

## 13. Approval

**Requested Change:** CR-M9-01 – Add Active/Inactive Record Filter

**Target Release:** Version 1.1.0

**Maintenance Type:** Perfective Maintenance

**Decision:** Approved for implementation
