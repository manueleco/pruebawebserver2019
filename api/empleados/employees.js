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
router.get('/api/empleados', (req, res) => {
  var sql = 'SELECT * FROM empleadosFull WHERE estado=1'
  //var sql = "CALL getEmployees()";
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

router.post('/api/empleados/agregar', (req, res) => {
  console.log("Request: ");
  console.log(req.body);
  var sql1 = "CALL addEmpleado('" + req.body.firstName + "','" + 
  req.body.lastName + "'," + req.body.nacionalidad + "," + req.body.paisnac + 
  "," + req.body.birthday + "," + req.body.gender + "," + req.body.ecivil + ",'" + 
  req.body.address + "','" + req.body.celular + "','" + req.body.telefono + "','" + 
  req.body.profesion + "','" + req.body.identificacion + "','" + req.body.email + "','" + 
  req.body.nit + "'," + req.body.work_date + ",'" + req.body.puesto + "'," + req.body.dept + ",'" + 
  req.body.igss + "','" + req.body.irtra + "','" + req.body.nombrece + "','" + 
  req.body.apellidoce + "','" + req.body.celularce + "','" + req.body.relacionce + "','" + 
  req.body.anotacion1 + "','" + req.body.anotacion2 + "','"+req.body.tipo_sangre+"')";
  // var sql1= "INSERT INTO dummy (dummytext) VALUES('"+req.body.firstName+"')";
  //var sql1= "CALL dummySP('"+req.body.firstName+"')";
  mysqlConnection.query(sql1, (err1, results1, fields) => {
    if (!err1) {
      res.json({
        status: 'Empleado agregado con exito'
      });
      console.log("success");
    }
    else
      console.log(err1);
  });
});



//update empleado

router.put('/api/empleados/update', (req, res) => {
  console.log("Request: ");
  console.log(req.body);
  let sql2 ="";
  
    sql2 = "UPDATE empleados SET emp_nombre='" + req.body.firstName + 
  "', emp_apellido='" + req.body.lastName + "', emp_nacionalidad=" + req.body.nacionalidad + ", emp_lugarNac=" + req.body.paisnac + 
  ", emp_fechanac=" + req.body.birthday + ", emp_gender=" + req.body.gender + ", emp_estadocivil=" + 
  req.body.ecivil + ", emp_direccion='" + req.body.address + "', emp_telefono='" + req.body.celular + 
  "', emp_telefono2='" + req.body.telefono + "', emp_profesion='" + req.body.profesion + 
  "', emp_identificacion='" + req.body.identificacion + "', emp_email='" + req.body.email + 
  "', emp_nit='" + req.body.nit + "', emp_iniciolabor=" + req.body.work_date + 
  ", emp_puesto='" + req.body.puesto + "', emp_departamento=" + req.body.dept + 
  ", emp_igssid='" + req.body.igss + "', emp_irtraid='" + req.body.irtra + 
  "', emp_emergencyname='" + req.body.nombrece + "', emp_emergencylastname='" + req.body.apellidoce + 
  "', emp_emergencycel='" + req.body.celularce + "', emp_emergencyrel='" + req.body.relacionce + 
  "', emp_anotacion1='" + req.body.anotacion1 + "', emp_anotacion2='" + req.body.anotacion2 + 
  "', emp_finlabor="+req.body.finlabor+",emp_estado="+req.body.estadolaboral+", emp_tipo_sangre='"+
  req.body.tipo_sangre+ "' WHERE emp_id=" + 
  req.body.empleadoId;

  console.log(sql2);
  mysqlConnection.query(sql2, (err3, res3, fields) => {
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

/*let data = {
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  nacionalidad: req.body.nacionalidad,
  paisnac: req.body.paisnac,
  birthday: req.body.birthday,
  gender: req.body.gender,
  ecivil: req.body.ecivil,
  address: req.body.address,
  celular: req.body.celular,
  telefono: req.body.telefono,
  profesion: req.body.profesion,
  identificacion: req.body.identificacion,
  email: req.body.email,
  nit: req.body.nit,
  work_date: req.body.work_date,
  puesto: req.body.puesto,
  igss: req.body.igss,
  irtra: req.body.irtra,
  nombrece: req.body.nombrece,
  apellidoce: req.body.apellidoce,
  celularce: req.body.celularce,
  relacionce: req.body.relacionce,
  anotacion1: req.body.anotacion1,
  anotacion2: req.body.anotacion2
}*//*
res.json({
  firstName: req.body.firstName
}
);*/


/*
var sql1 = 'CALL addEmpleado("' + req.body.firstName + '","' + req.body.lastName + '",' + req.body.nacionalidad + ',' + req.body.paisnac + ',' + req.body.birthday + ',' + req.body.gender + ',' + req.body.ecivil + ',"' + req.body.address + '","' + req.body.celular + '","' + req.body.telefono + '","' + req.body.profesion + '","' + req.body.identificacion + '","' + req.body.email + '","' + req.body.nit + '",' + req.body.work_date + ',"' + req.body.puesto + '","' + req.body.igss + '","' + req.body.irtra + '","' + req.body.nombrece + '","' + req.body.apellidoce + '","' + req.body.celularce + '","' + req.body.relacionce + '","' + req.body.anotacion1 + '","' + req.body.anotacion2 + '")';
*/