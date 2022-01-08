const connection = require("./connection");

class DB {

    constructor(connection){
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.promise().query(
            'SELECT * FROM employee'
        )
    }

    findAllDepartments(){
        return this.connection.promise().query(
            "SELECT * FROM department"
        )
    }

    findAllRoles(){
        return this.connection.promise().query(
            "SELECT * FROM roles"
        )
    }

    createDepartment(name){
        return this.connection.promise().query(
            "INSERT INTO department SET ?", name
        )
    }

    createRole(role){
        return this.connection.promise().query(
            "INSERT INTO roles SET ?", role
        )
    }

    createEmployee(employee){
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", employee
        )
    }

    updateEmployee(update){
        return this.connection.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?", [update.role_id, update.first_name]
        )
    }
    

}

module.exports = new DB(connection)