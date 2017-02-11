import { createSelector } from 'reselect';

const postsSelector = state => state.posts.posts;

const selectPostId = state => state.posts.selectPostId;

const getPost = (posts, id) =>
  posts.filter(p => p._id === id);

export default createSelector(
  postsSelector,
  selectPostId,
	getPost
);
