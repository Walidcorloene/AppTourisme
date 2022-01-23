const connection = require("../models/database");
const HttpError = require("../models/http-error");

// GET
const getPlaces = async (req, res, next) => {
  connection.query(
    `SELECT * FROM places`,
    function (error, results, fields) {
      if (error)
        return next(
          new HttpError(
            "La récupération des plages a échoué, Veuillez réessayer plus tard.",
            500
          )
        );

      res.json( {places: results} );
    }
  );
};

const getPlaceById = async (req, res, next) => {
  const placeId = req.params.id;
  connection.query(
    `SELECT * FROM places WHERE id = ${placeId}`,
    function (error, results, fields) {
      if (error)
        return next(
          new HttpError(
            "La récupération du lieu a échoué, Veuillez réessayer plus tard.",
            500
          )
        );

      res.json({ place: results });
    }
  );
};

// CREATE
const createPlace = async (req, res, next) => {
  let place = {};
  place.nom = req.body.nom;
  place.description = req.body.description;
  place.lat = req.body.lat;
  place.lng = req.body.lng;
  place.image = req.body.image;
  connection.query(
    `INSERT INTO places ( nom, description, lat, lng, image) VALUES("${place.nom}", "${place.description}", "${place.lat}", "${place.lng}", "${place.image}") `,
    function (error, results, fields) {
      if (error)
        return next(
          new HttpError(
            "L'ajout d'un nouvel utilisateur a échoué, veuillez réessayer plus tard.",
            500
          )
        );
      res.json({ message: "Utilisateur ajouté avec succès.", place });
    }
  );
};

// UPDATE
const updatePlace = async (req, res, next) => {
  let place;
  const placeId = req.params.id;
  connection.query(
    `SELECT * FROM places WHERE id = ${placeId}`,
    function (error, results, fields) {
      if (error)
        return next(
          new HttpError("An error occured while updating user.", 500)
        );
      if (results[0]) {
        setPlace(results[0]);
      } else {
        return next(new HttpError("The user id do not exist.", 404));
      }
    }
  );
  const setPlace = (value) => {
    place = value;
    if (req.body.nom) {
      place.nom = req.body.nom;
    }
    if (req.body.description) {
      place.description = req.body.description;
    }
    if (req.body.lat) {
      place.lat = req.body.lat;
    }
    if (req.body.lng) {
      place.lng = req.body.lng;
    }
    if (req.body.image) {
      place.image = req.body.image
    }

    connection.query(
      `UPDATE users SET nom = "${place.nom}", description = "${place.description}", lat = "${place.lat}", lng = "${place.lng}", image = "${place.image}" WHERE id = ${placeId}`,
      function (error, results, fields) {
        if (error)
          return next(
            new HttpError(
              "La mise à jour de l'utilisateur a échoué, veuillez réessayer plus tard.",
              500
            )
          );
        res.json({ message: "Utilisateur mis à jour avec succès.", place });
      }
    );
  };
};

// DELETE
const deletePlace = async (req, res, next) => {
  const placeId = req.params.id;
  connection.query(
    `DELETE FROM places WHERE id = ${placeId}`,
    function (error, results, fields) {
      if (error)
        return next(
          new HttpError(
            "Une erreur s'est produite lors de la suppression de l'utilisateur.",
            500
          )
        );
      res.json({ message: "Utilisateur supprimé avec succès." });
    }
  );
};

exports.getPlaces = getPlaces;
exports.getPlaceById = getPlaceById;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
