"use strict";
const { where } = require("sequelize");
const Models = require("../models");

// finds all users in DB, then sends array as response
const getUser = (res) => {
Models.User.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createUser = (data, res) => {
Models.User.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}

const updateUser = (req, res) => {
// updates the user matching the ID from the param using JSON data POSTed in request body
console.log(req.body)
Models.User.update(req.body, { where: {id: req.params.id}})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message});
});
};

const deleteUser = (req, res) => {
// deletes the user matching the ID from the param
Models.User.destroy({ where: {id: req.params.id}})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

module.exports = {
getUser, createUser, updateUser, deleteUser
}





