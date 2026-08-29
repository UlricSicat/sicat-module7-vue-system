# Module 8 Test Plan

## Student Task Management System

### 1. Test Plan Overview

This test plan defines the testing activities for the **Student Task Management System** developed in Module 7. The testing focuses on verifying the major functions of the existing Vue.js application, identifying software defects, correcting at least one actual defect, and confirming through retesting and regression testing that the correction does not negatively affect other working features.

The testing activities include manual functional testing and automated unit testing using **Vitest**. The same Module 7 system and GitHub repository will be used throughout the testing process.

---

### 2. System Under Test

**System Title:** Student Task Management System

**System Type:** Vue.js web application

**Repository:**
https://github.com/UlricSicat/sicat-module7-vue-system

The system manages student tasks and provides functions for creating, viewing, editing, deleting, searching, and updating task records. Task data is stored using browser `localStorage`.

---

### 3. Testing Objectives

The objectives of this testing activity are to:

1. Verify that the major features of the Student Task Management System behave according to their expected requirements.
2. Create and execute at least five automated unit tests using Vitest.
3. Prepare and execute ten manual test cases covering positive, negative, and edge scenarios.
4. Identify and document at least one actual software defect.
5. Correct the identified defect in the source code.
6. Retest the corrected feature to confirm that the defect has been resolved.
7. Perform regression testing on related working features.
8. Verify that the final automated tests pass successfully.
9. Verify that the application can still be built successfully after the correction.
10. Update the GitHub repository with the testing implementation, defect correction, documentation, and testing-related commits.

---

### 4. Testing Scope

#### 4.1 Features Included in Testing

The following five major features will be tested:

1. **Add Record** – Create and save a new student task.
2. **Display Records** – Display existing task records in the appropriate task list.
3. **Edit Record** – Modify and save an existing task.
4. **Delete Record** – Delete an existing task using the confirmation process.
5. **Search / Validation** – Search for task records and verify required-field validation.

These features represent the primary CRUD and input-handling functions of the Module 7 system.

#### 4.2 Additional Regression Checks

The regression testing will also check related functionality, including:

* Task status changes
* `localStorage` persistence
* Record count or displayed task information
* Notifications and feedback
* Empty/no-result states
* Production build

#### 4.3 Items Not Fully Tested

The following areas are outside the main scope of this activity:

* Backend/server-side processing
* External APIs
* Authentication and authorization
* Database-server performance
* Security penetration testing
* Large-scale performance testing

The project uses browser `localStorage` rather than a separate server-side database for its current implementation.

---

### 5. Testing Approach

The testing activity will use both **manual** and **automated** testing.

#### Manual Testing

Manual functional testing will be performed from the user's perspective. Test cases will use valid, invalid, negative, and edge-case inputs to compare expected behavior with actual application behavior.

Ten manual test cases will be completed:

| Test Case | Feature          | Test Type |
| --------- | ---------------- | --------- |
| TC-01     | Add Record       | Positive  |
| TC-02     | Add / Validation | Negative  |
| TC-03     | Display Records  | Positive  |
| TC-04     | Display Records  | Edge      |
| TC-05     | Edit Record      | Positive  |
| TC-06     | Edit Record      | Edge      |
| TC-07     | Delete Record    | Positive  |
| TC-08     | Delete Record    | Negative  |
| TC-09     | Search           | Positive  |
| TC-10     | Search           | Negative  |

Each executed case will contain the test steps, expected result, actual result, status, and evidence.

#### Automated Testing

Vitest will be used for repeatable automated unit tests. The automated test suite will contain at least five meaningful tests covering the major task-management functions.

The planned automated tests are:

* UT-01 – Add task
* UT-02 – Display task records
* UT-03 – Edit task
* UT-04 – Delete task
* UT-05 – Search or validation behavior

The final automated test suite must pass successfully.

---

### 6. Test Environment

Testing will be performed using the following environment:

| Item              | Environment                    |
| ----------------- | ------------------------------ |
| Operating System  | Windows                        |
| Application       | Student Task Management System |
| Framework         | Vue.js                         |
| Build Tool        | Vite                           |
| Testing Framework | Vitest                         |
| Component Testing | Vue Test Utils                 |
| DOM Environment   | jsdom                          |
| Browser           | Google Chrome                  |
| Package Manager   | npm                            |
| Source Control    | Git / GitHub                   |
| Storage           | Browser `localStorage`         |

The testing packages will be installed as development dependencies using npm.

---

### 7. Test Data

Test data will consist of sample student task records appropriate for the existing system.

Example valid task data may include:

| Field    | Example                          |
| -------- | -------------------------------- |
| Title    | Mathematics Assignment           |
| Subject  | Mathematics                      |
| Due Date | A valid future or permitted date |
| Priority | Medium                           |
| Status   | Pending                          |

Invalid or edge data will include situations such as:

* Missing required title
* Missing other required fields
* Search keyword with no matching record
* Canceling an edit
* Canceling a deletion
* Empty task list

Actual test data will be recorded in the manual test-case documentation.

---

### 8. Defect Identification

At least one actual software defect will be identified during testing.

The defect will be selected based on observed incorrect behavior rather than artificially introducing a failure into the application.

The defect report will include:

* Defect ID
* Summary
* Application version or commit
* Environment
* Preconditions
* Steps to reproduce
* Expected result
* Actual result
* Severity
* Priority
* Evidence
* Status
* Fix commit

