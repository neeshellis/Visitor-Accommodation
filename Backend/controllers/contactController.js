"use strict";

//import { updateUser } from "./accommodationController";
//import { createUser } from "./userController";

const { where } = require("sequelize");
const Models = require("../models");
// finds all users in DB, then sends array as response

const getContact = (res) => {
Models.Contact.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createContact = (data, res) => {
Models.Contact.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}

const updateContact = (req, res) => {
// updates the user matching the ID from the param using JSON data POSTed in request body
console.log(req.body)
Models.Contact.update(req.body, { where: {id: req.params.id}})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

const deleteContact = (req, res) => {
// deletes the user matching the ID from the param
Models.Contact.destroy({ where: {id: req.params.id}})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

module.exports = {
getContact, createContact, updateContact, deleteContact
}



