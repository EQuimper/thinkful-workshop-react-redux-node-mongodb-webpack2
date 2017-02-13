/** @flow */
import { createSelector } from 'reselect';

/**
 * GET THE ARRAY OF POSTS IN THE STATE
 */
const postsSelector = (state: Object) => state.posts.posts;

/**
 * GET THE ID FOR MAKE THE SELECTION
 */
const selectPostId = (state: Object) => state.posts.selectPostId;

/**
 * DO THE LOGIC ABOUT FILTER THE POSTS ARRAY AND RETURN AN ARRAY WITH 1 ITEM
 */
const getPost = (posts: Array<Object>, id: string): Array<Object> =>
  posts.filter(p => p._id === id);

export default createSelector(
  postsSelector,
  selectPostId,
	getPost
);
