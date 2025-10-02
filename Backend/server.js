const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");

// parse requests of content-type - application/json
app.use(express.json());
app.get("/", (req, res) => {
res.json({ message: "Welcome to my SQL DB application." });
});

let userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

let accommodationRoutes = require('./routes/accommodationRoutes');
app.use('/api/accommodation', accommodationRoutes);

let bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/booking', bookingRoutes);

let reviewRoutes = require('./routes/reviewRoutes');
app.use('/api/review', reviewRoutes);

let activitiesRoutes = require('./routes/activitiesRoutes');
app.use('/api/activities', activitiesRoutes);

let contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);


// set port, listen for requests
const PORT = process.env.PORT || 8081;


app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});