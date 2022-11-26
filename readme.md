# 12-CLI Company Database
## Description
  A CLI that allows the user to update a company database featuring departments, roles and employees.

 ### User Story
 ```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
``` 

### Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```  

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- Github: https://github.com/jlamb88/12-CLI-Company-Mgr-MYSQL.git
- Walkthrough: https://app.castify.com/view/2ba7bd7b-9bd2-493b-91b8-1b7682259aad

## Usage
  npm packages: inquirer, mysql2, console.table

## Credits
  Primary developer: Joseph Lamb

## License
 ![MIT](https://img.shields.io/badge/License-MIT-yellow.svg) 
<br>https://opensource.org/licenses/MIT
