const express = require("express");
const router = express.Router();

const placesController = require("../controllers/places-controller");

// Read
router.get("/", placesController.getPlaces);
router.get("/:id", placesController.getPlaceById);

// Create
router.post("/", placesController.createPlace);

// Update
router.patch("/:id", placesController.updatePlace);

// Delete
router.delete("/:id", placesController.deletePlace);

module.exports = router;