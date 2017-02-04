import { combineReducers } from 'redux';
import PostsReducer from '../modules/posts/reducer';

export default combineReducers({
  posts: PostsReducer
});
