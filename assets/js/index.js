const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Engineer = require("./src/Employees/engineer");
const Manager = require("./src/Employees/manager");
const Intern = require("./src/Employees/intern");
const render = require("./generateTeam");
const empArr = [];

const promptRole = [
    {
        type: "list",
        name: "Role",
        message: "What is your position?",
        choices: ["Engineer", "Manager", "Intern", 'Done']
    }];

const promptManager = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "officenumber",
        message: "What is the manager's office?"
    }];
    const promptEngineer = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub?"
    },];
    const promptIntern = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?"
    }
];

function askQuestions () {
    inquirer.prompt(promptRole)
    .then(answers => {
        // console.log(answers);
        if (answers.Role === "Manager") {
          managerPrompt()
        }
        else if (answers.Role === "Engineer") {
            engineerPrompt()
        }
        
        else if (answers.Role === "Intern") {
            internPrompt()
        }
        else{
            writeFile(empArr)
        }
        
    } 
)};
function managerPrompt(){
    inquirer.prompt(promptManager)
    .then(answers => {
        const manager = new Manager(answers.name, answers.email, answers.officenumber, answers.id);
        empArr.push(manager);
        console.log(empArr);
    }).then(()=> askQuestions())
};
function engineerPrompt(){
    inquirer.prompt(promptEngineer)
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.email, answers.github, answers.id);
        empArr.push(engineer);
        console.log(empArr);
    } ).then(()=> askQuestions())
};
function internPrompt() {
    inquirer.prompt(promptIntern)
    .then(answers => {
        const intern = new Intern(answers.name, answers.email, answers.school, answers.id);
        empArr.push(intern);
        console.log(empArr);
}).then(()=> askQuestions())
};




askQuestions();

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('index.html', render(data), err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Success")
     return;
        }
    }
    )};
    