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

//show all descuentos actuales
router.get('/api/finiquitos', (req, res) => {
  var sqlFiniquitos = 'SELECT * FROM finiquitos'
  //var sql = "CALL getEmployees()";
  mysqlConnection.query(sqlFiniquitos, (err, results, fields) => {
    if (!err)
      res.json(results);
    else
      console.log(err);
  });
});

//show all descuentos
router.get('/api/finiquitos/all', (req, res) => {
    var sqlDescuentos = 'SELECT * FROM finiquitoall'
    
    mysqlConnection.query(sqlDescuentos, (err, results, fields) => {
      if (!err)
        res.json(results);
      else
        console.log(err);
    });
  });


//new descuento

router.post('/api/finiquitos/new', (req, res) => {
    console.log("Request: ");
    console.log(req.body);
    var sql1 = "CALL newFiniquito(" + req.body.empleadoId + "," + req.body.fromdate_new + 
    "," + req.body.todate_new +")";
    
    mysqlConnection.query(sql1, (err1, results1, fields) => {
      if (!err1) {
        res.json({
          status: 'Finiquito agregado con exito'
        });
        console.log("success");
      }
      else
        console.log(err1);
    });
    
  });

//modify descuento

router.post('/api/finiquitos/modify', (req, res) => {
  console.log("Request: ");
  console.log(req.body);


  var sql1 = "CALL  updateDescuento("+req.body.descuento_id+","+
  req.body.fromdate_new+","+req.body.descuento_tipo+",'"+req.body.descripcion+"',"+
  req.body.descuento_cantidad+","+req.body.descuento_pagos+","+req.body.descuento_mensual+")";
  
  mysqlConnection.query(sql1, (err1, results1, fields) => {
    if (!err1) {
      res.json({
        status: 'Finiquito modificado con exito'
      });
      console.log("success");
    }
    else
      console.log(err1);
  });
  
});


//saldar descuento
//modify descuento

router.post('/api/descuentos/saldar', (req, res) => {
    console.log("Request: ");
    console.log(req.body);
    var sql1 = "CALL saldarDescuento(" + req.body.empleadoId + "," + req.body.salario_new + "," + req.body.fromdate_new +")";
    
    mysqlConnection.query(sql1, (err1, results1, fields) => {
      if (!err1) {
        res.json({
          status: 'Descuento modificado con exito'
        });
        console.log("success");
      }
      else
        console.log(err1);
    });
    
  });


module.exports = router;

