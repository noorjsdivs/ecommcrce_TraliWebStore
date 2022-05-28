import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: true,
});

const User = mongoose.model("user", userSchema);
module.exports = User;
