import { userSchema } from "../zod/user.schema.js";

export const userMiddleware = (req, res, next) => {
  //validate inputs
  const verifyUserSchema = userSchema.safeParse(req.body);
  if (!verifyUserSchema.success) {
    res.status(404).json({
      message: "Input Invalid",
    });
    return;
  }
  next();
};
