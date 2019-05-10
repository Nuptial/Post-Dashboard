import {
  combineReducers
} from 'redux';
import modalReducer from './reducer_modal';
import postReducer from './reducer_posts';

const rootReducer = combineReducers({
  modal: modalReducer,
  posts: postReducer
});

export default rootReducer;