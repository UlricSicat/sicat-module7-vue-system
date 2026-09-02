# Manual Test Cases

## Student Task Management System

### 1. Testing Information

**System:** Student Task Management System

**Version:** 1.1.0

**Testing Type:** Manual Functional Testing

**Application:** Vue.js Web Application

**Browser:** Google Chrome

**Operating System:** Windows

**Storage:** Browser `localStorage`

---

# 2. Testing Scope

The manual testing covers the major features of the Student Task Management System, including the Module 9 evolution.

The following features are tested:

1. Add Record
2. Display Records
3. Edit Record
4. Delete Record
5. Search
6. Active/Inactive Filtering
7. Priority Filtering

Each feature contains positive, negative, or edge test cases.

A total of **12 manual test cases** are included to verify the existing functionality and the newly implemented Module 9 changes.

---

# 3. Manual Test Cases

## TC-01 — Add a Valid Record

**Feature:** Add Record

**Test Type:** Positive

### Objective

Verify that the system successfully creates and displays a new task when all required information is valid.

### Preconditions

* The application is running.
* The Add Task form can be opened.
* No duplicate test record is currently being used.

### Test Data

| Field    | Test Value             |
| -------- | ---------------------- |
| Title    | Mathematics Assignment |
| Subject  | Mathematics            |
| Due Date | Valid permitted date   |
| Priority | Medium                 |

### Test Steps

1. Open the Student Task Management System.
2. Click **Add Task**.
3. Enter `Mathematics Assignment` as the title.
4. Enter `Mathematics` as the subject.
5. Enter a valid due date.
6. Select `Medium` priority.
7. Save the task.
8. Observe the task list.

### Expected Result

The new task is successfully saved and appears in the appropriate task list with the entered information.

### Actual Result

The new task is successfully saved and appears in the task list with the entered information.

### Status

**Pass**

---

## TC-02 — Reject a Record with a Missing Required Field

**Feature:** Add Record / Validation

**Test Type:** Negative

### Objective

Verify that the system prevents a task from being created when a required field is missing.

### Preconditions

* The application is running.
* The Add Task form can be opened.

### Test Data

| Field    | Test Value           |
| -------- | -------------------- |
| Title    | Empty                |
| Subject  | Mathematics          |
| Due Date | Valid permitted date |
| Priority | Medium               |

### Test Steps

1. Open the Add Task form.
2. Leave the Title field empty.
3. Enter `Mathematics` as the subject.
4. Enter a valid due date.
5. Select `Medium` priority.
6. Attempt to save the task.
7. Observe the validation response.

### Expected Result

The system prevents the incomplete task from being saved and displays an appropriate validation message.

### Actual Result

The system prevents the incomplete task from being saved and displays the required validation message.

### Status

**Pass**

---

## TC-03 — Display Multiple Records

**Feature:** Display Records

**Test Type:** Positive

### Objective

Verify that multiple existing task records are correctly displayed in the task list.

### Preconditions

* The application is running.
* At least three valid task records are available.

### Test Data

| Title                  | Subject     | Priority | Activity |
| ---------------------- | ----------- | -------- | -------- |
| Mathematics Assignment | Mathematics | Medium   | Active   |
| Science Project        | Science     | High     | Active   |
| English Essay          | English     | Low      | Inactive |

### Test Steps

1. Open the application.
2. Ensure that the three task records are available.
3. Navigate to the task list.
4. Observe the displayed records.

### Expected Result

All available task records are displayed correctly with their task information, priority, and activity status.

### Actual Result

All available task records are displayed correctly with their task information, priority, and activity status.

### Status

**Pass**

---

## TC-04 — Handle an Empty Task List

**Feature:** Display Records

**Test Type:** Edge

### Objective

Verify that the system handles an empty task list without crashing or displaying incorrect information.

### Preconditions

* The application is running.
* No task records are available.

### Test Data

No task records.

### Test Steps

1. Open the application.
2. Ensure that there are no available task records.
3. Observe the task list.
4. Check the displayed empty-state message.

### Expected Result

The application remains functional and displays an appropriate empty-state message.

### Actual Result

The application remains functional and displays the appropriate empty-state message.

