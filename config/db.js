const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123@Rian',
    database: 'student_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
