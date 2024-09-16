import { User } from "../models/user.model.js";
import { userExist } from "./user.controller.js";
const jwtSecret = process.env.JWT_SECRET;
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  const { username, password } = req.body;
  if (!(await userExist(username))) {
    const user = new User({
      username: username,
      password: password,
    });

    user.save();

    const token = jwt.sign(
      {
        username: username,
      },
      jwtSecret
    );

    res.status(200).json({
      token: token,
      message: "User Created Successfully",
    });
  } else {
    res.status(200).json({
      message: "User Already Exitst",
    });
  }
};

const signin = async (req, res) => {
  const { username, password } = req.body;

  //verify user exits or not
  if (!(await userExist(username))) {
    res.status(403).json({
      message: "User Not Found",
    });
    return;
  }

  // validate password
  const user = await User.findOne({ username: username });
  if (user.password !== password) {
    return res.status(404).json({
      message: "Password is incorrect",
    });
  }

  const token = jwt.sign(
    {
      username: username,
    },
    jwtSecret
  );

  res.status(200).json({
    token: token,
    message: "user login successfully",
  });
};

export { signin, signup };
