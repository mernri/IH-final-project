const express = require("express");
const mongoose = require("mongoose");
const tribeRoutes = express.Router();

const Tribe = require("../models/Tribe");
const User = require("../models/User");
const Workspace = require("../models/Workspace"); 

// // POST route => to create a new tribe
// tribeRoutes.post("/tribes", (req, res, next) => {
//   // Check if user logged-in
//   if (!req.user) {
//     res.status(401).json({
//       message: "You need to be logged-in to join a tribe"
//     });
//     return;
//   }
//   // If user logged in, he can join a workspace
//   Tribe.create({
//     workspace: req.workspace._id, 
//     users: [],
//   })
//     .then(response => {
//       res.json(response);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });