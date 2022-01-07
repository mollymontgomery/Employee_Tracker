const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require("./db")
const cTable = require('console.table');

require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'class2014',
    database: 'department'
}
);

// sets the prompts for the user to choose from
function startQuestions() {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: [
            "View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update employee role", "Exit"
        ]
    }).then(function (answer) {
        //https://www.w3schools.com/js/js_switch.asp
        switch (answer.choice) {
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

    function viewDepartments() {
        connection.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;",
            function (err, res) {
                if (err) throw err
                console.table(res)
                startQuestions()
            })
    }

    function viewAllRoles() {
        connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;",
            function (err, res) {
                if (err) throw err
                console.table(res)
                startQuestions()
            })
    }

    function viewAllEmployees() {
        connection.query("SELECT 
            function (err, res) {
                if (err) throw err
                console.table(res)
                startQuestions()
            })
    }
    function addDepartment() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'newDepartment',
                message: 'What department would you like to add?',
            },
        ]).then(
        }

})

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "role_id",
            message: "What is the employee's role?",
            choices: rolesChoices
        },
        {
            type: "list",
            name: "manager_id",
            message: "Who is the employee's manager?",
            choices: ["1", "2", "3", "4", "Null"]
        }
    ])
    .then 
}

function addRole() {
    inquirer.prompt([
        {
            name: "job_title",
            message: "What is the title of the role?"
        },
        {
            name: "salary",
            message: "What is the salary of the role?"
        },
        {
            type: "list",
            name: "department_id",
            message: "What department does this role belong to?",
            choices: departmentChoices
        },
    ])
        .then()

}


