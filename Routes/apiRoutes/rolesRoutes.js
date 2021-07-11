const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const checkInput = require('../../utils/checkInput');

//GET ALL ROUTES
router.get('/roles', (res, res) => {
    const sql = 'SELECT * FROM roles';

    db.query(sql, (err, row) => {
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
router.delete('/role/:id', (req, res) => {
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
    







module.exports = router;