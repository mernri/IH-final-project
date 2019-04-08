const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./User");
const Workspace = require("./Workspace");
const Tribe = mongoose.model("Tribe", tribeSchema);

const tribeSchema = new Schema(
  {
    workspace: { type: Schema.Types.ObjectId, ref: Workspace },
    users: [{ type: Schema.Types.ObjectId, ref: User }]
  }
);

module.exports = Tribe;
