import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validare: {
        validator: function (emailvalue) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailvalue);
        },
        message: "Please enter a valid email address",
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function modifyPassword(next) {
  // modify the password before saving the user
  const user = this; // object with the plain password

  const SALT = bcrypt.genSaltSync(9);

  // hash the password
  const hashedPassword = bcrypt.hashSync(user.password, SALT);

  // replace the plain password with the hashed password
  user.password = hashedPassword;
  next();
});

const user = mongoose.model("User", userSchema);

export default user;
