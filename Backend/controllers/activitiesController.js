"use strict";

// import { updateUser } from "./accommodationController";
// import { createUser } from "./userController";

const { where } = require("sequelize");
const Models = require("../models");
// finds all users in DB, then sends array as response

const getActivities = (res) => {
Models.Activities.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createActivities = (data, res) => {
Models.Activities.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}

const updateActivities = (req, res) => {
// updates the user matching the ID from the param using JSON data POSTed in request body
console.log(req.body)
Models.Activities.update(req.body, { where: {id: req.params.id}})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

const deleteActivities = (req, res) => {
// deletes the user matching the ID from the param
Models.Activities.destroy({ where: {id: req.params.id}})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

module.exports = {
getActivities, createActivities, updateActivities, deleteActivities
}



