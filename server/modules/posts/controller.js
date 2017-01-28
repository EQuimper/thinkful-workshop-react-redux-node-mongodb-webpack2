import Post from './model';

/**
* Create
*/
export const createPost = (req, res) => {
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

  newPost
    .save()
    .then(
      post => res.status(201).json({ error: false, message: 'Post created', post }),
      err => res.status(401).json({ error: true, message: err.message })
    );
};

/**
* GET ALL
*/
export const fetchPosts = (req, res) =>
  Post.find({})
    .then(
      posts => res.status(200).json({ error: false, posts }),
      err => res.status(401).json({ error: true, message: err.message })
    );

/**
* GET BY ID
*/
export const fetchPostById = (req, res) =>
  Post.findById(req.params.id)
    .then(
      post => res.status(200).json({ error: false, post }),
      err => res.status(401).json({ error: true, message: err.message })
    );
