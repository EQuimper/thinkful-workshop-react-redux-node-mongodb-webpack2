/** @flow */
/**
 * Create a selector who take the posts from the state and return an array
 * of one post. This is for remove the server request when we have
 * already all the info in the state.
 */
import { createSelector } from 'reselect';
import type { Post } from '../../types/Data';

/**
 * GET THE ARRAY OF POSTS IN THE STATE
 */
const postsSelector = (state: Object): Array<Post> => state.posts.posts;

/**
 * GET THE ID FOR MAKE THE SELECTION
 */
const selectPostId = (state: Object): string => state.posts.selectPostId;

/**
 * DO THE LOGIC ABOUT FILTER THE POSTS ARRAY AND RETURN AN ARRAY WITH 1 ITEM
 */
const getPost = (posts: Array<Post>, id: string): Array<Object> =>
  posts.filter(p => p._id === id);

export default createSelector(
  postsSelector,
  selectPostId,
	getPost
);
