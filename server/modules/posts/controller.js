/** @flow */
import Post from './model';

/**
* Create
*/
export const createPost = async (req: express$Request, res: express$Response) => {
  const { title, text } : { title: string, text: string } = req.body;

  if (!title) {
    return res.status(401).json({ error: true, message: 'Title required' });
  } else if (typeof title !== 'string') {
    return res.status(401).json({ error: true, message: 'Title must be a string' });
  } else if (title.length < 6) {
    return res.status(401).json({ error: true, message: 'Title must be 5 characters long' });
  }

  if (!text) {
    return res.status(401).json({ error: true, message: 'Text required' });
  } else if (typeof text !== 'string') {
    return res.status(401).json({ error: true, message: 'Text must be a string' });
  } else if (text.length < 31) {
    return res.status(401).json({ error: true, message: 'Text must be 30 characters long' });
  }

  const newPost: Post = new Post({ title, text });

  try {
    return res.status(200).json({ error: false, post: await newPost.save() });
  } catch (e) {
    return res.status(500).json({ error: true, message: 'Error Server' });
  }
};

/**
* GET ALL
*/
export const fetchPosts = async (req: express$Request, res: express$Response) => {
  try {
    return res.status(200).json({ error: false, posts: await Post.find({}) });
  } catch (e) {
    return res.status(500).json({ error: false, message: 'Error server' });
  }
};

/**
* GET BY ID
*/
export const fetchPostById = async (req: express$Request, res: express$Response) => {
  try {
    return res.status(200).json({ error: false, post: await Post.findById(req.params.id) });
  } catch (e) {
    return res.status(500).json({ error: false, message: 'Error server' });
  }
};
