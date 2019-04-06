const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema(
  {
    cityName: String,
    Continent: String,

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
