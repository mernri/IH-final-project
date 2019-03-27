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
    Monthlyprice: Number,
    DailyPrice: Number,
    AnnualPrice: Number,

    // amenities: {
    //     highSpeedWifi: boolean,
    //     printers: boolean
    // }

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
