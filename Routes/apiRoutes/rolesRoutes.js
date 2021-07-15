const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const checkInput = require('../../utils/checkInput');

//GET ALL ROUTES
router.get('/roles', (req, res) => {
    const sql = 'SELECT * FROM roles';

    db.query(sql, (err, rows) => {
        if (err){
            res.status(500).json({error: err.message})
return
        }
        res.json({
            message: 'success',
            data: rows
        })
    })
})

//DELETE A ROLE
router.delete('/roles/:id', (req, res) => {
    const sql = 'DELETE FROM roles WHERE id = ?';
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if(err) {
            res.json({error: err.message});
            return
        }
        else if (!result.affectedRows){
            res.json({message: 'Role not found.'})
          }
          else {
            res.json({
              message: 'Role successfully deleted.',
              changes: result.affectedRows,
              id: req.params.id
            })
          }
        })
      })
    
// CREATE A ROLE
router.post('/roles', ({body}, res) => {
    const errors = checkInput(body, 'job_title', 'department_name')
    if(errors){
        res.json({error: errors});
        return
    }
    const sql = `INSERT INTO roles (job_title, department_name) VALUES (?,?)`;
    const params = [body.job_title, body.department_name];

    db.query(sql, params, (err, result) => {
        if (err) {
        res.status(400).json({
            error: err.message
        })
        }
        res.json({
        message: 'Role added successfully!',
        data: body
        })
    })
      })






module.exports = router;