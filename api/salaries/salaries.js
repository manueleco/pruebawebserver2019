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

//show all products
router.get('/api/salaries', (req, res) => {
  var sqlSueldo = 'SELECT * FROM salariosfull'
  //var sql = "CALL getEmployees()";
  mysqlConnection.query(sqlSueldo, (err, results, fields) => {
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



//modify salario

router.post('/api/salaries/modify', (req, res) => {
  console.log("Request: ");
  console.log(req.body);
  var sql1 = "CALL updateSalary(" + req.body.empleadoId + "," + req.body.salario_new + "," + req.body.fromdate_new +")";
  
  mysqlConnection.query(sql1, (err1, results1, fields) => {
    if (!err1) {
      res.json({
        status: 'Salario modificado con exito'
      });
      console.log("success");
    }
    else
      console.log(err1);
  });
  
});


//update any salario

router.put('/api/salarios/update', (req, res) => {
  console.log("Request: ");
  console.log(req.body);
  let sql24 ="";
  let nullVar = null;
  if(req.body.todate_new==null | req.body.todate_new=='null'){
    sql24 = "UPDATE sueldos SET salario="+req.body.salario_new+
    ", from_date='"+req.body.fromdate_new+"', to_date="+nullVar+
    " WHERE salario_id="+req.body.salario_id;
  } else 
  if(req.body.fromdate_new==null | req.body.fromdate_new == 'null' ){
    sql24 = "UPDATE sueldos SET salario="+req.body.salario_new+
    ", from_date="+nullVar+", to_date='"+req.body.todate_new+
    "' WHERE salario_id="+req.body.salario_id;
  }
  else if((req.body.fromdate_new==null | req.body.fromdate_new == 'null') & (req.todate_new | req.body.todate_new=='null')){
    sql24 = "UPDATE sueldos SET salario="+req.body.salario_new+
    ", from_date="+nullVar+", to_date="+nullVar+
    " WHERE salario_id="+req.body.salario_id;
  } else {
    sql24 = "UPDATE sueldos SET salario="+req.body.salario_new+
    ", from_date='"+req.body.fromdate_new+"', to_date='"+req.body.todate_new+
    "' WHERE salario_id="+req.body.salario_id;
  }


  console.log(sql24);
  mysqlConnection.query(sql24, (err43, res3, fields) => {
    if (!err43) {
      res.json({
        status: 'Salario actualizado con exito'
      });
      console.log("success");
    }
    else
      console.log(err43);
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

