const mongoose = require("mongoose");
const express = require("express");
const tribeRoutes = express.Router();

const User = require("../models/User");
const Tribe = require("../models/Tribe");
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
        .exec()
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

// GET route => to retrieve the users of a specfic tribe
tribeRoutes.get("/tribe/:id", (req, res, next) => {
  Tribe.findById(req.params.id)
    .populate("users")
    .exec()
    .then(theUsers => {
      res.json(theUsers);
      console.log(theUsers);
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE route => to delete a specific task
router.delete("/tasks/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Task.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Task with ${req.params.id} is removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route => to add a user in a tribe
// manque: vérifier que le userid existe 
// devrait: retourner un ok message plutôt que la tribe
tribeRoutes.put("/workspace/:id/tribe/:userid", (req, res, next) => {
  const workspaceId = req.params.id;
  const userId = req.params.userid;
  Workspace.findById(workspaceId)
    .then(workspaceId => {
      Tribe.findOneAndUpdate(
        { workspace: workspaceId },
        { $push: { users: userId } }
      )
        .then(() => {
          res.json("Ok");
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
