import postService from '../services/posts.services';

const postController = {

  createPost: async (req, res) => {
    try {
      const { content, author } = req.body;
      const postData = { content, author };
      const post = await postService.createPost(postData);
      res.status(201).json(post);
    } catch (error) {
      console.error('Erro ao criar o post:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const posts = await postService.getAllPosts();
      res.status(200).json(posts);
    } catch (error) {
      console.error('Erro ao obter os posts:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  getPostById: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await postService.getPostById(id);
      res.status(200).json(post);
    } catch (error) {
      console.error('Erro ao obter usuário por ID:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  updatePost: async (req, res) => {
    try {
      console.log(req.params.id);
      const postData = req.body;
      console.log("postData", postData)
      const data = await postService.updatePost(req.params.id, postData);
      res.status(201).json(data);
    } catch (error) {
      console.error('Erro ao atualizar o post:', error);
      res.status(500).json({ error: 'Erro interno do servidor' })   
    }
  },


}

export default postController;
