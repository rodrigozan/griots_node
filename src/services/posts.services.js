import Post from '../models/posts.model.js';


export const createPost = async (postData) => {
  try {
    const post = new Post(postData);
    return await post.save();
  } catch (error) {
    throw error;
  }
};


export const getAllPosts = async () => {
  try {
    return await Post.find().sort({ createdAt: -1 });
  } catch (error) {
    throw error;
  }
};
