const connection = require("../models/database");
const HttpError = require("../models/http-error");

// GET
const getPlages = async (req, res, next) => {
  connection.query(
    `SELECT * FROM plages`,
    function (error, results, fields) {
      if (error)
        return next(
          new HttpError(
            "La récupération des plages a échoué, Veuillez réessayer plus tard.",
            500
          )
        );

      res.json({ plage: results[0] });
    }
  );
};

const getPlageById = async (req, res, next) => {
  const plageId = req.params.id;
  connection.query(
    `SELECT * FROM places WHERE id = ${plageId}`,
    function (error, results, fields) {
      if (error)
        return next(
          new HttpError(
            "La récupération du lieu a échoué, Veuillez réessayer plus tard.",
            500
          )
        );

      res.json({ plage: results[0] });
    }
  );
};

// CREATE
const createPlage = async (req, res, next) => {
  let plage = {};
  plage.nom = req.body.nom;
  plage.description = req.body.description;
  plage.lat = req.body.lat;
  plage.lng = req.body.lng;
  plage.image = req.body.image;
  connection.query(
    `INSERT INTO plages ( nom, description, lat, lng, image) VALUES("${plage.nom}", "${plage.description}", "${plage.lat}", "${plage.lng}", "${plage.image}") `,
    function (error, results, fields) {
      if (error)
        return next(
          new HttpError(
            "L'ajout d'un nouvel utilisateur a échoué, veuillez réessayer plus tard.",
            500
          )
        );
      res.json({ message: "Utilisateur ajouté avec succès.", plage });
    }
  );
};

// UPDATE
const updatePlage = async (req, res, next) => {
  let plage;
  const plageId = req.params.id;
  connection.query(
    `SELECT * FROM places WHERE id = ${plageId}`,
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
    plage = value;
    if (req.body.nom) {
      plage.nom = req.body.nom;
    }
    if (req.body.description) {
      plage.description = req.body.description;
    }
    if (req.body.lat) {
      plage.lat = req.body.lat;
    }
    if (req.body.lng) {
      plage.lng = req.body.lng;
    }
    if (req.body.lng) {
      plage.image = req.body.image;
    }

    connection.query(
      `UPDATE users SET nom = "${plage.nom}", description = "${plage.description}", lat = "${plage.lat}", lng = "${plage.lng}", image = "${plage.image}" WHERE id = ${plageId}`,
      function (error, results, fields) {
        if (error)
          return next(
            new HttpError(
              "La mise à jour de l'utilisateur a échoué, veuillez réessayer plus tard.",
              500
            )
          );
        res.json({ message: "Utilisateur mis à jour avec succès.", plage });
      }
    );
  };
};

// DELETE
const deletePlage = async (req, res, next) => {
  const plageId = req.params.id;
  connection.query(
    `DELETE FROM users WHERE id = ${plageId}`,
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

exports.getPlages = getPlages;
exports.getPlageById = getPlageById;
exports.createPlage = createPlage;
exports.updatePlage = updatePlage;
exports.deletePlage = deletePlage;
