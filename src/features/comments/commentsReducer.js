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
    case POST_COMMENTS_FAILED:
      return {
        status: 'error',
        postId: null,
        data: null,
        error: action.payload,
      };
    case RESET_POST_COMMENTS:
      return initialState;
    default:
      return state;
  }
};
