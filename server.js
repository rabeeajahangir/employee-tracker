const express = require('express');
const inquirer = require('inquirer');
const {createPromptModule} = require ('inquirer');
const db = require('./db/connection');
const router = require('express').Router();

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes')

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes)

const initiate = () => {

inquirer.prompt({
  type: 'list',
  name: 'beginApp',
  message: "What would you like to do?",
  choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager']
}
.then (action => {
  action = action.beginApp
  switch (action) {
    case 'View All Employees':
viewEmployees;
    break;

    case 'View All Employees By Manager':
      viewEmployeesByManager();
  break;

  case 'View All Employees By Department':
    viewEmployeesByDepartment();
    break;

    case  'Add Employee':







//ALL OPTIONS LISTED 

const viewEmployees = () => {
  const sql = 'SELECT * FROM employees'
}
db.query(sql, (err, res) => {
  if (err) throw err
  console.table(res)
});


const viewEmployeesByDepartment = () => {
  const sql = 'SELECT employees.id, employees.first_name, employees.last_name, employees.departments';
}
db.query(sql, (err, res) => {
  if (err) throw err
  console.table(res)
});


  const viewEmployeesByManager = () => {
    const sql = 'SELECT employees.id, employees.first_name, employees.last_name, employees.manager_name';
    db.query(sql, (err, res) => {
      if (err) throw err
      console.table(res)
  })
}
// ADD NEW EMPLOYEE
const addEmployee = (newEmployee) => {
  const sql = `INSERT INTO employees (first_name, last_name, job_title, departments, salary, manager_name)
  VALUES (?,?,?,?,?,?)`;
  
  const params = [newEmployee.first_name, newEmployee.last_name, newEmployee.job_title, newEmployee.departments, newEmployee.salary, newEmployee.manager_name]
}
db.query(sql, params, (err, result) => {
  if (err){
    console.log(err)
  }
  console.log(`New ${newEmployee.title}, ${newEmployee.first_name} ${newEmployee.last_name}, added successfully.`)
  return initiate();
})
}
const selectManager = (newEmployee) => {

  const sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.job_title FROM employees JOIN roles ON employees.role_id = roles.id WHERE roles.job_title;

  db.query(sql, (err, res) => {
    for (let i = 0; i < res.length; i++) {
      manager = `${res[i].first_name} ${res[i].last_name}`, `${res[i].title}`
      managerArr.push(manager)
    }
    inquirer.prompt({
      type: 'list',
      name: 'manager',
      message: 'Select manager',
      choices: managerArr.map(manager => `${manager}`)
    }).then(manager => {
      newEmployee.manager = manager.manager

      let index = manager.manager.indexOf(" ")
      newEmployee.manager_first_name = manager.manager.substr(0, index)
      newEmployee.manager_last_name = manager.manager.substr(index + 1)

      const sql = `SELECT id FROM employees WHERE first_name = ? AND last_name = ?`;
      const params = [employeeData.manager_first_name, employeeData.manager_last_name]
      db.query(sql, params, (req, res) => {
        newEmployee.manager_id = res[0].id
        AddEmployee(newEmployee)
      })
    })
  })
}
//   const viewDepartments = () => {
//     const sql = 'SELECT * FROM departments';
//     db.query(sql, (err, res) => {
//       if (err) throw err
//       console.table(res)
      
//     });

//     const viewRoles = () => {
//       const sql = 'SELECT * FROM roles';
//     }
//     db.query(sql, (err, res) => {
//       if (err) throw err
//       console.table(res)


//      //ADD DEPARTMENT TO DATABASE
//      const addDepartment = () => {
      
//        inquirer.prompt({
//          type: 'input',
//          name: 'department_name', 
//          message: 'Please add the name of the new department:'
//        })
//        .then(newDepartment => {
//         newDepartment.department_name
//          const sql ='INSERT INTO departments (department_name) VALUES (?)';
//   const params = newDepartment
//   db.query(sql, params, (err, res) => {
//     if (err) throw err
//     console.log(`The ${newDept} department was added successfully.`)
//   })
       
//      //ADD NEW ROLES
//      const addRoles = () => {
//       departmentArr = []
//       newRoles = {}
//       const sql = `SELECT dept_name FROM departments`;
//       db.query(sql, (err, res) => {
//         for (let i = 0; i < res.length; i++) {
//           departments = res[i].department_name
//           departmentsArr.push(departments )
//         }
//         inquirer.prompt([{
//           type: 'input',
//           name: 'addRoles',
//           message: 'What is the job title of the role?'
//         }, {
//           type: 'input',
//           name: 'addRoleSalary',
//           message: 'What is the salary of the new role?'
//         }, {
//           type: 'list',
//           name: 'deptOfRole',
//           message: 'Which department does the new role belong to?',
//           choices: deptArr.map(dept => `${dept}`)
//         }]).then(dept => {
//           newRoles.newRole = department.addRole
//           newRoles.newSalary = department.addRoleSalary
//           newRoles.department = department.deptOfRole
    
//           const sql = `SELECT id FROM departments WHERE dept_name = ?`;
//           const params = [newRoles.department]
//           db.query(sql, params, (err, res) => {
//             newRoles.id = res[0].id
//             completeAddRole(newRoles);
//           })
//         })
//       })
//     }
// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  



    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
