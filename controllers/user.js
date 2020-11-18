'use strict'

const USER = require('../models/user');
var validator = require('validator');

var controller = {
    test: function(req, res){
        console.log("El metodo test funciona correctamente :-)");
        return res.status(200).send({
            message: "El metodo test funciona perfect :-)"
        })
    },
    update: function (req, res) {
        
    },
    list: function (req,res) {
        var body = req.body;
        var params = body.params;
        var json = JSON.parse(params);
        var validate_username = validator.isEmpty(json.username);

        if (!validate_username){
            USER.find({username: json.username}).exec((err, users) => {
                if(err || users==""){
                    console.log("[ERR] - listar - there are no users or there was an error during the request to the server");
                    return res.status(404).send({
                        message: "La petición no ha arrojado ningun usuario",
                        code: 404,
                        status: "error"
                    });
                }
                console.log("[OK] - getUsers - users successfully obtained");
                console.log (users);
                return res.status(200).send({
                    message: "se lista el usuario indicado",
                    code: 200,
                    users: users,
                    status: "success"
                });
            });
        } else {
            console.log('[ERR] - listarOpinion - uno o varios de los datos introducidos no son validos');
            return res.status(404).send({
                message: "Los datos recibidos no son validos",
                code: 404,
                status: "error"
            })
        }
    },
    new: function (req,res) {
        var body = req.body;
        var params = body.params;
        
        var user = new USER();
        var json = JSON.parse(params);
        
        var validate_username = validator.isEmpty(json.username);
        var validate_password = validator.isEmpty(json.password); 
        var validate_name = validator.isEmpty(json.name);
        var validate_surname = validator.isEmpty(json.surname);
        var validate_street = validator.isEmpty(json.street);
        var validate_location = validator.isEmpty(json.location);
        var validate_province = validator.isEmpty(json.province);
        var validate_country = validator.isEmpty(json.country);

        user.username = json.username;
        user.password = json.password;
        user.name = json.name;
        user.surname = json.surname;
        user.street = json.street;
        user.location = json.location;
        user.province = json.province;
		user.country = json.country;
        
        console.log (user);
        if(!validate_username && !validate_password && !validate_name && !validate_surname && !validate_street && !validate_location && !validate_province && !validate_country){
            console.log('[OK] - newUser - datos validados correctamente');
            user.save((err, userStored) => {
                if(err || !userStored){
                    console.log('[ERR] - newUser - err || !userStored');
                    return res.status(404).send({
                        code: 404,
                        status: "error",
                        message: "El usuario no se ha podido registrar correctamente"
                    });
                }
                console.log('[OK] - newUser - usuario registrado correctamente');
                return res.status(200).send({
                    message: "Usuario registrado correctamente",
                    user: userStored,
                    code: 200,
                    status: "success"
                })
            });
        } else {
            console.log('[ERR] - newUser - uno o varios de los datos introducidos no son validos');
            return res.status(404).send({
                message: "Los datos recibidos no son validos",
                code: 404,
                status: "error"
            })
        }
    }
}
//prueba commit
module.exports = controller