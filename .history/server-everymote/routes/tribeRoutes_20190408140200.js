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
    users: []
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to retrieve a specific tribe
tribeRoutes.get("/workspace/:id/tribe", (req, res, next) => {
  Workspace.findById(req.params.id)
    .then(workspaceId => {
      Tribe.findOne({ workspace: workspaceId })
        .populate("users")
        .then(theTribe => {
          res.json(theTribe);
        })
        .catch(err => {
          res.json(err);
        });
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route => to add a user in a tribe
tribeRoutes.put("/workspace/:id/tribe/:userid", (req, res, next) => {
  const workspaceId = req.params.id;
  const userId = req.params.userid;
  Workspace.findById(workspaceId)
    .then(workspaceId => {
      Tribe.findOneAndUpdate(
        { workspace: workspaceId },
        { $push: { users: userId } }
      )
        .then(theTribe => {
          res.json(theTribe);
        })
        .catch(err => {
          res.json(err);
        });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = tribeRoutes;
