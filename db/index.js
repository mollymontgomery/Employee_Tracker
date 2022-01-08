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






}

module.exports = new DB(connection)