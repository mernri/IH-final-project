const express = require("express");
const mongoose = require("mongoose");
const tribeRoutes = express.Router();

const Tribe = require("../models/Tribe");
const User = require("../models/User");
const Workspace = require("../models/Workspace");

// POST route => to create a new tribe
tribeRoutes.post("/tribe/add", (req, res, next) => {

        // console.log('I AM THE res', res)
        console.log('I AM THE req', req.body)

    // Check if user logged-in
// if (!req.workspace) {
//     res.status(401).json({
//       message: "No workspace, no tribe !"
//     });
//     return;
//   }
  
//   Tribe.create({
//     workspace: req.workspace._id,
//   })
//     .then(response => {
//       res.json(response);
//     })
//     .catch(err => {
//       res.json(err);
//     });
});

module.exports = tribeRoutes;
