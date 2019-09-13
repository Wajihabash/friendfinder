const express = require("express");
const path = require("path");
// Global Variables
var friends = require("../data/friends.js");
// Export
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    let newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    console.log(friends);
  });
};
