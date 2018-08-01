/* PACKAGES DE BASE */
const express = require("express");
const app = express();
require("dotenv").config();
/* IMPORT DE MONGOOSE */
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/forest-app",
  { useNewUrlParser: true }
);
/* CONFIGURATION DE FOREST ET LIAISON A MONGOOSE */
app.use(
  require("forest-express-mongoose").init({
    modelsDir: __dirname + "/models", // Your models directory.
    envSecret: process.env.FOREST_ENV_SECRET,
    authSecret: process.env.FOREST_AUTH_SECRET,
    mongoose: require("mongoose") // The database connection.
  })
);
/* ROUTE DE BASE */
app.get("/", (req, res) => {
  res.send("It's on its way!");
});
/* OUVERTURE DU SERVEUR */
app.listen(3000, () => {
  console.log("server is up bro! 🤪");
});
