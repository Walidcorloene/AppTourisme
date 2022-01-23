const express = require("express");
const router = express.Router();

const plagesController = require("../controllers/plages-controller");

// Read
router.get("/", plagesController.getPlages);
router.get("/:id", plagesController.getPlageById);

// Create
router.post("/", plagesController.createPlage);

// Update
router.patch("/:id", plagesController.updatePlage);

// Delete
router.delete("/:id", plagesController.updatePlage);

module.exports = router;