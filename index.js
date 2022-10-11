const inquirer = require('inquirer');
const fs = require('fs');
// const genHTMLfile = require('./genHTMLfile');
// // const Manager = require('./lib/manager');
// // const Engineer = require('./lib/engineer');
// // const Intern = require('./lib/intern');

let teamArray = []

function init() {
    console.log("Welcome to team generator!We'll start by adding the project manager!")
    addManager()
}
function nextStep(){
    inquirer.prompt(
        {
            type: "list",
            name: "next",
            message: "What would you like to do next?",
            choices: ["add intern", "add engineer", "build team"]
        },

    )
    .then // add switch function ^^^^^ with above options . if the answer build team then the team wwil be built , if the anser add intern , if the answer build eng 
    
}
function addManager() {
    inquirer.prompt([

        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },

        {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID number?"
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?"
        },

        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
        }

    ]).then(answers => {
        //const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        //teamArray.push(manager);
        nextStep();
    });

}


function addEngineer() {
    inquirer.prompt([

        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee ID number?"
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?"
        }

    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        
    });

}

function addIntern() {
    inquirer.prompt([

        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },

        {
            type: "input",
            name: "internId",
            message: "What is the intern's employee ID number?"
        },

        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?"
        }

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        
    });

}


function htmlBuilder() {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}
//genTeam();

init();
// make sure to add function name at the end 