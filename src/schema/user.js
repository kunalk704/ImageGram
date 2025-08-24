import mongoose from "mongoose";

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
const user = mongoose.model("User", userSchema);

export default user;
