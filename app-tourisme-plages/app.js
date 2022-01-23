const express = require("express");
const connection = require("./models/database");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");

const plagesRoute = require("./routes/plages-routes");

const app = new express();
app.use(bodyParser.json());

/* Routes */
app.use("/api/plages", plagesRoute);

app.use(express.static("./public"));

app.use((req, res, next) => {
  return next(new HttpError("Impossible de trouver ce chemin.", 404));
});
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "Une erreur inconnue est survenue!" });
});

try {
  connection.connect();
  app.listen(6000);
} catch (err) {
  console.log(err);
}
