const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const checkInput = require('../../utils/checkInput');

// GET ALL EMPLOYEES

router.get('/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

  //GET SINGLE EMPLOYEE
  router.get('/employees/:id', (req, res) => {
    const sql = `SELECT * FROM employees WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      })
    })
  });

  //DELETE AN EMPLOYEE
router.delete('/employees/:id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Employee not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });
  
  //CREATE AN EMPLOYEE
router.post('/api/employees', ({ body }, res) => {
    const errors = checkInput(body, 'first_name', 'last_name', 'job_title', 'departments', 'salary', 'manager_name');
  
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }

    const sql = `INSERT INTO candidates ('first_name', 'last_name', 'job_title', 'departments', 'salary', 'manager_name')
  VALUES (?,?,?,?,?,?)`;
const params = [body.first_name, body.last_name, body.job_title, body.departments, body.salary, body.manager_name];

db.query(sql, params, (err, result) => {
  if (err) {
    res.status(400).json({ error: err.message });
    return;
  }
  res.json({
    message: 'New Employee Added!',
    data: body
  });
});
  });

// update employee's role
router.put('/employees/:id', (req, res) => {
    const errors = checkInput(req.body, 'roles_id');
    
    if (errors) {
    res.status(400).json({ error: errors });
    return;
    }
    const sql = `UPDATE employees SET job_title = ? WHERE id = ?`;
    const params = [req.body.role_id, req.params.id];
    
    db.query(sql, params, (err, result) => {
        if(err){
        res.status(400).json({message: err.message});
        return
        }
        else if(!result.affectedRows){
        res.json({message: 'Employee not found.'})
        }
        else {
        res.json({
            message: 'Employee role successfully updated!',
            data: req.body,
            changes: result.affectedRows
        })
        }
    })
    })



  module.exports = router;  