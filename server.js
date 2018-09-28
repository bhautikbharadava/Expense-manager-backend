// server.js
const express = require("express");
const bodyParser = require("body-parser");

const MongoClient = require("mongodb").MongoClient;

const app = express();

const port = 8000;

//converting to JSON from url encoded
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(
  db.url,
  (err, database) => {
    if (err) return console.log(err);

    // Make sure you add the database name and not the collection name
    db = database.db("note-api");
    require("./app/routes")(app, db);
    app.listen(port, () => {
      console.log("We are live on " + port);
    });
  }
);
