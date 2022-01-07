const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'class2014',
    database: 'department'
},
console.log('connected to database')
);

// sets the prompts for the user to choose from
function questions() {
    inquirer.prompt ({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            "View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update employee role", "Delete employee", "Exit"
        ]
    }).then(function (answer){
        //https://www.w3schools.com/js/js_switch.asp
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
    
function viewDepartments() {
    connection.query('SELECT * FROM department', (err, rows) => {
        console.table(rows)
        questions();
    })
}

function viewRoles

function viewEmployees

function addDepartment(){
    inquirer.prompt ([
        {
            type: 'input',
            name: 'newDepartment',
            message: 'What department would you like to add?',
        },
    ]).then(answer => {
       
})

function addEmployee

function addRole

function deleteEmployee

}