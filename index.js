/*'use strict'
//Conexión con base de datos
const MONGOOSE = require('mongoose');
const APP = require('./app');
const PORT = process.env.PORT || 3999;

MONGOOSE.set('useFindAndModify', false);
MONGOOSE.Promise = global.Promise;
MONGOOSE.connect('mongodb://localhost:27017/appastra', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.clear();
        console.log("Conexión establecida con la base de datos");
        APP.listen(PORT, () => {
            console.log("El servidor se ha conectado a la base de datos, escuchando en el puerto",PORT);
        })
    })
    .catch((error) => {
        console.clear();
        console.log(error);
    });*/


const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