### Status

**Pass**

---

## TC-05 — Edit an Existing Record

**Feature:** Edit Record

**Test Type:** Positive

### Objective

Verify that an existing task can be edited and saved successfully.

### Preconditions

* At least one task exists.
* The task can be edited.

### Test Data

**Original Task**

```text
Title: Mathematics Assignment
Subject: Mathematics
Priority: Medium
```

**Updated Task**

```text
Title: Mathematics Final Assignment
Subject: Mathematics
Priority: High
```

### Test Steps

1. Locate an existing task.
2. Click **Edit**.
3. Change the title to `Mathematics Final Assignment`.
4. Change the priority to `High`.
5. Save the changes.
6. Observe the updated task.

### Expected Result

The task is updated successfully and displays the new information.

### Actual Result

The task is updated successfully and displays the new title and priority.

### Status

**Pass**

---

## TC-06 — Cancel an Edit

**Feature:** Edit Record

**Test Type:** Edge

### Objective

Verify that canceling an edit does not modify the original task information.

### Preconditions

* At least one task exists.
* The task can be edited.

### Test Data

**Existing Task**

```text
Title: Science Project
Subject: Science
Priority: High
```

### Test Steps

1. Select an existing task.
2. Click **Edit**.
3. Change one or more task fields.
4. Do not save the changes.
5. Click **Cancel**.
6. Observe the task.

### Expected Result

The edit is canceled and the original task information remains unchanged.

### Actual Result

The edit is canceled and the original task information remains unchanged.

### Status

**Pass**

---

## TC-07 — Confirm Record Deletion

**Feature:** Delete Record

**Test Type:** Positive

### Objective

Verify that a task is removed when the user confirms the deletion.

### Preconditions

* At least one task exists.

### Test Data

```text
Title: Mathematics Assignment
Subject: Mathematics
```

### Test Steps

1. Locate the task to be deleted.
2. Click **Delete**.
3. Observe the confirmation dialog.
4. Confirm the deletion.
5. Observe the task list.

### Expected Result

The selected task is removed from the task list and no longer appears.

### Actual Result

The selected task is successfully removed from the task list.

### Status

**Pass**

---

## TC-08 — Cancel Record Deletion

**Feature:** Delete Record

**Test Type:** Negative

### Objective

Verify that canceling the deletion prevents the selected task from being removed.

### Preconditions

* At least one task exists.

### Test Data

```text
Title: Science Project
Subject: Science
```

### Test Steps

1. Locate the task.
2. Click **Delete**.
3. Wait for the confirmation dialog.
4. Select **Cancel**.
5. Observe the task list.

### Expected Result

The deletion is canceled and the selected task remains in the task list unchanged.

### Actual Result

The deletion is canceled and the selected task remains in the task list unchanged.

### Status

**Pass**

---

# Module 9 Change Request Test Cases

## TC-09 — Filter Records by Active Status

**Feature:** Active/Inactive Filter

**Test Type:** Positive

### Objective

Verify that selecting the **Active** filter displays only active task records.

### Preconditions

* The application is running.
* At least one Active and one Inactive task record exist.

### Test Data

| Title                  | Activity Status |
| ---------------------- | --------------- |
| Mathematics Assignment | Active          |
| Science Project        | Inactive        |

### Test Steps

1. Open the application.
2. Ensure that both Active and Inactive records are available.
3. Locate the activity filter.
4. Select **Active**.
5. Observe the task list.

### Expected Result

Only records marked **Active** are displayed. Inactive records are excluded from the results.

### Actual Result

Only the Active task record is displayed, while the Inactive task record is excluded.

### Status

**Pass**

---

## TC-10 — Filter Records by Inactive Status

**Feature:** Active/Inactive Filter

**Test Type:** Negative

### Objective

Verify that selecting the **Inactive** filter displays only inactive task records.

### Preconditions

* The application is running.
* At least one Active and one Inactive task record exist.

### Test Data

| Title                  | Activity Status |
| ---------------------- | --------------- |
| Mathematics Assignment | Active          |
| Science Project        | Inactive        |

### Test Steps

