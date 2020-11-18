'use strict'

//Carga de librerías
const EXPRESS = require('express');
const BODYPARSER = require('body-parser');

//Ejecución servidor Express
const APP=EXPRESS();

//Rutas
const USER_ROUTES = require('./routes/user');

//Middlewares
APP.use(BODYPARSER.urlencoded({extended: false}));
APP.use(BODYPARSER.json());
//CORS
APP.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Redefinición de rutas
APP.use('/appastra', USER_ROUTES);

//Exportado del módulo
module.exports = APP;