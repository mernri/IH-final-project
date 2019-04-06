// routes/workspacesRoutes.js
const express = require("express");
const mongoose = require("mongoose");
const cityRoutes = express.Router();

const City = require("../models/City");