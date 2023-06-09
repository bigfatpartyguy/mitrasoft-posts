import {REQUEST_POSTS, POSTS_SUCCESS, POSTS_FAILED} from './actionTypes';

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        status: 'loading',
        data: null,
        error: null,
      };
    case POSTS_SUCCESS:
      return {
        status: 'success',
        data: action.payload,
        error: null,
      };
    case POSTS_FAILED:
      return {
        status: 'error',
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
