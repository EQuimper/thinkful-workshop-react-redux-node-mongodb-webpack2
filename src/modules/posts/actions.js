/** @flow */
import { PostApi } from '../../helpers/api';
import type { Post } from '../../types/Data';
import type { Action } from '../../types/Action';
import type { Dispatch } from '../../types/Store';

const postApi: PostApi = new PostApi();

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const FETCH_SINGLE_POST_ERROR = 'FETCH_SINGLE_POST_ERROR';
export const SELECTED_POST = 'SELECTED_POST';

/**
 * FETCH ALL POSTS
 */
const fetchAllPosts = (posts: Array<Post>): Action => ({
  type: FETCH_ALL_POSTS,
  posts
});

export const getFetchAllPosts = () => async (dispatch: Dispatch) => {
  const { posts }: { posts: Array<Post> } = await postApi.fetchPosts();
  return dispatch(fetchAllPosts(posts));
};

/**
 * FETCH SINGLE POST WITH HIS ID
 */
const fetchPost = (post: Post): Action => ({
  type: FETCH_SINGLE_POST,
  post
});

/**
 * WHEN FETCH RECEIVE AN ERROR
 */
const fetchPostError = (): Action => ({
  type: FETCH_SINGLE_POST_ERROR
});

export const getFetchSinglePost = (id: string) => async (dispatch: Dispatch) => {
  const { post }: { post: Post } = await postApi.fetchSinglePost(id);
  if (!post) {
    return dispatch(fetchPostError());
  }
  return dispatch(fetchPost(post));
};

/**
 * SELECTED ID FOR RESELECT
 */
export const selectPost = (id: string): Action => ({
  type: SELECTED_POST,
  id
});
