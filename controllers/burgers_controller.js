var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {
  burger.create(["text", "devoured"],[req.body.text,req.body.devoured], function () {
      res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
  var condition = req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function () {
    res.redirect("/");
  });
});
