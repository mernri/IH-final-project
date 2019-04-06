const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema(
  {
    password: String,
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

const City = mongoose.model("User", citySchema);
module.exports = City;
