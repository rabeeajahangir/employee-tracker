const express = require('express');
// const mysql = require('mysql2');
const inquirer = require('inquirer');



const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());







app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

  db.query(`SELECT * FROM employees`, (err, rows) => {
    console.log(rows);
  });





// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  



    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
