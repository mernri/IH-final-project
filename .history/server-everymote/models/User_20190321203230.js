const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    password: String,
    email: String,
    
    username: String,
    picture: String,
    occupation: String,
    city: String,
    // interests: {
    //   productManagement: boolean,
    //   programming: boolean,
    //   travel: boolean
    // }
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
