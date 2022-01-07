const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require("./db")
const cTable = require('console.table');

require('dotenv').config();

// creates connection 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'class2014',
    database: 'department'
},
    console.log('Connected to the database')
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
        db.query('SELECT * FROM departments', (err, rows) => {
            console.table(rows)
            startQuestions();
        })
    }

    function viewAllRoles() {
        db.query('SELECT roles.*, departments.dept_name AS department FROM roles LEFT JOIN departments ON roles.department_id = departments.id', (err, rows) => {
            console.table(rows)
            startQuestions();
        })
    }

    function viewAllEmployees() {
        db.query('SELECT employees.*, roles.job_title AS role, roles.salary, departments.dept_name AS departments FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.dept_id = departments.id',
            (err, rows) => {
                console.table(rows)
                startQuestions();
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


