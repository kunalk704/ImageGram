import { createUser } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

export const signupUserService = async (user) => {
  try {
    const newUser = await createUser(user);
    return newUser;
  } catch (error) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      throw {
        status: 400,
        message: "user with same email or username already exists",
      };
    }
    throw error;
  }
};

export const signinUserService = async (userDetails) => {
  try {
    //1. Check if there is a valid registered user with the provided email
    const user = await findUserByEmail(userDetails.email);
    if (!user) {
      throw { status: 404, message: "User not found" };
    }
    //2. Compare the password
    const isPasswordValid = bcrypt.compareSync(
      userDetails.password,
      user.password
    );

    if (!isPasswordValid) {
      throw { status: 401, message: "Invalid credentials" };
    }

    const token = generateJwtToken({
      email: user.email,
      _id: user._id,
      username: user.username,
    });
    return token;
  } catch (error) {
    throw error;
  }
};

export const checkIfUserExists = async (email) => {
  try {
    const user = await findUserByEmail(email);
    return user;
  } catch (error) {
    throw error;
  }
};