1. Open the application.
2. Locate the activity filter.
3. Select **Inactive**.
4. Observe the task list.

### Expected Result

Only records marked **Inactive** are displayed. Active records are excluded from the results.

### Actual Result

Only the Inactive task record is displayed, while the Active task record is excluded.

### Status

**Pass**

---

## TC-11 — Filter Records by Priority

**Feature:** Priority Filter

**Test Type:** Positive

### Objective

Verify that selecting a priority displays only task records with the selected priority.

### Preconditions

* The application is running.
* Tasks with different priority levels are available.

### Test Data

| Title                  | Priority |
| ---------------------- | -------- |
| Mathematics Assignment | High     |
| Science Project        | Medium   |
| English Essay          | Low      |

### Test Steps

1. Open the application.
2. Locate the priority filter.
3. Select **High Priority**.
4. Observe the task list.
5. Select **Low Priority**.
6. Observe the task list again.

### Expected Result

When **High Priority** is selected, only High priority tasks are displayed.

When **Low Priority** is selected, only Low priority tasks are displayed.

### Actual Result

The system correctly displays only tasks matching the selected priority level.

### Status

**Pass**

---

## TC-12 — Combine Search with Active/Inactive and Priority Filters

**Feature:** Search / Active-Inactive Filter / Priority Filter

**Test Type:** Edge

### Objective

Verify that the search function works correctly together with the new Module 9 filters.

### Preconditions

* The application is running.
* Multiple task records with different subjects, priorities, and activity statuses exist.

### Test Data

| Title                  | Subject     | Priority | Activity |
| ---------------------- | ----------- | -------- | -------- |
| Mathematics Assignment | Mathematics | High     | Active   |
| Mathematics Review     | Mathematics | Low      | Inactive |
| Science Project        | Science     | High     | Active   |

**Search Keyword:** `Mathematics`

**Activity Filter:** `Active`

**Priority Filter:** `High`

### Test Steps

1. Open the application.
2. Enter `Mathematics` in the search field.
3. Select **Active** from the activity filter.
4. Select **High Priority** from the priority filter.
5. Observe the task list.

### Expected Result

Only the task that matches all three conditions is displayed:

* Search keyword matches `Mathematics`
* Activity status is `Active`
* Priority is `High`

Other records are excluded from the results.

### Actual Result

Only the Mathematics Assignment task is displayed because it matches the search keyword, Active status, and High priority.

### Status

**Pass**

---

# 4. Manual Test Summary

| ID    | Feature                     | Type     | Status |
| ----- | --------------------------- | -------- | ------ |
| TC-01 | Add Record                  | Positive | Pass   |
| TC-02 | Add / Validation            | Negative | Pass   |
| TC-03 | Display Records             | Positive | Pass   |
| TC-04 | Display Records             | Edge     | Pass   |
| TC-05 | Edit Record                 | Positive | Pass   |
| TC-06 | Edit Record                 | Edge     | Pass   |
| TC-07 | Delete Record               | Positive | Pass   |
| TC-08 | Delete Record               | Negative | Pass   |
| TC-09 | Active Filter               | Positive | Pass   |
| TC-10 | Inactive Filter             | Negative | Pass   |
| TC-11 | Priority Filter             | Positive | Pass   |
| TC-12 | Combined Search and Filters | Edge     | Pass   |

---

# 5. Execution Record

The manual test cases were executed against version **1.1.0** of the Student Task Management System.

Each test case was checked against its expected result. The results confirm that the existing Module 8 functionality continues to operate correctly after the Module 9 enhancement.

The Module 9 Active/Inactive and Priority filtering functions were also verified.

All 12 manual test cases passed successfully.

---

# 6. Test Result Summary

| Result    |  Count |
| --------- | -----: |
| Passed    |     12 |
| Failed    |      0 |
| Blocked   |      0 |
| Not Run   |      0 |
| **Total** | **12** |

**Overall Result: PASS**

The Student Task Management System successfully passed all 12 manual test cases. The Module 9 changes were verified without affecting the existing Add, Display, Edit, Delete, and Search functionality.

The Active/Inactive filter, Priority filter, and combined filtering behavior also operated as expected.
