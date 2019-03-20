const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const worksapceSchema = new Schema(
  {
    name: String,
    address: String,
    zipcode: Number,
    city: String,
    phone: String,
    email: String,
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

const Workspace = mongoose.model("Workspace", worksapceSchema);
module.exports = Workspace;
