import fs from 'fs/promises';
import inquirer from 'inquirer';
import chalk from 'chalk';

async function init() {

    try {

        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'projectTitle',
                message: 'What is your project title?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is your project description?'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the installation instructions?'
            },
            {
                type: 'input',
                name: 'problemSolved',
                message: 'What is the problem your project solves?'
            },
            {
                type: 'select',
                name: 'license',
                message: 'What license does your project use?',
                choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
            },
            {
                type: 'input',
                name: 'GitHubUsername',
                message: 'What is your GitHub username?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?'
            },
            {
                type: 'input',
                name: 'otherContributors',
                message: 'Who are the other contributors to your project?'
            }
        ]);
        
        const content = `# ${answers.projectTitle}\n\n## Description\n${answers.description}\n\n## Installation\n${answers.installation}\n\n## Problem Solved\n${answers.problemSolved}\n\n## License\nThis project is licensed under the ${answers.license} license.\n\n## Questions\nFor any questions, please contact me at:${answers.email}. You can also find more of my work on GitHub:${answers.GitHubUsername} \n\n## Contributors\n${answers.otherContributors}`;           
        
        console.log(content);

        await fs.writeFile('README.md', content, "utf-8");

        const appendContent = '\n\n## What did you learn?\n During this project creation, was important the integration of different technologies in the code, and learn some basics about the clasic code (previous versions) versus the modern versions of coding.\n\n## How to Contribute\nIf you would like to contribute to this project, please fork the repository and submit a pull request. We welcome contributions from the community!\n\n## Tests\nTo run tests for this project, please follow the instructions provided in the documentation.'
        

        await fs.appendFile('README.md', appendContent);
        
        console.log(chalk.green(`Hello, the README.md file has been generated successfully!`));

        } catch (error) {
        console.error(chalk.red(error.message));
        }
    } init();