const mysql = require('mysql2');
// creates connection 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'class2014',
    database: 'employee_management'
},
    console.log('Connected to the database')
);

connection.connect(function(err){
    if (err) throw err;
})

module.exports = connection;
