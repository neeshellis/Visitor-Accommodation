"use strict";

//import { updateUser } from "./accommodationController";
//import { createUser } from "./userController";

const { where } = require("sequelize");
const Models = require("../models");
// finds all users in DB, then sends array as response

const getBooking = (res) => {
Models.Booking.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createBooking = (data, res) => {
Models.Booking.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}

const updateBooking = (req, res) => {
// updates the user matching the ID from the param using JSON data POSTed in request body
console.log(req.body)
Models.Booking.update(req.body, { where: {id: req.params.id}})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

const deleteBooking = (req, res) => {
// deletes the user matching the ID from the param
Models.Booking.destroy({ where: {id: req.params.id}})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

module.exports = {
getBooking, createBooking, updateBooking, deleteBooking
}



