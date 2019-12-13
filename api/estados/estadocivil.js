const express = require('express');
const router = express.Router();

const mysqlConnection = require('../../DB/db');




//show all estados
router.get('/api/estados/ecivil',(req, res) => {
  var sql = 'SELECT * FROM estadocivil'
  mysqlConnection.query(sql, (err, results, fields) => {
    if(!err) 
      res.json(results);
    else 
    
      console.log(err);
  });
});


module.exports = router;