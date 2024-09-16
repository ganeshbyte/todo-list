import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { signin, signup } from "./controller/auth.controller.js";
import { findAllUsers } from "./controller/user.controller.js";
import { authMiddleware } from "./middleware/auth.middleware.js";
import { userMiddleware } from "./middleware/user.middleware.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.post("/users", authMiddleware, findAllUsers);

app.post("/signin", userMiddleware, signin);

app.post("/signup", userMiddleware, signup);

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Internal Server Error",
  });
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect to db...");

    app.listen(PORT, () => {
      console.log("Server has started at port", PORT);
    });
  } catch (error) {
    console.log("db connection error...", error);
  }
};

startServer();
