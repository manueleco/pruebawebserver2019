const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var http = require("http");

const mysqlConnection = require('../../DB/db');
/*
router.use(express.json({
  limit: '10mb',
  type: 'application/json'
}));*/

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

//show ultima nomina aguinaldo
router.get('/api/nomina/naguinaldo', (req, res) => {
  var sql = 'SELECT * FROM lastaguinaldo'
  mysqlConnection.query(sql, (err, results, fields) => {
    if (!err)
      res.json(results);
    else
      console.log(err);
  });
});
//show single product
/*
app.get('/api/empleados/:ddd',(req, res) => {
  let sql = "SELECT * FROM empleados WHERE emp_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
  });
});
*/



//agregar empleado

router.post('/api/nomina/naguinaldo/agregar', (req, res) => {
  console.log("Request: ");
  console.log(req.body);
  var sql1 = "CALL generateAguinaldo(" + req.body.fromdate_new + ", " + req.body.todate_new + ")";

  mysqlConnection.query(sql1, (err1, results1, fields) => {
    if (!err1) {
      res.json({
        status: 'Nomina de aguinaldo agregada con exito'
      });
      console.log("success");
    }
    else
      console.log(err1);
  });
});

//Delete product
/*
app.delete('/api/products/:id',(req, res) => {
let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
let query = conn.query(sql, (err, results) => {
  if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
});
});*/

module.exports = router;
