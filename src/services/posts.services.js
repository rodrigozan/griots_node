import Post from '../models/posts.models.js';

const postsServices = {

  createPost: async (postData) => {
    try {
      const post = new Post(postData);
      return await post.save();
    } catch (error) {
      throw error;
    }
  },


  getAllPosts: async () => {
    try {
      return await Post.find();
    } catch (error) {
      throw error;
    }
  },

  getPostById: async (id) => {
    try {
      return await Post.findById(id);
    } catch (error) {
      throw error;
    }
  },

  async updatePost(id, data) {
    try {
      const post = await Post.findByIdAndUpdate(id, data, { new: true });
      console.log("Return....", post)
      return post;
    } catch (error) {
      console.log(error.message)      
      throw error.message
    }
  }

}

export default postsServices;
