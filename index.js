const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");


const promptUser = [
    {
        type: "input",
        name: "Name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "ID",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "OfficeNumber",
        message: "What is the manager's office?"
    },
    {
        type: "input",
        name: "EngName",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "IngID",
        message: "What is the engineer's ID?"
    },
    {
        type: "input",
        name: "IngEmail",
        message: "What is the engineer's email?"
    },
    {
        type: "input",
        name: "EngGitHub",
        message: "What is the engineer's GitHub?"
    },
    {
        type: "input",
        name: "InternName",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "InternID",
        message: "What is the intern's ID?"
    },
    {
        type: "input",
        name: "InternEmail",
        message: "What is the intern's email?"
    },
    {
        type: "input",
        name: "InternSchool",
        message: "What is the intern's school?"
    },
];


const html = [];

html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
);
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
);
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
);

return html.join("");

}

// export function to generate entire page
module.exports = team => {

return `