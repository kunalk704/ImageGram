import Post from "../schema/post.js";

export const createPost = async (caption, image, user) => {
  try {
    const newPost = await Post.create({ caption, image, user });
    // const newPost = new Post({ caption, image, user });
    // await newPost.save();
    return newPost;
  } catch (error) {
    console.error(error);
  }
};

export const findAllPosts = async (offset, limit) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    return posts;
  } catch (error) {
    console.error(error);
  }
};

export const countAllPosts = async () => {
  try {
    const count = await Post.countDocuments();
    return count;
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

export const updatePostById = async (id, updateObject) => {
  try {
    const post = await Post.findByIdAndUpdate(id, updateObject, { new: true });
    return post;
  } catch (error) {
    console.error(error);
  }
};
