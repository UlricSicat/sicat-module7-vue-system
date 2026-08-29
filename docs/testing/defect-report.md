# Defect Report

## Defect ID

DEF-001

## Defect Title

Past Due Date Can Be Entered

## System

Student Task Management System

## Severity

Medium

## Priority

High

## Status

Fixed

## Description

The system allows users to enter a due date that has already passed. A task should not accept a past date because the due date is intended to represent the date when a task is still expected to be completed.

## Steps to Reproduce

1. Open the Student Task Management System.
2. Click **Add Task**.
3. Enter the required task information.
4. Open the **Due Date** field.
5. Select a date that is earlier than the current date.
6. Submit the task.

## Expected Result

The system should reject the past due date and display a validation message informing the user that the due date must be today or a future date.

## Actual Result

The system accepts the past due date and allows the task to be submitted.

## Evidence

The defect was identified during automated testing. The failed unit test showed that the application did not properly reject a past due date.

**Screenshot:** `04-identified-defect.png`

## Root Cause

The due-date validation did not prevent users from selecting or submitting a date earlier than the current date.

## Correction

The due-date validation was updated so that the system checks the entered due date against the current date. Past dates are rejected, while today's date and future dates are accepted.

**Screenshot:** `05-defect-correction.png`

## Retesting

After the correction was implemented, the due-date test was executed again.

### Retest Result

**PASS** — Past due dates are now rejected, and valid due dates can be submitted successfully.

**Screenshot:** `06-successful-retesting.png`

## Regression Testing

The remaining system features were tested after the correction to ensure that the change did not affect existing functionality.

The following features were checked:

* Add Task
* Display Task Records
* Edit Task
* Delete Task
* Search Task

### Regression Result

**PASS** — Existing features continued to work correctly after the due-date validation correction.

**Screenshot:** `07-final-regression-result.png`
