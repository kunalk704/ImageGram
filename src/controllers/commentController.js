import {
  createCommentService,
  findCommentByIdService,
} from "../services/commentService.js";

export async function createComment(req, res) {
  try {
    const { content, onModel, commentableId } = req.body;
    const response = await createCommentService(
      content,
      req.user._id,
      onModel,
      commentableId
    );
    return res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    console.error(error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}

export async function getCommentById(req, res) {
  try {
    const commentId = req.params.id;
    const response = await findCommentByIdService(commentId);
    return res.status(200).json({
      success: true,
      message: "Comment fetched successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    console.error(error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}
