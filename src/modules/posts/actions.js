import { PostApi } from '../../helpers/api';

const postApi = new PostApi();

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';

/**
 * FETCH ALL POSTS
 */
const fetchAllPosts = posts => ({
  type: FETCH_ALL_POSTS,
  posts
});

export const getFetchAllPosts = () => async dispatch => {
  const { posts } = await postApi.fetchPosts();
  return dispatch(fetchAllPosts(posts));
};

/**
 * FETCH SINGLE POST WITH HIS ID
 */
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const FETCH_SINGLE_POST_ERROR = 'FETCH_SINGLE_POST_ERROR';

const fetchPost = post => ({
  type: FETCH_SINGLE_POST,
  post
});

const fetchPostError = () => ({
  type: FETCH_SINGLE_POST_ERROR
});

export const getFetchSinglePost = id => async dispatch => {
  const { post } = await postApi.fetchSinglePost(id);
  if (!post) {
    return dispatch(fetchPostError());
  }
  return dispatch(fetchPost(post));
};

/**
 * SELECTED ID FOR RESELECT
 */
export const SELECTED_POST = 'SELECTED_POST';

export const selectPost = id => ({
  type: SELECTED_POST,
  id
});
