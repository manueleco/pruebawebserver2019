const express = require('express');
const router = express.Router();

const mysqlConnection = require('../../DB/db');




//show all products
router.get('/api/naciones/nacionalidad',(req, res) => {
  var sql = 'SELECT LOWER(GENTILICIO_NAC) AS nacionalidad FROM nacionalidad'
  //var sql = "CALL getEmployees()";
  mysqlConnection.query(sql, (err, results, fields) => {
    if(!err) 
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



//add new product
/*
app.post('/api/products',(req, res) => {
let data = {product_name: req.body.product_name, product_price: req.body.product_price};
let sql = "INSERT INTO product SET ?";
let query = conn.query(sql, data,(err, results) => {
  if(err) throw err;
  res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
});
});*/

//update product
/*
app.put('/api/products/:id',(req, res) => {
let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
let query = conn.query(sql, (err, results) => {
  if(err) throw err;
  res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
});
});*/

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


/*
  var sql = "SELECT CONCAT(e.emp_nombre,' ', e.emp_apellido) AS nombre_completo, LOWER(n.GENTILICIO_NAC) AS nacionalidad, TIMESTAMPDIFF(YEAR, e.emp_fechanac, CURDATE()) AS edad, eci.ec_nombre AS estado_civil, e.emp_direccion, e.emp_telefono, pro.prof_name AS profesion, e.emp_identificacion, e.emp_email, e.emp_nit, e.emp_iniciolabor, pl.puesto_name AS puesto, e.emp_igssid, e.emp_irtraid, e.emp_contactoemergencia, el.estado_nombre AS estadolaboral FROM empleados e INNER JOIN nacionalidad n ON e.emp_nacionalidad=n.idnacionalidad INNER JOIN estadocivil eci ON e.emp_estadocivil=eci.ec_id INNER JOIN puestoslaborales pl ON e.emp_puesto=pl.puesto_id INNER JOIN profesiones pro ON e.emp_profesion=pro.prof_id INNER JOIN estadolaboral el ON e.emp_estado=el.estado_id;";

*/