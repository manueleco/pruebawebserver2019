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
router.get('/api/paramsbono', (req, res) => {
  var sqlbono = 'SELECT * FROM params_372001'
  //var sql = "CALL getEmployees()";
  mysqlConnection.query(sqlbono, (err, results, fields) => {
    if (!err)
      res.json(results);
    else
      console.log(err);
  });
});

//show all descuentos
router.get('/api/paramsigss', (req, res) => {
    var sqlDescuentos = 'SELECT * FROM params_igss'
    
    mysqlConnection.query(sqlDescuentos, (err, results, fields) => {
      if (!err)
        res.json(results);
      else
        console.log(err);
    });
  });





router.post('/api/paramsbono/mod', (req, res) => {
    console.log("Request: ");
    console.log(req.body);
    var sql1 = "CALL modifyBono(" + req.body.bonoid + "," + req.body.bono_cantidad +")";
    
    mysqlConnection.query(sql1, (err1, results1, fields) => {
      if (!err1) {
        res.json({
          status: 'Bono modificado con exito'
        });
        console.log("success");
      }
      else
        console.log(err1);
    });
    
  });

  router.post('/api/paramsigss/mod', (req, res) => {
    console.log("Request: ");
    console.log(req.body);
    var sql123 = "CALL modifyIgss(" + req.body.igssid + "," + req.body.igss_cantidad +")";
    
    mysqlConnection.query(sql123, (err1, results1, fields) => {
      if (!err1) {
        res.json({
          status: 'Igss modificado con exito'
        });
        console.log("success");
      }
      else
        console.log(err1);
    });
    
  });




module.exports = router;

