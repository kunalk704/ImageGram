import {
  createPostService,
  deletePostService,
  getAllPostsService,
} from "../services/postService.js";

export async function createPost(req, res) {
  console.log(req.file); // contains file info
  // call the service layer function
  if (!req.file || !req.file.location) {
    return res.status(400).json({
      success: false,
      message: "Image file is required",
    });
  }

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

// /api/v1/posts?limit=10&offset=20
export async function getAllPosts(req, res) {
  try {
    const limit = req.query.limit || 10; // default limit is 10
    const offset = req.query.offset || 0; // default offset is 0

    const paginatedPosts = await getAllPostsService(offset, limit);

    return res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      data: paginatedPosts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function deletePost(req, res) {
  try {
    const postId = req.params.id;
    const response = await deletePostService(postId);
    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: response,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function updatePost(req, res) {
  try {
    const updateObject = req.body;
    if (req.file) {
      updateObject.image = req.file.location; // s3 file url
    }
    const response = await updatePostService(req.params.id, updateObject);
    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: response,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
