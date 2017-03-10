import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts.js';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
