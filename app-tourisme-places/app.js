const express = require("express");
const connection = require("./models/database");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");

const usersRoute = require("./routes/places-routes");

const app = new express();
app.use(bodyParser.json());

/* Routes */
app.use("/api/places", usersRoute);

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
  app.listen(5000,"192.168.43.44",() => {console.log("server started")});
} catch (err) {
}
