/** @flow */
import { createSelector } from 'reselect';

const postsSelector = state => state.posts.posts;

const selectPostId = state => state.posts.selectPostId;

const getPost = (posts: Array<Object>, id: string): Array<Object> =>
  posts.filter(p => p._id === id);

export default createSelector(
  postsSelector,
  selectPostId,
	getPost
);
