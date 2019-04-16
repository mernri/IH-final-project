const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workspaceSchema = new Schema(
  {
    name: String,
    address: String,
    zipcode: String,
    description: String,
    city: String,
    phone: String,
    pictures: [],
    monthlyPrice: Number,
    latitude: Number,
    longitude: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Workspace = mongoose.model("Workspace", workspaceSchema);
module.exports = Workspace;
