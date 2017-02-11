import {
  FETCH_ALL_POSTS,
  FETCH_SINGLE_POST,
  SELECTED_POST
} from './actions';

const INITIAL_STATE = {
  posts: [],
  post: null,
  selectPostId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case FETCH_SINGLE_POST:
      return {
        ...state,
        post: action.post
      };
    case SELECTED_POST:
      return {
        ...state,
        selectPostId: action.id
      };
    default:
      return state;
  }
};
