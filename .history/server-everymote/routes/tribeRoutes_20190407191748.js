// routes/project-routes.js
const express = require("express");
const mongoose = require("mongoose");
const tribeRoutes = express.Router();

const Tribe = require("../models/Tribe");
const User = require("../models/User");
const Workspace = require("../models/Workspace"); 

// POST route => to create a new tribe
tribeRoutes.post("/tribes", (req, res, next) => {
  // Check if user logged-in
  if (!req.user) {
    res.status(401).json({
      message: "You need to be logged-in to join a tribe"
    });
    return;
  }
  // If user logged in, he can add a project
  Project.create({
    title: req.body.title,
    description: req.body.description,
    tasks: [],
    owner: req.user._id // 👈 Quand on crée un projet, on stocke le user id de l'owner dans le projet.
                        //Avec passport, si l'utilisateur est connecté => req.user = le user. s'il n'est pas connecté => req.user est null. 
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});