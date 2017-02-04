import { fetchPosts } from '../../helpers/api';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';

const fetchAllPosts = posts => ({
  type: FETCH_ALL_POSTS,
  posts
});

export const getFetchAllPosts = () => async dispatch => {
  const data = await fetchPosts();
  return dispatch(fetchAllPosts(data.posts));
};
