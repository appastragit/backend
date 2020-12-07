'use strict'

const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

try {
    const morgan = require('morgan');
    app.use(morgan('dev'));
} catch (error) {
    console.log('Morgan no se pudo iniciar correctamente')
}

// const categorias_routes = require('./routes/categorias');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// app.use('/mundopanda', categorias_routes);

module.exports = app;