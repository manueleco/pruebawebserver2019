const express = require('express');
const router = express.Router();

const mysqlConnection = require('../../DB/db');




//show all products
router.get('/api/naciones/nacion',(req, res) => {
  var sql = 'SELECT * FROM nacionful';
  mysqlConnection.query(sql, (err, results, fields) => {
    if(!err) 
      res.json(results);
    else 
    
      console.log(err);
  });
});


module.exports = router;

