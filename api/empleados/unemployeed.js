const express = require('express');
const router = express.Router();

const mysqlConnection = require('../../DB/db');




//show all products
router.get('/api/exempleados', (req, res) => {
  console.log("Request: ");
  var sql = 'SELECT * FROM empleadosFull WHERE estado=3';
  mysqlConnection.query(sql, (err, results, fields) => {
    if (!err)
      res.json(results);
    else
      console.log(err);
  });
});


//update empleado

router.put('/api/exempleados/update', (req, res) => {
  console.log(req.body);
  let sql3 = "";

  sql3 = "UPDATE empleados SET emp_nombre='" + req.body.firstName +
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
    "', emp_finlabor=" + req.body.finlabor + " ,emp_estado=" + req.body.estadolaboral + " WHERE emp_id=" +
    req.body.empleadoId;
  console.log(sql3);
  mysqlConnection.query(sql3, (err4, res3, fields) => {
    if (!err4) {
      res.json({
        status: 'Empleado actualizado con exito'
      });
      console.log("success");
    }
    else
      console.log(err4);
  });
});


module.exports = router;

