'use strict'

const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;

const USERSCHEMA = SCHEMA({
    username: String,
    password: String,
    name: String,
    surname: String,
    street: String,
    location: String,
    province: String,
    country: String,
    role: {type: String, default: "User"},
    god: { type: Boolean, default: Boolean.False },
    created_at: { type: Date, default: Date.now }
})

module.exports = MONGOOSE.model('User', USERSCHEMA);