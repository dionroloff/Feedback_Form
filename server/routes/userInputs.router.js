const pool = require('../modules/pool.js');
const express = require('express');
const router = express.Router();


//POST the user inputs
router.post('/user-inputs', (req, res) => {
    console.log(req.body);

    pool.query(`
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
        VALUES ($1, $2, $3, $4);
    `, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then(result => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR in POST', error);
        res.sendStatus(500);
    })
}

module.exports = router;