/** @flow */
import { PostApi } from '../../helpers/api';
import {
  FETCH_ALL_POSTS,
  FETCH_SINGLE_POST,
  FETCH_SINGLE_POST_ERROR,
  SELECTED_POST,
  type FetchAllPostsAction,
  type FetchPostAction,
  type FetchSinglePostErrorAction,
  type SelectPostAction
} from './actionsTypes';

const postApi: PostApi = new PostApi();

/**
 * FETCH ALL POSTS
 */
const fetchAllPosts = (posts: Array<Object>): FetchAllPostsAction => ({
  type: FETCH_ALL_POSTS,
  posts
});

export const getFetchAllPosts = () => async (dispatch: () => void): Promise<void> => {
  const { posts }: { posts: Array<Object> } = await postApi.fetchPosts();
  return dispatch(fetchAllPosts(posts));
};

/**
 * FETCH SINGLE POST WITH HIS ID
 */
const fetchPost = (post: Object): FetchPostAction => ({
  type: FETCH_SINGLE_POST,
  post
});

/**
 * WHEN FETCH RECEIVE AN ERROR
 */
const fetchPostError = (): FetchSinglePostErrorAction => ({
  type: FETCH_SINGLE_POST_ERROR
});

export const getFetchSinglePost = (id: string) => async (dispatch: () => void): Promise<void> => {
  const { post }: { post: Object } = await postApi.fetchSinglePost(id);
  if (!post) {
    return dispatch(fetchPostError());
  }
  return dispatch(fetchPost(post));
};

/**
 * SELECTED ID FOR RESELECT
 */
export const selectPost = (id: string): SelectPostAction => ({
  type: SELECTED_POST,
  id
});
