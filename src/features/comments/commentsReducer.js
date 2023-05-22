import {
  REQUEST_POST_COMMENTS,
  POST_COMMENTS_SUCCESS,
  POST_COMMENTS_FAILED,
} from './actionTypes';

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POST_COMMENTS:
      return {
        status: 'loading',
        data: null,
        error: null,
      };
    case POST_COMMENTS_SUCCESS:
      return {
        status: 'success',
        data: action.payload,
        error: null,
      };
    case POST_COMMENTS_FAILED:
      return {
        status: 'error',
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
