const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var http = require("http");

const mysqlConnection = require('../../DB/db');


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

//show all nominas
router.get('/api/nomina/fullnominas', (req, res) => {
  var sql = 'SELECT * FROM fullnominas'
  mysqlConnection.query(sql, (err, results, fields) => {
    if (!err)
      res.json(results);
    else
      console.log(err);
  });
});


//show single nominafull

router.get('/api/nomina/fullnominas/forSelect',(req, res) => {
  let sql4321 = "SELECT * FROM full_nmensual";
  let query = mysqlConnection.query(sql4321, (err4321, results) => {
    if(err4321) throw err4321;
    res.json(results);
  });
});

//show single nominafullventas

router.get('/api/nomina/fullnominas/forSelect/ventas',(req, res) => {
  let sql4321 = "SELECT * FROM full_nmensual where departamento LIKE '%Ventas%'";
  let query = mysqlConnection.query(sql4321, (err4321, results) => {
    if(err4321) throw err4321;
    res.json(results);
  });
});


//show single nominafull

router.get('/api/nomina/fullnominas/forSelect/servicios',(req, res) => {
  let sql4321 = "SELECT * FROM full_nmensual WHERE departamento LIKE '%Servicios%'";
  let query = mysqlConnection.query(sql4321, (err4321, results) => {
    if(err4321) throw err4321;
    res.json(results);
  });
});

//show single nominafull

router.get('/api/nomina/fullnominas/forSelect/sumasnominas',(req, res) => {
  let sql4321 = "SELECT * FROM sumanominas";
  let query = mysqlConnection.query(sql4321, (err4321, results) => {
    if(err4321) throw err4321;
    res.json(results);
  });
});



//show nomina bono 14

router.get('/api/nomina/fullbono14',(req, res) => {
  let sql4321 = "SELECT * FROM full_bono14";
  let query = mysqlConnection.query(sql4321, (err4321, results) => {
    if(err4321) throw err4321;
    res.json(results);
  });
});

//show nomina aguinaldo

router.get('/api/nomina/fullaguinaldo',(req, res) => {
  let sql4321 = "SELECT * FROM full_aguinaldo";
  let query = mysqlConnection.query(sql4321, (err4321, results) => {
    if(err4321) throw err4321;
    res.json(results);
  });
});



//update nmensual

router.put('/api/nomina/nmensual/update', (req, res) => {
  console.log("Request: ");
  console.log(req.body);
  
  let sql267 ="";
  
    sql267 = "CALL modNmensual("+req.body.nomina_id+","+req.body.mensual_emp_dias+","+
    req.body.mensual_emp_dias_quincena+","+req.body.mensual_extra+","+req.body.mensual_valorExtra+
    ","+req.body.mensual_comisiones+","+req.body.mensual_otrosIngresos+","+req.body.mensual_bono372001_extra+
    ","+req.body.mensual_ISR+","+req.body.mensual_banco+","+req.body.mensual_empresa+
    ","+req.body.mensual_judicial+")";

  console.log(sql267);
  mysqlConnection.query(sql267, (err3, res3, fields) => {
    if (!err3) {
      res.json({
        status: 'Empleado actualizado con exito'
      });
      console.log("success");
    }
    else
      console.log(err3);
  });
});

//update nmensual

router.post('/api/nomina/nquincenal/update', (req, res) => {
  console.log("Request: ");
  console.log(req.body);
  
  let sql267 ="";
  
    sql267 = "CALL modNquincenal("+req.body.nmensual_id+","+req.body.mensual_emp_dias+
    ","+req.body.emp_id+")";


  console.log(sql267);
  mysqlConnection.query(sql267, (err3, res3, fields) => {
    if (!err3) {
      res.json({
        status: 'Empleado actualizado con exito'
      });
      console.log("success");
    }
    else
      console.log(err3);
  });
});

//update nmensual

router.post('/api/nomina/nmensual/update2', (req, res) => {
  console.log("Request: ");
  console.log(req.body);
  
  let sql2674 ="";
  
  sql2674 = "CALL updateNomina()";


  console.log(sql2674);
  mysqlConnection.query(sql2674, (err3, res3, fields) => {
    if (!err3) {
      res.json({
        status: 'Nomina actualizado con exito'
      });
      console.log("success");
    }
    else
      console.log(err3);
  });
});





module.exports = router;
