const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workspaceSchema = new Schema(
  {
    name: String,
    address: String,
    zipcode: Number,
    city: String,
    phone: String,
    pictures: [],
    monthlyPrice: Number,
    dailyPrice: Number,
    annualPrice: Number,
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
