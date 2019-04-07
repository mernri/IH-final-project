const express = require("express");
const mongoose = require("mongoose");
const tribeRoutes = express.Router();

const Tribe = require("../models/Tribe");
const User = require("../models/User");
const Workspace = require("../models/Workspace");

// POST route => to create a new tribe.
tribeRoutes.post("/tribe/add", (req, res, next) => {
  const workspace = req.body.workspace;

  // Check if the workspace exist
  if (!workspace) {
    res.status(401).json({
      message: "No workspace, no tribe !"
    });
    return;
  }
  Tribe.create({
    workspace: workspace._id,
    users: [],
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// DEBUT - CA NE VA PAS DU TOUT DU TOUT 

// GET route => to retrieve a specific tribe
tribeRoutes.get("/tribe/:id", (req, res, next) => {
  Tribe.findById(req.params.id)
    .then(theTribe => {
      res.json(theTribe);
    })
    .catch(err => {
      res.json(err);
    });
});

//  // GET route => to get a specific tribe detailed view
//  tribeRoutes.get("/tribes/:id", (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   // our projects have array of user ids and
//   // we can use .populate() method to get the whole user objects
//   Tribe.findById(req.params.id)
//     .populate("tasks")
//     .then(response => {
//       res.status(200).json(response);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// FIN - CA NE VA PAS DU TOUT DU TOUT  



module.exports = tribeRoutes;
