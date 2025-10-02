'use strict'
const User = require('./user'); //require the model
const Accommodation = require('./accommodation')
const Booking = require('./booking');
const Review = require('./review');
const Activities = require('./activities');
const Contact = require('./contact');



async function init() {
await User.sync(); 
await Accommodation.sync()
await Booking.sync();
await Review.sync();
await Activities.sync();
await Contact.sync();
// await Review.sync();// sync the model
// also sync any extra models here
};

init();

module.exports = {
User, Accommodation, Booking, Review, Activities, Contact
};