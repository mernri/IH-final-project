// routes/project-routes.js
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/User");
const Workspace = require("../models/Workspace"); 