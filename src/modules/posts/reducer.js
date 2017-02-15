/** @flow */
import {
  FETCH_ALL_POSTS,
  FETCH_SINGLE_POST,
  FETCH_SINGLE_POST_ERROR,
  SELECTED_POST
} from './actionsTypes';
import { type Post } from '../../flow/types';

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

type Action = {
  type: 'FETCH_ALL_POSTS' | 'FETCH_SINGLE_POST' | 'FETCH_SINGLE_POST_ERROR' | 'SELECTED_POST',
  posts: Array<Post>,
  post: Post,
  id: string
}

export default (state: State = INITIAL_STATE, action: Action): Object => {
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
