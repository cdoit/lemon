﻿"use strict";

const path = require("path");
const express = require("express");
const port = 3000;
const app = express();
const connection = null;

app.use(express.static(path.join(__dirname, "public")));

module.exports = {
  app,
  connection
};

require("./config/express.js")(app);
require("./config/routedmarket.js")(app);

listen();

function listen() {
  app.listen(port);
  console.log("" + port);
}
