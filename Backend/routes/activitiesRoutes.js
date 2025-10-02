const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)

router.get('/', (req, res) => {
Controllers.activitiesController.getActivities(res);
})

// matches POST requests sent to /api/bookings/create
router.post('/create', (req, res) => {
Controllers.activitiesController.createActivities(req.body,
res)
})

router.put('/:id', (req, res) => {
Controllers.activitiesController.updateActivities(req, res)
})

router.delete('/:id', (req, res) => {
Controllers.activitiesController.deleteActivities(req, res)
})

Controllers.initialController.storeActivities()
module.exports = router;