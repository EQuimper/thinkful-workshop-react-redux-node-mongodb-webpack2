import Post from './model';

/**
* Create
*/
export const createPost = async (req, res) => {
  const { title, text } = req.body;

  if (!title) {
    res.status(401).json({ error: true, message: 'Title required' });
  } else if (title.length < 6) {
    res.status(401).json({ error: true, message: 'Title must be 5 characters long' });
  }

  if (!text) {
    res.status(401).json({ error: true, message: 'Text required' });
  } else if (text.length < 31) {
    res.status(401).json({ error: true, message: 'Text must be 30 characters long' });
  }

  const newPost = new Post({ title, text });

  try {
    res.status(200).json({ error: false, post: await newPost.save() });
  } catch (e) {
    res.status(e.status).json({ error: true, message: e.message });
  }
};

/**
* GET ALL
*/
export const fetchPosts = async (req, res) => {
  try {
    res.status(200).json({ error: false, posts: await Post.find({}) });
  } catch (e) {
    res.status(e.status).json({ error: true, message: e.message });
  }
};

/**
* GET BY ID
*/
export const fetchPostById = async (req, res) => {
  try {
    res.status(200).json({ error: false, post: await Post.findById(req.params.id) });
  } catch (e) {
    res.status(e.status).json({ error: true, message: e.message });
  }
};
