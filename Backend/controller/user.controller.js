import { User } from "../models/user.model.js";

export const findAllUsers = async (req, res) => {
  try {
    const users = await User.find();
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const userExist = async (username) => {
  const user = await User.findOne({ username: username });
  if (user) {
    return true;
  }
  return false;
};
