# Manual Test Cases

## Student Task Management System

### 1. Testing Information

**System:** Student Task Management System
**Testing Type:** Manual Functional Testing
**Application:** Vue.js Web Application
**Browser:** Google Chrome
**Operating System:** Windows
**Storage:** Browser `localStorage`

### 2. Testing Scope

The manual testing covers five major features of the Student Task Management System:

1. Add Record
2. Display Records
3. Edit Record
4. Delete Record
5. Search / Validation

Each feature contains one positive test case and one negative or edge test case, for a total of **10 manual test cases**.

Each test case has a corresponding screenshot that will be saved in the testing evidence folder.

---

# 3. Manual Test Cases

## TC-01 — Add a Valid Record

**Feature:** Add Record
**Test Type:** Positive
**Evidence:** `tc-01.png`

### Objective

Verify that the system successfully creates and displays a new task when all required information is valid.

### Preconditions

* The application is running.
* The Add Task form can be opened.
* A valid task does not already exist with the same test data.

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

**New task is successfully saved and appears.**

### Status

**Pass**

### Evidence

`tc-01.png`

---

## TC-02 — Reject a Record with a Missing Required Field

**Feature:** Add Record / Validation
**Test Type:** Negative
**Evidence:** `tc-02.png`

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

**The system prevents the incomplete task.**

### Status

**Pass**

### Evidence

`tc-02.png`

---

## TC-03 — Display Multiple Records

**Feature:** Display Records
**Test Type:** Positive
**Evidence:** `tc-03.png`

### Objective

Verify that multiple existing task records are correctly displayed in the task list.

### Preconditions

* The application is running.
* At least three valid task records are available.

### Test Data

| Title                  | Subject     | Priority |
| ---------------------- | ----------- | -------- |
| Mathematics Assignment | Mathematics | Medium   |
| Science Project        | Science     | High     |
| English Essay          | English     | Low      |

### Test Steps

1. Open the application.
2. Add the three valid task records if they are not already available.
3. Navigate to the task list.
4. Observe the displayed records.

### Expected Result

All available task records are displayed correctly, with their corresponding task information visible and readable.

### Actual Result

**All available task records are displayed correctly.**

### Status

**Pass**

### Evidence

`tc-03.png`

---

## TC-04 — Handle an Empty Task List

**Feature:** Display Records
**Test Type:** Edge
**Evidence:** `tc-04.png`

### Objective

Verify that the system handles an empty task list without crashing or displaying incorrect information.

### Preconditions

* The application is running.
* No tasks are available in the relevant task list.

### Test Data

No task records.

### Test Steps

1. Open the application.
2. Ensure that there are no available task records.
3. Observe the task list.
4. Check the displayed empty state.

### Expected Result

The application remains functional and displays an appropriate empty-state or no-record message.

### Actual Result

**The application remains functional.**

### Status

**Pass**

### Evidence

`tc-04.png`

---

## TC-05 — Edit an Existing Record

**Feature:** Edit Record
**Test Type:** Positive
**Evidence:** `tc-05.png`

### Objective

Verify that an existing task can be edited and saved successfully.

### Preconditions

* At least one task exists.
* The task can be edited.

### Test Data

**Original Task:**

```text
Title: Mathematics Assignment
Subject: Mathematics
Priority: Medium
```

**Updated Task:**

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

**The task is updated successfully.**

### Status

**Pass**

### Evidence

`tc-05.png`

---

## TC-06 — Cancel an Edit

**Feature:** Edit Record
**Test Type:** Edge
**Evidence:** `tc-06.png`

### Objective

Verify that canceling an edit does not modify the original task information.

### Preconditions

* At least one task exists.
* The task can be edited.

### Test Data

**Existing Task:**

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

**The edit is canceled and the original task information remains unchanged.**

### Status

**Pass**

### Evidence

`tc-06.png`

---

## TC-07 — Confirm Record Deletion

**Feature:** Delete Record
**Test Type:** Positive
**Evidence:** `tc-07.png`

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

