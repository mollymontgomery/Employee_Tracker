const inquirer = require('inquirer');
const db = require("./db")

init();

function init() {
    console.log("Welcome to your employee management system!")
    startQuestions()
}

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
        db.findAllDepartments()
            .then(([rows]) => {
                let departments = rows;
                console.table(departments);
            })
            .then(() => startQuestions())
    }

    function viewAllRoles() {
        db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.table(roles);
        })
        .then(() => startQuestions())
    }

    function viewEmployees() {
        db.findAllEmployees()
            .then(([rows]) => {
                let employees = rows;

                console.table(employees);
            })
            .then(() => startQuestions())
    }

    function addDepartment() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'department_name',
                message: 'What is the name of the department would you like to add?',
            }
        ]).then(response => {
            let name = response;
            db.createDepartment(name)
                .then(() => console.log(`Added ${name.department_name} to the database`))
                .then(() => startQuestions())
        })


    }

    function addEmployee() {

        // get all roles and map over them inside the .then have your inquirer.prompt()
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
            }
        ])
            .then()
    }

    function addRole() {
        db.findAllDepartments()
            .then(([rows]) => {
                let departments = rows;
                const departmentChoices = departments.map(({ id, department_name }) => ({
                    name: department_name,
                    value: id
                }));

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
                    .then(role => {
                        db.createRole(role)
                            .then(() => console.log(`Added ${role.job_title} to the database`))
                            .then(() => startQuestions())
                    })

            })


    }

}


// UPDATE EMP ROLE

// 1 get all emps map over emps like youve done before

// 2 findAllRoles and map over them 

// 3 inside of findAllRoles.then() youre going to prompt and ask what role you want to assign to the employee

// 4 call your db.method (updateEmpRole) and pass the id of the employee as well as the role id
