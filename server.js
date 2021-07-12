const express = require('express');
const inquirer = require('inquirer');
const {createPromptModule} = require ('inquirer');
const router = require('express').Router();

const PORT = process.env.PORT || 3001;
const app = express();
const { connect } = require('./db/connection');
const db = require('./db/connection');
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
  choices: ['View All Employees', 'View All Department', 'View All Roles', 'Update Department', 'Add Employee', 'Remove Employee', 'Update Employee Role']
}
.then (action => {
  action = action.beginApp
  
  switch (action) {
    case 'View All Employees':
viewEmployees;
    break;

    case  'Add Employee':
      addEmployee();
      break;

case 'Remove Employee':
  removeEmployee();
  break;

  case 'View All Roles':
      allRoles();
      break;

case 'Update Employee Role':
selectEmployee();
break;

case 'View All Department':
  viewDepartments();
  break;

  case 'Update Department':
    addDepartments();
    break;

    
//ALL OPTIONS LISTED 
//VIEW ALL EMPLOYEES
const viewEmployees = () => {
  const sql = 'SELECT * FROM employees'
}
db.query(sql, (err, res) => {
  if (err) throw err
  console.table(res)
});



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
//DELETE AN EMPLOYEE
    remEmployee = {}
    const removeEmployee = () => {
      let delEmployee = [];
      const sql = `SELECT * FROM employees`;
      db.query(sql,(req, res) => {
        for(let i = 0; i < res.length; i++){
          let employee = `${res[i].first_name} ${res[i].last_name}`
          delEmployeeArr.push(employee)
        }
        inquirer.prompt({
          type: 'list',
          name: 'deleteEmp',
          message: 'Which employee would you like to delete?',
          choices: remEmployeeArr.map(employees => `${employees}`)
        }).then(employee => {
          let index = employee.delEmployee.indexOf(" ")
          remEmployee.first_name = employees.delEmployee.substr(0, index)
          remEmployee.last_name = employees.delEmployee.substr(index + 1)
          
          const sql = `SELECT id FROM employees WHERE first_name = ? AND last_name = ?`;
          const params = [remEmployee.first_name, remEmployee.last_name]
          db.query(sql, params, (req, result) => {
            remEmployee.id = result[0].id
            return delEmployee(remEmployee)
          })
        })
      })
      }




      const delEmployee = () => {
        const sql = `DELETE FROM employees WHERE id = ?`;
        const params = [remEmployee.id]
        db.query(sql, params, (err, res) => {
          if(!res.affectedRows){
            console.log('Employee not found')
          }
          console.log(`${remEmployee.first_name} ${remEmployee.last_name} successfully deleted.`)
          initiate();
        })
      }
      
// VIEW ALL DEPARTMENTS
const viewDepartments = () => {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, res) => {
if (err) throw err
console.table(res)
initiate();
  })
}

//ADD A DEPARTMENT
const addDepartments = () => {
  inquirer.prompt({
      type: 'input',
      name: 'dept_name',
      message: 'What is the name of the new department?'
    })
    .then(newDept => {
      newDept = newDept.department_name
      const sql = `INSERT INTO departments (dept_name) VALUES (?)`;
      const params = newDept
      db.query(sql, params, (err, result) => {
        if (err) throw err
        //console.table(result)
        console.log(`The ${newDept} department was added successfully.`)
        initiate();
      })
    })
}
    //VIEW ALL ROLES
    const allRoles = () => {
      const sql = `SELECT * FROM roles`;
      db.query(sql, (err, res) => {
        if (err) throw err
        console.table(res)
        initiate();
      })}

    
    //UPDATE EMPLOYEE ROLE
    let currentEmployee = {}
const selectEmployee = () => {
  employeesArr = []

  const sql = `SELECT * FROM employees`;
  db.query(sql, (err, res) => {
    if (err) throw err
    for (let i = 0; i < res.length; i++) {
      let employee = `${res[i].first_name} ${res[i].last_name}`
      employeesArr.push(employees)
    }
    inquirer.prompt({
      type: 'list',
      name: 'updateEmployee',
      message: 'Which employee would you like to update?',
      choices: employeesArr.map(employees => `${employees}`)

    }).then(employees => {
      let index = employees.updateEmployees.indexOf(" ")
      currentEmployees.first_name = employees.updateEmployees.substr(0, index)
      currentEmployees.last_name = employees.updateEmployees.substr(index + 1)

      const sql = `SELECT id FROM employees WHERE first_name = ? AND last_name = ?`;
      const params = [currentEmployees.first_name, currentEmployees.last_name]

      db.query(sql, params, (err, res) => {
        if(err) throw err;
        currentEmployees.id = res[0].id
        chooseRole(currentEmployees)
      })
    })
  })
}
const chooseRole = () => {
  rolesArr = []

  const sql = `SELECT roles.title FROM roles`;
  db.query(sql, (err, res) => {
    if (err) throw err
    for (let i = 0; i < res.length; i++) {
      roles = `${res[i].title}`
      rolesArr.push(role)
    }
    inquirer.prompt({
      type: 'list',
      name: 'updateRole',
      message: 'Select new role.',
      choices: rolesArr.map(role => `${role}`)

    }).then(newRole => {
      currentEmployees.newRole = newRole.updateRole
      
      const sql = `SELECT id FROM roles WHERE roles.title = ?`
      const params = [currentEmployees.newRole]
      db.query(sql, params, (err, res) => {
        if(err) throw err;
        currentEmployee.newRole_id = res[0].id
        updateRole(currentEmployee)
      })
    })
  })
}
const updateRole = (currentEmployee) => {
  inquirer.prompt({
    type: 'list',
    name: 'confirmUpdate',
    message: 'Are you sure you want to update the role of this employee?',
    choices: ['Confirm update.','Cancel, return to menu.']
  }).then(data => {
    if(data.confirmUpdate === "Cancel, return to menu."){
      console.log('Update cancelled.')
      initiate();
    }
    if(data.confirmUpdate === "Confirm update."){
      console.log(currentEmployee)
      const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
      const params = [currentEmployee.newRole_id, currentEmployee.id]
      db.query(sql, params, (err, res) => {
        console.log(`${currentEmployee.first_name} ${currentEmployee.last_name} successfully updated to ${currentEmployee.newRole}`)
        initiate();
      })
    }
  })
}
//respond to requests not found
app.use((req, res) => {
    res.status(404).end();
  })
  


//connection to server

db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    initiate();
  });
});