const inquirer = require('inquirer');
// const { setMaxListeners } = require('mysql2/typings/mysql/lib/Connection.js');
const db = require('../connection.js')
const cTable = require('console.table')

depts = () => {
    db.query('SELECT * FROM department',
        (err, res, rows) => {
            console.table(res);
        })
}

emps = () => {
    db.query('SELECT a.id, a.first_name, a.last_name, title, salary, department.name as department, CONCAT(b.first_name, " ",b.last_name) as Manager FROM employee AS a INNER JOIN role ON a.role_id = role.id INNER JOIN department on role.department_id = department.id LEFT JOIN employee AS b ON a.manager_id = b.id',
        (err, results, fields) => {
            console.table(results);
            setTimeout(() => {
                initMenu();
            }, 800)
        })
}

roles = () => {
    db.query('SELECT title, salary, name as department FROM role JOIN department ON role.department_id = department.id',
        (err, results, fields) => {
            console.table(results);
            setTimeout(() => {
                initMenu();
            }, 800)
        })
}

addDept = () => {
    deptName = {
        type: 'input',
        name: 'dept_name',
        message: "What department would you like to add?"
    }
    inquirer.prompt(deptName)
        .then((answer) => {
            db.query('INSERT INTO department (name) VALUE (?)', `${answer.dept_name}`
                , () => console.log(`${answer.dept_name} department inserted into database`))
            setTimeout(() => {
                initMenu();
            }, 800);
        })
}


addRole = () => {
    db.query('SELECT name FROM department',
        (err, res, rows) => {
            choiceList = res.map(res => res.name)
            roleInfo = [
                {
                    name: 'title',
                    message: "What is the title of the role?"
                },
                {
                    name: 'salary',
                    message: "What is the salary for the role?"
                },
                {
                    type: 'list',
                    name: 'dept',
                    message: "Which department will the role will be in:",
                    choices: choiceList
                }]

            inquirer.prompt(roleInfo)
                .then((data) => {
                    db.query('SELECT id FROM department WHERE NAME = ?', `${data.dept}`,
                        (err, res, rows) => {
                            const deptId = res[0].id
                            db.query(`INSERT into role SET ?`,
                                {
                                    title: `${data.title}`,
                                    salary: `${data.salary}`,
                                    department_id: `${deptId}`
                                },
                                () => console.log(`Added ${data.title} to the ${data.dept} department`)
                            )
                            setTimeout(() => {
                                initMenu();
                            }, 800)
                        })

                })
        })
}

addEmp = () => {
    db.query('SELECT id as value, title as name FROM role',
        (err, res, rows) => {
            rolesList = res;
            db.query('SELECT id as value, CONCAT(first_name," ",last_name) as name FROM employee',
                (err, res, rows) => {
                    mngrList = res;
                    questions = [
                        {
                            name: 'first_nm',
                            message: 'Enter employee first name'
                        },
                        {
                            name: 'last_nm',
                            message: 'Enter employee last name'
                        },
                        {
                            type: 'list',
                            name: 'role_id',
                            message: "What is the employee's role:",
                            choices: rolesList
                        },
                        {
                            type: 'list',
                            name: 'manager_id',
                            message: "Who is the employee's manager:",
                            choices: mngrList
                        }]

                    inquirer.prompt(questions)
                        .then((data) => {
                            db.query(
                                `INSERT INTO employee (first_name,last_name,manager_id, role_id) VALUES (?,?,?,?)`, [`${data.first_nm}`, `${data.last_nm}`, `${data.manager_id}`, `${data.role_id}`]
                            )
                            console.log(`Added employee ${data.first_nm} ${data.last_nm} to the database`)
                            initMenu()
                        })
                })

        })
}

chgRole = () => {
    db.query('SELECT id as value, title as name FROM role',
        (err, res, rows) => {
            rolesList = res;
            console.log(rolesList)
            db.query('SELECT id as value, CONCAT(first_name," ",last_name) as name FROM employee',
                (err, res, rows) => {
                    empList = res;
                    console.log(empList)
                    questions = [
                        {
                            type: 'list',
                            name: 'emp_id',
                            message: "Select the employee:",
                            choices: empList
                        },
                        {
                            type: 'list',
                            name: 'role_id',
                            message: "Select the employee's new role:",
                            choices: rolesList
                        }
                    ]

                    inquirer.prompt(questions)
                        .then((data) => {
                            db.query(`UPDATE employee SET role_id = ${data.role_id} WHERE id = ${data.emp_id}`, () => console.log(`Updated employee's role`))
                            initMenu();
                        })

                })
        })
}

endProg = () => {
    process.exit()
}


module.exports = { depts, emps, roles, addDept, addEmp, addRole, chgRole, endProg }