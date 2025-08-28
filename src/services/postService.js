import {
  countAllPosts,
  createPost,
  findAllPosts,
  updatePostById,
} from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
  const caption = createPostObject.caption?.trim();
  const image = createPostObject.image;
  //const user = createPostObject.user; add later

  const post = await createPost(caption, image);
  return post;
};

export const getAllPostsService = async (offset, limit) => {
  const posts = await findAllPosts(offset, limit);

  //calculate total pages
  const totalDocuments = await countAllPosts();
  const totalPages = Math.ceil(totalDocuments / limit);

  return { posts, totalPages, totalDocuments };
};

export const deletePostService = async (id) => {
  const response = await deletePostById(id);
  return response;
};

export const updatePostService = async (id, updateObject) => {
  const response = await updatePostById(id, updateObject);
  return response;
};
