import User from "../schema/user.js";

export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const findAallUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
