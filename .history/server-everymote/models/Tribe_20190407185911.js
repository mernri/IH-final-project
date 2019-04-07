const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Workspace = require("./Workspace"); // 👈

const tribeSchema = new Schema(
  {
    workspace: { type: Schema.Types.ObjectId, ref: "Workspace" } 
    email: String,
    
    fullname: String,
    picture: String,
    occupation: String,
    city: String,
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
