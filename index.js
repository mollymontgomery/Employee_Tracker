const mysql = require('mysql12');
const inquirer = require('inquirer');
const cTable = require('console.table');

function questions() {
    inquirer.prompt ({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            "View all departments", 
            "View all roles",
            "View all employees", 
            "Add a department", 
            "Add a role", 
            "Add an employee", 
            "Update employee role",
            "Delete employee", 
            "Exit"
        ]
    }).then(function (answer){
        switch (answer.action){
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update employee role':
                updateRole();
                break;
            case 'Delete employee':
                deleteEmployee();
                break;
            case 'EXIT':
                exitApp();
                break;
            default:
                break;
        }
    })
    
}