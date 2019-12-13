const mysql = require('mysql');



//create database connection
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nomina_labco'
});


//connect to database
mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log('Mysql Connected...');
    }
});


module.exports = mysqlConnection;