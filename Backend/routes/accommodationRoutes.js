const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)

router.get('/', (req, res) => {
Controllers.accommodationController.getAccommodation(res);
})

// matches POST requests sent to /api/reviews/create
router.post('/create', (req, res) => {
Controllers.accommodationController.createAccommodation(req.body,
res)
})

router.put('/:id', (req, res) => {
Controllers.accommodationController.updateAccommodation(req, res)
})

router.delete('/:id', (req, res) => {
Controllers.accommodationController.deleteAccommodation(req, res)
})

Controllers.initialController.storeAccommodation()

module.exports = router;