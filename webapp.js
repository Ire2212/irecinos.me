const express = require('express');
const aplicacion = express();
const direcciones = require('./routes/direcciones');

aplicacion.set('view engine', 'ejs');
aplicacion.use('/static',express.static('assets'));

aplicacion.use('/', direcciones);
aplicacion.use('/login', direcciones);

aplicacion.listen(8080, function(){console.log("Servidor iniciado")});