// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 8000;

require("./app/routes")(app, {});

//converting to JSON from url encoded
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("We are live on " + port);
});
