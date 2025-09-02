import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/serverConfig.js";

export const generateJwtToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyJwt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
