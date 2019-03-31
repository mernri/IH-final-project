// routes/workspacesRoutes.js
const express = require("express");
const mongoose = require("mongoose");
const workspaceRoutes = express.Router();

const Workspace = require("../models/Workspace.js");

// POST route => to add a new workspace
workspaceRoutes.post("/workspaces/add", (req, res, next) => {
  // Check if user logged-in
  if (!req.user) {
    res.status(401).json({
      message: "You need to be logged-in to create a project"
    });
    return;
  }
  // If user logged in, he can add a workspace
  Workspace.create({
    name: req.body.name,
    address: req.body.address,
    zipcode: req.body.zipcode,
    description: req.body.description,
    city: req.body.city,
    phone: req.body.phone,
    pictures: req.body.pictures,
    monthlyPrice: req.body.monthlyPrice,
    dailyPrice: req.body.dailyPrice,
    annualPrice: req.body.annualPrice

  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get all the workspaces
workspaceRoutes.get("/workspaces", (req, res, next) => {
    Workspace.find()
    .then(allTheWorkspaces => {
      res.json(allTheWorkspaces);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get a specific workspace/detailed view
workspaceRoutes.get("/workspace/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Workspace.findById(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get all the workspaces for a specific city
workspaceRoutes.get("/workspaces/:city", (req, res, next) => {
  let city = req.params.city
  Workspace.find({'city.value' : city})
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route => to update a specific workspace
workspaceRoutes.put("/workspace/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Workspace.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Workspace with ${req.params.id} is updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE route => to delete a specific workspace
workspaceRoutes.delete("/workspace/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Workspace.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Workspace with ${req.params.id} is removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = workspaceRoutes;
