const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema(
  {
    cityName: String,
    continent: String,

  }
);

const City = mongoose.model("User", citySchema);
module.exports = City;
