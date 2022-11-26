const funcs = require('./dbfuncs/funcs')
const dotenv = require('dotenv')
const inquirer = require('inquirer');

dotenv.config()

initMenu = () => {
    const menu = {
        type: 'list',
        name: 'menuVal',
        message: 'Choose an action from the list',
        choices: [
            'Show all departments',
            'Add department',
            'Show all employees',
            'Add employee',
            'Update employee role',
            'Show all roles',
            'Add role',
            'Quit'
        ],
        loop: false
    }

    inquirer.prompt(menu)
        .then((data) => {
            switch (data.menuVal) {
                case "Show all departments":
                    funcs.depts();
                    break;
                case "Show all employees":
                    funcs.emps();
                    break;
                case "Show all roles":
                    funcs.roles()
                    break;
                case "Add department":
                    funcs.addDept();
                    break;
                case "Add employee":
                    funcs.addEmp()
                    break;
                case "Add role":
                    funcs.addRole();
                    break;
                case "Update employee role":
                    funcs.chgRole();
                    break;
                case "Quit":
                    funcs.endProg();
                    break;
            }
        })
}

initMenu();
