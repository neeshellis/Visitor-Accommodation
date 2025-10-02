const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)

router.get('/', (req, res) => {
Controllers.contactController.getContact(res);
})

// matches POST requests sent to /api/bookings/create
router.post('/create', (req, res) => {
Controllers.contactController.createContact(req.body,
res)
})

router.put('/:id', (req, res) => {
Controllers.contactController.updateContact(req, res)
})

router.delete('/:id', (req, res) => {
Controllers.contactController.deleteContact(req, res)
})

Controllers.initialController.storeContact()
module.exports = router;