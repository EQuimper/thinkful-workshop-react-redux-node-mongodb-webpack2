/** @flow */
import {
  FETCH_ALL_POSTS,
  FETCH_SINGLE_POST,
  FETCH_SINGLE_POST_ERROR,
  SELECTED_POST
} from './actions';

type State = {
  posts: Array<Object>,
  post: ?Object,
  selectPostId: ?string,
  error: boolean
}

const INITIAL_STATE = {
  posts: [],
  post: null,
  selectPostId: null,
  error: false
};

export default (state: State = INITIAL_STATE, action: Object): Object => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return {
        ...state,
        error: false,
        posts: action.posts
      };
    case FETCH_SINGLE_POST:
      return {
        ...state,
        error: false,
        post: action.post
      };
    case FETCH_SINGLE_POST_ERROR:
      return {
        ...state,
        error: true
      };
    case SELECTED_POST:
      return {
        ...state,
        error: false,
        selectPostId: action.id
      };
    default:
      return state;
  }
};
