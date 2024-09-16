export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res
        .status(400)
        .json({ message: "Authorization header is missing" });
    }

    // Verify if the token format is correct (Bearer <token>)
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(400).json({ message: "Token is missing or malformed" });
    }
    const userToken = jwt.verify(token, jwtSecret);
    next();
  } catch (error) {
    res.satus(401).json({
      message: "unauthorized",
    });
  }
};
