const mysql = require('mysql2/promise');
const database = {
    host: '',
    port: 3306,
    user: '',
    password: '',
    database: '',
    connectionLimit: 100,
}

module.exports = mysql.createPool(database)
