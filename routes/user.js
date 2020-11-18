'use strict'

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const USERCONTROLLER = require ('../controllers/user')

ROUTER.get('/user/test', USERCONTROLLER.test)
ROUTER.get('/user/new', USERCONTROLLER.new)
ROUTER.get('/user/list', USERCONTROLLER.list)


module.exports = ROUTER