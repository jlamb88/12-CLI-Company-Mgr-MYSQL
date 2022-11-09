const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config()

const db = mysql.createPool(
    {
        host: 'localhost',
        user: process.env.DBUSER,
        password: process.env.DBPWD,
        database: 'company_db',
        waitForConnections: true,
        connectionLimit: 10
    },
    console.log(`Connected to the mysql database: company_db`)
);

module.exports = db