# CGPA Calculator

## Overview
The CGPA Calculator is a web application designed to help university students calculate their Cumulative Grade Point Average (CGPA) based on their course grades and unit loads. The application provides an intuitive user interface that allows students to input their courses, select grades, and calculate their CGPA with a visual representation of their academic performance.

## Features
- **User-Friendly Input Form**: Students can add multiple courses along with their corresponding unit loads and grades.
- **Dynamic Table**: Displays entered courses, unit loads, and grades in a table format.
- **CGPA Calculation**: Calculates the CGPA based on the inputted grades and unit loads.
- **Academic Classification**: Determines if the student is a First Class, Second Class Upper Division, Second Class Lower Division, or Third Class based on the calculated CGPA.
- **Light/Dark Mode Toggle**: Users can switch between light and dark modes for a customized viewing experience.
- **Responsive Design**: Adapts to different screen sizes for accessibility on various devices.

## File Structure

## HTML (`index.html`)
- The main structure of the webpage, containing the input form for course codes, unit loads, and grades.
- Includes buttons for adding courses, calculating CGPA, and clearing the form.
- Displays a table showing the added courses and a footer for copyright information.

### Key Sections:
1. **Form Inputs**: Fields for entering course code, unit load, and grade.
2. **Dynamic Table**: A table that displays the courses added by the user.
3. **Buttons**: Buttons to perform actions like adding courses, calculating CGPA, and clearing the inputs.

## JavaScript (`script.js`)
- Handles the logic for adding courses, calculating CGPA, and updating the user interface.
- Uses event listeners to respond to button clicks.
- Contains functions to calculate total unit loads, compute the CGPA, and determine the academic classification.

### Key Functions:
- **Adding Courses**: Collects input data and appends it to the course table.
- **Calculating CGPA**: Computes the CGPA by dividing the total grade points by the total unit loads.
- **Displaying Results**: Updates the table and footer with the results.

## CSS (`style.css`)
- Defines the styling for the application, ensuring a cohesive and modern look.
- Supports both dark mode and light mode styling.
- Utilizes Flexbox for responsive design, allowing elements to adjust based on screen size.

### Key Styles:
- **Dark Mode**: Applies dark backgrounds and light text for better readability in low-light environments.
- **Light Mode**: Provides a light background with dark text for a more traditional view.
- **Button and Input Styles**: Consistent styling for buttons and input fields to enhance usability.

## Usage
1. Open `index.html` in a web browser.
2. Enter the course code, unit load, and grade for each course.
3. Click "Add" to append the course to the table.
4. Click "Calc CGPA" to calculate and display your CGPA and academic classification.
5. Use "Clear" to reset the form and start over.
6. Toggle between light and dark modes for your preferred viewing experience.

## Author
Eagletech - Soaring through Innovation

