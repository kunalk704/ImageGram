import { createPostService } from "../services/postService.js";

export async function createPost(req, res) {
  console.log(req.file); // contains file info
  // call the service layer function

  const post = createPostService({
    caption: req.body.caption,
    image: req.file.location, // s3 file url
    //user: req.user._id, // add later
  });

  return res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: post,
  });
}

export async function getAllPosts(req, res) {
  return res.status(501).json({
    success: false,
    message: "Not implemented yet",
  });
}
