const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const checkInput = require('../../utils/checkInput');

//get all departments

router.get('/departments', (res, req) => {
    const sql ='SELECT * FROM departments';
    db.query(sql, (err, rows) => {
        if (err){

            res.statusCode(500).json{error:err.message};
            return;
        }
        res.json({
            message: 'success',
            data: rows
        })
    })
});