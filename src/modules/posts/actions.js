/** @flow */
import { PostApi } from '../../helpers/api';

const postApi = new PostApi();

export const FETCH_ALL_POSTS: string = 'FETCH_ALL_POSTS';
export const FETCH_SINGLE_POST: string = 'FETCH_SINGLE_POST';
export const FETCH_SINGLE_POST_ERROR: string = 'FETCH_SINGLE_POST_ERROR';
export const SELECTED_POST: string = 'SELECTED_POST';

/**
 * FETCH ALL POSTS
 */
const fetchAllPosts = (posts: Object) => ({
  type: FETCH_ALL_POSTS,
  posts
});

export const getFetchAllPosts = () => async (dispatch: Function) => {
  const { posts } = await postApi.fetchPosts();
  return dispatch(fetchAllPosts(posts));
};

/**
 * FETCH SINGLE POST WITH HIS ID
 */

const fetchPost = (post: Object) => ({
  type: FETCH_SINGLE_POST,
  post
});

const fetchPostError = () => ({
  type: FETCH_SINGLE_POST_ERROR
});

export const getFetchSinglePost = (id: string) => async (dispatch: Function) => {
  const { post } = await postApi.fetchSinglePost(id);
  if (!post) {
    return dispatch(fetchPostError());
  }
  return dispatch(fetchPost(post));
};

/**
 * SELECTED ID FOR RESELECT
 */
export const selectPost = (id: string) => ({
  type: SELECTED_POST,
  id
});
