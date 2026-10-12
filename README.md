# Student Management App

A simple Angular-based student management dashboard for viewing, searching, and deleting student records. The app presents a list of students in a card layout and displays a detailed information panel when a student is selected.

## Project Overview

This project is built using Angular 22 with standalone components and signals for state management. It is designed as a lightweight front-end application that demonstrates a student directory UI with search and detail-view functionality.

## Tech Stack

- Angular 22
- TypeScript
- HTML and CSS
- Standalone Angular components
- Signals for local state management

## Features

- Display all students in a grid of student cards
- Search students by:
  - name
  - course
  - roll number
- View a detailed profile for any student
- Delete a student from the list
- Mark students as PASS or FAIL based on marks
- Responsive layout for desktop and tablet/mobile screens
- Static dataset for demonstration purposes

## Student Data Model

Each student object contains the following fields:

```ts
export interface Student {
  id: string;
  rollNo: string;
  name: string;
  course: string;
  marks: number;
  addedOn: string;
  imgPath: string;
}
```

## Application Workflow

### 1. App level state
The root component stores the complete student list and the currently selected student.

- `students` signal holds the master list of student records
- `selectedStudent` signal stores the clicked student for detail display
- `onStudentSelected()` updates the selected record
- `onDeleteStudent()` removes a student from the list and clears the detail panel if needed
- `onCloseDetails()` closes the detail section

### 2. Student list panel
The list screen shows:
- a header titled “All Students”
- a search box
- a grid of student cards rendered using `StudentList`

The `StudentList` component filters students based on:
- `name`
- `course`
- `rollNo`

If no record matches the search, it displays the message:

> No students match your search.

### 3. Student cards
Each card shows:
- profile image
- student name
- course
- PASS/FAIL status based on `marks >= 40`
- marks
- roll number

Action buttons:
- View Details
- Delete

### 4. Details panel
When a user clicks “View Details”, the app opens a side panel with the student’s full information including:
- name
- course
- marks
- roll number
- status
- added date
- large profile image

The detail panel also includes a close button to return to the student list.

## Component Structure

```text
src/
├── app/
│   ├── app.ts
│   ├── app.html
│   ├── app.css
│   ├── models/
│   │   └── Student.ts
│   ├── student-card/
│   │   ├── student-card.ts
│   │   ├── student-card.html
│   │   ├── student-card.css
│   ├── student-details/
│   │   ├── student-details.ts
│   │   ├── student-details.html
│   │   ├── student-details.css
│   └── student-list/
│       ├── student-list.ts
│       ├── student-list.html
│       ├── student-list.css
├── assets/
│   └── icons/
└── index.html
```

## Functional Behavior

### Pass/Fail Logic
A student is considered:

- PASS if `marks >= 40`
- FAIL if `marks < 40`

This status is used in both the student card and the detail section.

### Search Logic
The filtered list is computed dynamically using a search term. The current implementation matches any student whose:

- name contains the search text
- course contains the search text
- roll number contains the search text

The comparison is case-insensitive.

### Delete Logic
When a student is deleted:
- the record is removed from the main `students` array
- if the deleted student was currently selected, the details panel is cleared

## How to Run the Project

### Prerequisites

- Node.js and npm installed
- Angular CLI installed globally or use the local project setup via `npx`

### Installation

```bash
npm install
```

### Start the app

```bash
npm start
```

or

```bash
ng serve
```

Then open:

```text
http://localhost:4200/
```

## Available Scripts

```bash
npm start
```
Runs the Angular development server.

```bash
npm run build
```
Builds the project for production.

```bash
npm test
```
Runs the Angular test task.

## Notes

- The application currently uses mock student data defined directly in the root component.
- There is no backend or database integration at this stage.
- This is a front-end demonstration project focused on UI behavior and interaction flow.

## Future Enhancements

Possible improvements for this app include:

- Add Student form
- Edit student details
- Local storage persistence
- Backend API integration
- Sorting and pagination
- Admin authentication
- Dashboard analytics

## Summary

This app demonstrates a clean and functional student management interface built with Angular. It provides a practical example of component composition, signal-driven state updates, search/filtering, delete actions, and a detail view pattern commonly used in admin dashboards.
