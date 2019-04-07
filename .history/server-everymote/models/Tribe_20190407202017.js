const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workspace = require("./Workspace");
const User = require("./User");

const tribeSchema = new Schema(
  {
    workspace: { type: Schema.Types.ObjectId, ref: Workspace },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }]
  }
);

const Tribe = mongoose.model("Tribe", tribeSchema);
module.exports = Tribe;
