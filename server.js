const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(express.json());

//routes
app.use(require('./api/users/login'));

app.use(require('./api/empleados/employees'));
app.use(require('./api/empleados/unemployeed'));
app.use(require('./api/empleados/puestos'));
app.use(require('./api/empleados/cemergencia'));
app.use(require('./api/empleados/departamento'));

app.use(require('./api/salaries/salaries'));


app.use(require('./api/gender/gender'));


app.use(require('./api/naciones/nacion'));
//app.use(require('./api/naciones/nacionalidad'));

app.use(require('./api/estados/estadocivil'));
app.use(require('./api/estados/estadolaboral'));

app.use(require('./api/profesiones/profesion'));

//nominas
app.use(require('./api/nominas/lastNmensual'));
app.use(require('./api/nominas/fullNominas'));
app.use(require('./api/nominas/lastBono14'));
app.use(require('./api/nominas/lastAguinaldo'));

//descuentos
app.use(require('./api/descuentos/descuentosCrud'));

//finiquitos
app.use(require('./api/finiquitos/finiquitosCrud'));

//vacaciones
app.use(require('./api/vacaciones/vacacionesCrud'));

//vacaciones
app.use(require('./api/params/params.js'));

//Server listening
app.listen(3000, () => {
  console.log('Server started on port 3000...');
});