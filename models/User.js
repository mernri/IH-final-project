const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Tribe = require("./Tribe");


const userSchema = new Schema(
  {
    password: String,
    email: String,
    tribe: { type: Schema.Types.ObjectId, ref: "Tribe" },
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


const User = mongoose.model("User", userSchema);
module.exports = User;