**The selected task is removed from the task list.**

### Status

**Pass**

### Evidence

`tc-07.png` 

---

## TC-08 — Cancel Record Deletion

**Feature:** Delete Record
**Test Type:** Negative
**Evidence:** `tc-08.png`

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

**The deletion is canceled.**

### Status

**Pass**

### Evidence

`tc-08.png`

---

## TC-09 — Search for an Existing Record

**Feature:** Search
**Test Type:** Positive
**Evidence:** `tc-09.png`

### Objective

Verify that searching for an existing task keyword displays the matching record.

### Preconditions

* The application is running.
* At least one task containing the search keyword exists.

### Test Data

```text
Task Title: Mathematics Assignment
Search Keyword: Mathematics
```

### Test Steps

1. Open the application.
2. Ensure that `Mathematics Assignment` exists.
3. Locate the search field.
4. Enter `Mathematics`.
5. Observe the task list.

### Expected Result

The matching task is displayed in the search results, while non-matching tasks are filtered out.

### Actual Result

**The matching task is displayed in the search results.**

### Status

**Pass**

### Evidence

`tc-09.png`
---

## TC-10 — Search for a Non-Existing Record

**Feature:** Search
**Test Type:** Negative
**Evidence:** `tc-10.png`

### Objective

Verify that the system correctly handles a search keyword that does not match any existing task.

### Preconditions

* The application is running.
* At least one task exists.
* The search keyword does not match any existing task.

### Test Data

```text
Search Keyword: XYZ-NOT-FOUND
```

### Test Steps

1. Open the application.
2. Ensure that existing tasks are displayed.
3. Enter `XYZ-NOT-FOUND` in the search field.
4. Observe the filtered task list.

### Expected Result

No matching task records are displayed, and the application shows its appropriate no-results or empty-state behavior.

### Actual Result

**To be recorded after execution.**

### Status

**Not Run**

### Evidence

`tc-10.png` — Screenshot showing the search keyword and the resulting no-match state.

---

# 4. Manual Test Summary

| ID    | Feature          | Type     | Evidence    | Status  |
| ----- | ---------------- | -------- | ----------- | ------- |
| TC-01 | Add Record       | Positive | `tc-01.png` | Not Run |
| TC-02 | Add / Validation | Negative | `tc-02.png` | Not Run |
| TC-03 | Display Records  | Positive | `tc-03.png` | Not Run |
| TC-04 | Display Records  | Edge     | `tc-04.png` | Not Run |
| TC-05 | Edit Record      | Positive | `tc-05.png` | Not Run |
| TC-06 | Edit Record      | Edge     | `tc-06.png` | Not Run |
| TC-07 | Delete Record    | Positive | `tc-07.png` | Not Run |
| TC-08 | Delete Record    | Negative | `tc-08.png` | Not Run |
| TC-09 | Search           | Positive | `tc-09.png` | Not Run |
| TC-10 | Search           | Negative | `tc-10.png` | Not Run |

---



# 5. Execution Record

The Actual Result and Status fields must be completed only after each test case has been executed.

For each test:

1. Execute the steps exactly as written.
2. Compare the observed behavior with the expected result.
3. Record the actual result.
4. Mark the status as Pass, Fail, Blocked, or Not Run.
5. Capture the corresponding screenshot.
6. Save the screenshot using the specified evidence filename.

A failed test should not automatically be treated as a mistake in the test case. The failure should be investigated to determine whether an actual software defect exists.

---

# 6. Test Result Summary

After all tests have been executed, update the summary below.

| Result  |          Count |
| ------- | -------------: |
| Passed  | To be recorded |
| Failed  | To be recorded |
| Blocked | To be recorded |
| Not Run | To be recorded |
| Total   |             10 |

Any failed case that represents an actual software defect will be documented separately in `defect-report.md`.

After a defect is corrected, the affected test case will be executed again during retesting. Related working features will also be checked during regression testing.
