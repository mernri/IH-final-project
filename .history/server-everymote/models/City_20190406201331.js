const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema(
  {
    cityName: String,
    continent: String,
    picture: String

  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const City = mongoose.model("City", citySchema);
module.exports = City;
