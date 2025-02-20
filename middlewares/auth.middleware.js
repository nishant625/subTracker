import jwt, { decode } from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";

const authorize = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    //   console.log(token)
    }
    if (!token) {
      res.status(401).json({
        message: "Unauthorized no token",
      });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    // console.log(decoded)
    const user = await User.findById(decoded.user);
    // console.log(decoded.userId)
    if (!user) return res.status(401).json({ message: "Unauthorized wrong id" });

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      message: "unauthorized",
      error: error.message,
    });
  }
};
export default authorize;
