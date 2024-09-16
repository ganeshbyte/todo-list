import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: [8, "password must contain 8 characters."],
  },
});

const User = mongoose.model("User", userSchema);

export { User };
