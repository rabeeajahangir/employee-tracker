const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const checkInput = require('../../utils/checkInput');

//get all departments
router.get('/departments', (req, res) => {
  const sql = `SELECT * FROM departments`;

  db.query(sql, (err, rows) => {
    if(err){
      res.status(500).json({error: err.message});
      return;
    }
    res.json({
      message: 'success',
      data: rows
    })
  })
});

//Create a department
router.post('/department', ({ body },res) => {
  const errors = checkInput(body, 'dept_name')
  if(errors){
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `INSERT INTO departments (dept_name) VALUES (?)`;
  const params = [body.dept_name]
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({
        error: err.message
      })
    }
    res.json({
      message: 'Department added successfully!',
      data: body
    })
  });
})


//delete a department
router.delete('/department/:id', (req, res) => {
  const sql = `DELETE FROM departments WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Department not found.'
      });
    } else {
      res.json({
        message: 'Department has beem deleted.',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});



  module.exports = router;