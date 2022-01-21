const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const promptUser = [
    {
        type: "input",
        name: "MgrName",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "MgrEmail",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "MgrID",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "MgrOffice",
        message: "What is the manager's office?"
    },