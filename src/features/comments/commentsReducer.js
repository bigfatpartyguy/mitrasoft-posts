import {
  REQUEST_POST_COMMENTS,
  POST_COMMENTS_SUCCESS,
  POST_COMMENTS_FAILED,
  RESET_POST_COMMENTS,
} from './actionTypes';

const initialState = {
  status: 'idle',
  postId: null,
  data: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POST_COMMENTS:
      return {
        status: 'loading',
        postId: action.payload,
        data: null,
        error: null,
      };
    case POST_COMMENTS_SUCCESS: {
      const {data, postId} = action.payload;
      return {
        status: 'success',
        postId,
        data,
        error: null,
      };
    }
    case POST_COMMENTS_FAILED: {
      const {error, postId} = action.payload;
      return {
        status: 'error',
        postId: postId,
        data: null,
        error: error,
      };
    }
    case RESET_POST_COMMENTS:
      return initialState;
    default:
      return state;
  }
};
