import {REQUEST_USER, USER_SUCCESS, USER_FAILED} from './actionTypes';

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return {
        status: 'loading',
        data: null,
        error: null,
      };
    case USER_SUCCESS:
      return {
        status: 'success',
        data: action.payload,
        error: null,
      };
    case USER_FAILED:
      return {
        status: 'error',
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
