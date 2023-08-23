import * as postService from '../services/posts.services.js';

export const createPost = async (req, res) => {
  try {
    const { content, username } = req.body;
    const postData = { content, username };
    const post = await postService.createPost(postData);
    res.status(201).json(post);
  } catch (error) {
    console.error('Erro ao criar o post:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Erro ao obter os posts:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
