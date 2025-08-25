// here all the pst related routes will be defined
// we look at the remaining url part after /posts
import express from "express";
import { createPost, getAllPosts } from "../controllers/postController.js";
import { s3uploader } from "../config/multerConfig.js";

const router = express.Router(); // router object to modularize routes

router.post("/", s3uploader.single("image"), createPost);

router.get("/", getAllPosts);

export default router;
