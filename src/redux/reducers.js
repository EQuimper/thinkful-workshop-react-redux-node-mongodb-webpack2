/** @flow */
import { combineReducers } from 'redux';
import PostsReducer from '../modules/posts/reducer';

const reducers = {
  posts: PostsReducer,
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);
