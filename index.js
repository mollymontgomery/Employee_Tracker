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

    function viewRoles() {
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

    function addEmployee(){
        db.findAllRoles()
            .then(([rows]) => {
                let roles = rows;
                console.log(roles)
                const rolesChoices = roles.map(({ id, job_title }) => ({
                    name: job_title,
                    value: id
                }))

                inquirer.prompt([
                    {
                        type: "input",
                        name: "first_name",
                        message: "What is the employee's first name?",
                    },
                    {
                        type: "input",
                        name: "last_name",
                        message: "What is the employee's last name?",
                    },
                    {
                        type: "list",
                        name: "role_id",
                        message: "What is the employee's role?",
                        choices: rolesChoices
                    },
                ])
                    .then(employee => {
                        db.createEmployee(employee)
                            .then(() => console.log(`Added ${employee.first_name} ${employee.last_name} to the database`))
                            .then(() => startQuestions())
                    })
            })
    };

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

function updateRole() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            const employeeChoices = employees.map(({ id, first_name }) => ({
                name: first_name,
                value: id
            }));
            db.findAllRoles()
                .then(([rows]) => {
                    let roles = rows;
                    const rolesChoices = roles.map(({ id, job_title }) => ({
                        name: job_title,
                        value: id
                    }))
                    inquirer.prompt([
                        {
                            type: "list",
                            name: "first_name",
                            message: "Who is the employee that you would like to update?",
                            choices: employeeChoices
                        },
                        {
                            type: "list",
                            name: "role_id",
                            message: "Which new role would you like to assign them to?",
                            choices: rolesChoices
                        }
                    ])
                        .then(update => {
                            let updatedEmployee = employees.filter(person => person.id === update.first_name)
                            db.updateEmployee(update)
                                .then(() => console.log(`Changed ${updatedEmployee[0].first_name}'s role.`))
                                .then(() => startQuestions())
                        })
                })
        })
}


// UPDATE EMP ROLE

// 1 get all emps map over emps like youve done before

// 2 findAllRoles and map over them 

// 3 inside of findAllRoles.then() youre going to prompt and ask what role you want to assign to the employee

// 4 call your db.method (updateEmpRole) and pass the id of the employee as well as the role id
