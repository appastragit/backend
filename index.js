'use strict'

const app = require('./main');
const port = process.env.PORT || 3999;
const sequelize = require("./database");

console.clear();

try {
    sequelize.authenticate()
        .then(() => {
            app.listen(port, () => {
                console.log('El servidor creo una conexión en el puerto', port);
            })
        })
        .catch(err => {
            console.error('No se pudo establecer la conexión');
            console.error('detalles del error:', err)
    })
} catch (error) {
    console.error('Ha ocurrido un error inesperado');
    console.error('detalles del error:', error);
}

module.exports = sequelize