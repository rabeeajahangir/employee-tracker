const express = require('express');
// const mysql = require('mysql2');
const inquirer = require('inquirer');



const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



inquirer.prompt([
  {
  type: 'list',
  name: 'beginApp',
  message: "What would you like to do?",
  choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager']
}
.then(action => {
  action = action.beginApp
  switch (action)








// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello World'
//     });
//   });

//   db.query(`SELECT * FROM employees`, (err, rows) => {
//     console.log(rows);
//   });

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
  }

  const viewDepartments = () => {
    const sql = 'SELECT * FROM departments';
    db.query(sql, (err, res) => {
      if (err) throw err
      console.table(res)
      
    })

    const viewRoles = () => {
      const sql = 'SELECT * FROM roles';
    }
    db.query(sql, (err, res) => {
      if (err) throw err
      console.table(res)
// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  



    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
