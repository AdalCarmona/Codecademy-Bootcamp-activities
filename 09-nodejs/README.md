# 09 Node.js Challenge (Unsolved): Professional README Generator

## Overview

In this challenge, you will build a Node.js command-line application that generates a professional README.md file based on user input.

You will use the Inquirer package (version 8.2.4) to ask questions in the terminal and then use the answers to build a formatted README using template literals.

This README describes the expectations for the UNRESOLVED / STUDENT VERSION of the assignment. You will start from the provided starter code and complete the implementation.

---

## User Story

AS A developer  
I WANT a README generator  
SO THAT I can quickly create a professional README for a new project

---

## What You Are Given

You are provided with:

• An index.js starter file that:
– Imports (or has TODO comments to import) fs, inquirer, and generateMarkdown  
 – Contains a questions array placeholder with TODOs  
 – Contains a writeToFile function stub with TODOs  
 – Contains an init function stub with TODOs

• A utils/generateMarkdown.js starter file that:
– Contains TODOs for license helper functions  
 – Contains a generateMarkdown function that you must complete  
 – Exports generateMarkdown for use in index.js

Your job is to FILL IN the missing logic based on the acceptance criteria.

---

## Acceptance Criteria (Student Version)

You are done when:

• Running node index.js starts the application and prompts you in the terminal.

• The application prompts you for at least:
– Project title  
 – Description  
 – Installation instructions  
 – Usage information  
 – Contribution guidelines  
 – Test instructions  
 – License selection from a list (for example: MIT, APACHE 2.0, GPL 3.0, BSD 3, None)  
 – Your GitHub username  
 – Your email address

• After you answer the prompts, a README.md file is created in the project root.

• The generated README contains sections for:
– Title  
 – Description  
 – Table of Contents  
 – Installation  
 – Usage  
 – License (if a license is selected)  
 – Contributing  
 – Tests  
 – Questions (with GitHub profile link and email address)

• If a license is selected (not "None"):
– A license badge appears near the top of the README.  
 – The Table of Contents includes a link to the License section.  
 – The License section explains which license was selected.

• The Table of Contents links scroll correctly to their corresponding sections when clicked in a markdown preview.

---

## Technical Requirements

• Use Node.js and Inquirer version 8.2.4.  
• Use fs to write the README.md file.  
• Use template literals (backtick strings) for building the README content.  
• Use modular code:
– index.js handles user prompts and file writing.  
 – utils/generateMarkdown.js builds and returns the README markdown.

---

## Suggested Steps

1. Install dependencies:
   npm init -y  
   npm install inquirer@8.2.4

2. Complete index.js:
   • Import fs, inquirer, and generateMarkdown.  
   • Fill in the questions array to include all required prompts.  
   • Implement writeToFile(fileName, data) using fs.writeFile or fs.writeFileSync.  
   • In init(), call inquirer.prompt(questions), pass answers into generateMarkdown, then write the result to README.md.

3. Complete generateMarkdown.js:
   • Implement helper functions for:
   – License badge  
    – License link in the Table of Contents  
    – License section text  
   • Use those helpers inside generateMarkdown(data).  
   • Build the README string with all required sections.

4. Test your app:
   • Run node index.js  
   • Answer all prompts  
   • Open the generated README.md in VS Code or GitHub preview  
   • Verify that content and links are correct.

---

## Hints

• You can search for "Professional README Guide" to see an example structure.  
• Start simple: get the title and description working, then add more sections.  
• Build your README layout in a separate markdown file first if that helps.  
• Keep your code readable and commented so you can explain it later.

---

## What You Will Submit (Student View)

• The GitHub repo containing:
– Completed index.js  
 – Completed utils/generateMarkdown.js  
 – package.json with Inquirer 8.2.4 installed  
 – A generated sample README.md created by your application

• A walkthrough video link (if required by your instructor) that shows:
– Running node index.js  
 – Entering answers for all prompts  
 – The resulting README.md and working Table of Contents links

---

## Reminder

This file describes the UNRESOLVED version of the challenge. Starter code contains TODO comments that you must complete. Do not simply copy a finished solution; use this as practice to strengthen your Node.js and CLI application skills.
