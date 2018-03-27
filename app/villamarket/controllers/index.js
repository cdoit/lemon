var express = require("express");
var login = require("./login");
var constant = require("./constant");
var router = express.Router();
var uuid = require("node-uuid");
const db = require("../../db/");

//户型列表
router.get("/", login.checkin, function(req, res, next) {});

module.exports = router;
