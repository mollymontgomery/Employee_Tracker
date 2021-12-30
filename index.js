const mysql = require('mysql12');
const inquirer = require('inquirer');
const cTable = require('console.table');

const questions = () => {
    return inquirer.prompt ([
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
    }
    ])
    
}