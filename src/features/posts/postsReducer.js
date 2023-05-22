import {
  REQUEST_ALL_POSTS,
  ALL_POSTS_SUCCESS,
  ALL_POSTS_FAILED,
} from './actionTypes';

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ALL_POSTS:
      return {
        status: 'loading',
        data: null,
        error: null,
      };
    case ALL_POSTS_SUCCESS:
      return {
        status: 'success',
        data: action.payload,
        error: null,
      };
    case ALL_POSTS_FAILED:
      return {
        status: 'error',
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
