const funcs = require('./dbfuncs/funcs')
const mysql = require('mysql2')
const dotenv = require('dotenv')
const inquirer = require('inquirer');
const db = require('./connection')


dotenv.config()

const menu = {
    type: 'list',
    name: 'menuVal',
    message: 'Choose an action from the list',
    choices: [
        'Show departments',
        'Show employees',
        'Show roles',
        'Add department',
        'Add employee',
        'Add Role',
        'Update employee role'
    ]
}

inquirer.prompt(menu)
    .then((data) => {
        console.log(data.menuVal);
        switch (data.menuVal) {
            case "Show departments":
                funcs.depts();
                break;
            case "Show employees":
                funcs.emps();
                break;
        }
    })

// depts = () => {
//     console.log('inside query run')
//     db.query('SELECT * FROM department',
//         (err, results, fields) => {
//             console.log(results)
//             console.table(results);
//         })
// }