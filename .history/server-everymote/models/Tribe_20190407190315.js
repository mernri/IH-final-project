const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workspace = require("./Workspace.js"); 
const User = require("./User.js"); 


const tribeSchema = new Schema(
  {
    workspace: { type: Schema.Types.ObjectId, refs: "Workspace" } ,
    users: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Tribe = mongoose.model("Tribe", tribeSchema);
module.exports = Tribe;
