const inquirer = require('inquirer')
const db = require('../connection.js')

depts = () => {
    db.query('SELECT * FROM department',
        (err, results, fields) => {
            console.table(results);
        })
}

emps = () => {
    db.query('SELECT * FROM employee',
        (err, results, fields) => {
            console.table(results);
        })
}

roles = () => {
    db.query('SELECT * FROM role',
        (err, results, fields) => {
            console.table(results);
        })
}

addDept = () => {
    deptName = {
        name: 'dept_name',
        message: "What department would you like to add?"
    }
    inquirer.prompt(deptName)
        .then((answer) => {
            db.query('INSERT INTO department (id, name) VALUES ?', [`${mkid}, ${answer.dept_name}`])
            console.table(result)
        })


}

addRole = () => {
    roleInfo = [
        {
            name: 'role_name',
            message: "What role would you like to create?"
        },
        {
            name: 'salary',
            message: "What is the salary for the role"
        },
        {
            name: 'dept',
            message: "Which department will the role will be in?"
        }
    ]
    inquirer.prompt(roleInfo)
        .then((data) => {
            deptID = db.query(
                `SELECT id FROM department WHERE NAME ?`, data.dept
            )
            db.query(
                `INSERT INTO role VALUES ?`, [`${id},${data.role_name},${salary},${deptID}`]
            )
            console.table(role)
        })

}
addEmp = () => {
    empInfo = [
        {
            name: 'first_nm',
            message: 'Enter employee first name'
        },
        {
            name: 'last_nm',
            message: 'Enter employee last name'
        },
        {
            name: 'role_nm',
            message: "What is the employee's role?"
        },
        {
            name: 'manager_nm',
            message: "Who is the employee's manager?"
        }
    ]
    inquirer.prompt(empInfo)
        .then((data) => {
            mngrFirst = split(data.manager_nm, " ")[0]
            mngrLast = split(data.manager_nm, " ")[1]
            mngrID = db.query(
                `SELECT id FROM employees WHERE first_nm = ${mngrFirst} AND last_nm = ${mngrLast})`
            )
            roleID = db.query(
                `SELECT id FROM role WHERE title = ${role_nm}`
            )
            empID = db.query(
                'SELECT MAX(id) FROM employees'
            ) + 1

            db.query(
                `INSERT INTO employees (id, first_nm,last_nm,role_id,manager_id) VALUES ?`, [`${empID},${data.first_nm},${data.last_nm},${roleId},${mngrID}`]
            )
        }
        )
    console.table(employees)
}

chgRole = () => { }


module.exports = { depts, emps, roles, addDept, addEmp, addRole, chgRole }