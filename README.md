# SGPA Calculator

This is a simple SGPA (Semester Grade Point Average) calculator built with React. It allows users to input their subject names, select their grades, and automatically calculates the SGPA based on the provided inputs.

## Table of Contents
- [Overview](#overview)
- [SGPA Formula](#sgpa-formula)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Overview
This application allows students to:
- Input the number of subjects they have taken in a semester.
- Enter the credits for each subject.
- Select the grade they received in each subject.
- Calculate the SGPA based on the inputs.

## SGPA Formula
The SGPA (Semester Grade Point Average) is calculated using the following formula:

  SGPA = (Sum of (Credits × Grade Points)) / (Sum of Credits)

### Explanation
1. **Credits:** The number of credits for a subject.
2. **Grade Points:** The numerical equivalent of the grade (e.g., 'O' = 10, 'A+' = 9).
3. The sum of the product of credits and grade points for all subjects is divided by the total number of credits.

### Example
Suppose a student has the following grades and credits:

| Subject    | Credits | Grade | Grade Points |
|------------|---------|-------|--------------|
| Math       | 4       | A+    | 9            |
| Physics    | 3       | O     | 10           |
| Chemistry  | 2       | B+    | 7            |

**SGPA Calculation:**

\[
\text{Total Credit Points} = (4 \times 9) + (3 \times 10) + (2 \times 7) = 36 + 30 + 14 = 80
\]

\[
\text{Total Credits} = 4 + 3 + 2 = 9
\]

\[
\text{SGPA} = \frac{80}{9} \approx 8.89
\]

## Features
- Input subject names and credits.
- Select grades for each subject.
- Dynamic SGPA calculation.
- Simple and intuitive user interface.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/chuadharysagar/Sgpa-Cgpa_calculator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Sgpa-Cgpa_calculator
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

## Usage
1. Enter the subject name (optional).
2. Select the number of subjects and their respective grades.
3. The application will use the `gradeMap` context to assign grade points based on the selected grades.
4. The "Calculate SGPA" button will compute the SGPA and display the result.

## Technologies Used
- **React**: For building the user interface.
- **Context API**: For managing the state of grade mappings.
- **JavaScript**: Logic and calculations.
- **CSS**: Styling the components.