The Module 8 testing process defines the defect lifecycle as **New → Assigned → In progress → Fixed → Retest → Closed**, with the possibility of reopening the defect if retesting fails.

---

### 9. Defect Correction

After identifying and documenting the actual defect, the relevant source code will be corrected.

The correction will be limited to the source code necessary to resolve the identified problem while preserving the existing behavior of unrelated features.

The correction will then be committed to Git with a meaningful commit message describing the fix.

---

### 10. Retesting

Retesting will be performed after the defect correction.

The previously failed test case will be executed again using the same or equivalent test conditions.

The expected outcome is:

**Expected:** The previously incorrect behavior is corrected.

**Result:** The previously failed test passes after the correction.

Evidence of successful retesting will be captured in:

`06-successful-retesting.png`

---

### 11. Regression Testing

Regression testing will be performed after the defect has been corrected.

The purpose is to determine whether the correction affected other previously working functions. The following areas will be checked:

* Add record
* Display records
* Edit record
* Delete record
* Search
* Validation
* Task status
* `localStorage`
* Application build

The final automated test suite will also be executed using:

```bash
npm run test:run
```

The production build will be checked using:

```bash
npm run build
```

Both commands must complete successfully before the project is pushed to GitHub.

Regression testing is important because a correction to shared task-management logic may affect other features that use the same data or functions.

---

### 12. Entry Criteria

Testing may begin when:

* The Module 7 application is available and can run locally.
* Dependencies have been installed successfully.
* The existing application can be opened in the browser.
* The source code is available in the Module 7 repository.
* The testing environment has been prepared.
* Vitest and required testing packages have been installed before automated testing begins.

---

### 13. Exit Criteria

Testing will be considered complete when:

* Five automated unit tests have been created.
* The final automated test suite passes.
* Ten manual test cases have been executed.
* Expected and actual results have been recorded.
* At least one actual software defect has been documented.
* The identified defect has been corrected.
* The failed case has been successfully retested.
* Regression testing has been completed.
* `npm run test:run` passes.
* `npm run build` succeeds.
* Testing documentation has been updated.
* Testing-related commits have been pushed to the existing Module 7 GitHub repository.
* Required screenshots have been captured.
* The final PDF report has been prepared.

---

### 14. Testing Risks

| Risk                                              | Possible Impact                           | Mitigation                                                   |
| ------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| Incorrect test data                               | Invalid test conclusions                  | Define expected results before execution                     |
| Defect is not reproducible                        | Difficult to verify correction            | Record exact steps and test data                             |
| Fix affects other features                        | Regression failures                       | Perform CRUD and related regression tests                    |
| Browser `localStorage` contains old data          | Unexpected test results                   | Clear or inspect test data when necessary                    |
| Automated test configuration error                | Tests cannot execute                      | Verify Vitest, Vue Test Utils, jsdom, and Vite configuration |
| Test passes but application behavior is incorrect | False confidence                          | Combine automated and manual testing                         |
| Unclear Git commits                               | Difficult to demonstrate testing progress | Use meaningful testing-related commit messages               |

Testing cannot prove that the system is completely free of defects; it provides evidence about the software's behavior and reduces uncertainty.

---

### 15. Required Evidence

The following screenshots will be captured during the testing process:

| Filename                         | Evidence                                                  |
| -------------------------------- | --------------------------------------------------------- |
| `01-existing-application.png`    | Module 7 application running before testing               |
| `02-passing-unit-tests.png`      | Initial automated tests passing                           |
| `03-failed-unit-test.png`        | Failed automated test showing expected and actual results |
| `04-identified-defect.png`       | Actual application defect reproduced                      |
| `05-defect-correction.png`       | Source code showing the correction                        |
| `06-successful-retesting.png`    | Corrected feature successfully retested                   |
| `07-final-regression-result.png` | Final automated tests and regression results              |
| `08-github-commit.png`           | GitHub repository showing testing-related commits         |

Each screenshot will have a short explanation in the final PDF report.

---

### 16. Git and Repository Plan

The same Module 7 GitHub repository will be used for Module 8.

Testing-related changes will be separated into meaningful commits. The planned commits are:

1. `Add Module 8 testing documentation`
2. `Configure Vitest testing environment`
3. `Add automated tests for task features`
4. `Fix [actual defect] found during testing`
5. `Add retesting and regression results`
6. `Update CI workflow for tests and build`

The actual defect name will replace `[actual defect]` after the defect has been identified.

The Module 8 activity recommends at least five meaningful testing-related commits and specifically advises against vague commit messages such as `update`, `changes`, `final`, or `done`.

---

### 17. Test Deliverables

The following deliverables will be produced:

* `docs/testing/test-plan.md`
* `docs/testing/manual-test-cases.md`
* `docs/testing/defect-report.md`
* `docs/testing/regression-results.md`
* Vitest automated test files
* Updated Vitest configuration
* Updated GitHub Actions workflow
* Eight required screenshots
* Updated README testing section
* Final Module 8 PDF report

---

### 18. Test Completion Summary

The testing activity will provide evidence that the Student Task Management System has been evaluated through manual and automated testing. The process will include defect discovery, documentation, correction, retesting, and regression testing. The final system must have five passing automated unit tests, completed manual test cases, a corrected actual defect, successful regression testing, and a successful production build before the tested project is pushed to the existing Module 7 GitHub repository.
