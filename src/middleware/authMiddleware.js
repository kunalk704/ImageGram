import { checkIfUserExists } from "../services/userService.js";
import { verifyJwt } from "../utils/jwt.js";

export const isAuthenticated = async (req, res, next) => {
  // check if jwt token is present in headers
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }
  // verify the token
  try {
    const response = verifyJwt(token);

    const doesUserExist = await checkIfUserExists(response.email);

    if (!doesUserExist) {
      return res.status(404).json({
        success: false,
        message: "Invalid token - user does not exist",
      });
    }

    req.user = response;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
