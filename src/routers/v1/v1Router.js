import express from "express";
import postRouter from "./post.js";
import userRouter from "./user.js";
import commentRouter from "./comment.js";

const router = express.Router(); // router object to modularize routes

router.use("/posts", postRouter); // if in the remaining URL i.e after /api/v1, we have  /posts, use postRouter to handle it

router.use("/users", userRouter); // if in the remaining URL i.e after /api/v1, we have  /users, use userRouter to handle it

router.use("/comments", commentRouter); // if in the remaining URL i.e after /api/v1, we have  /comments, use commentRouter to handle it

export default router;
