import Post from "../schema/post.js";

export const createPost = async (caption, image, user) => {
  try {
    const newPost = await post.create({ caption, image, user });
    // const newPost = new Post({ caption, image, user });
    // await newPost.save();
    return newPost;
  } catch (error) {
    console.error(error);
  }
};

export const findAllPosts = async () => {
  try {
    const posts = await Post.find().populate("user");
    return posts;
  } catch (error) {
    console.error(error);
  }
};

export const findPostById = async (id) => {
  try {
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    console.error(error);
  }
};

export const deletePostById = async (id) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  } catch (error) {
    console.error(error);
  }
};
