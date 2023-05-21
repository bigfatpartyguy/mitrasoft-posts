import {LOAD_ALL_POSTS} from './actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case LOAD_ALL_POSTS:
      return action.payload;
    default:
      return state;
  }
};
