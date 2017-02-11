import Post from './model';

/**
* Create
*/
export const createPost = async (req, res) => {
  const { title, text } = req.body;

  if (!title) {
    return res.status(401).json({ error: true, message: 'Title required' });
  } else if (title.length < 6) {
    return res.status(401).json({ error: true, message: 'Title must be 5 characters long' });
  }

  if (!text) {
    return res.status(401).json({ error: true, message: 'Text required' });
  } else if (text.length < 31) {
    return res.status(401).json({ error: true, message: 'Text must be 30 characters long' });
  }

  const newPost = new Post({ title, text });

  try {
    return res.status(200).json({ error: false, post: await newPost.save() });
  } catch (e) {
    return res.status(500).json({ error: true, message: 'Error Server' });
  }
};

/**
* GET ALL
*/
export const fetchPosts = async (req, res) => {
  try {
    return res.status(200).json({ error: false, posts: await Post.find({}) });
  } catch (e) {
    return res.status(500).json({ error: true, message: 'Something Wrong Happen' });
  }
};

/**
* GET BY ID
*/
export const fetchPostById = async (req, res) => {
  try {
    return res.status(200).json({ error: false, post: await Post.findById(req.params.id) });
  } catch (e) {
    return res.status(500).json({ error: true, message: 'Something Wrong Happen' });
  }
};
