import {
  REQUEST_USER,
  USER_SUCCESS,
  USER_FAILED,
  FETCH_USER,
} from './actionTypes';

export const requestUser = () => ({
  type: REQUEST_USER,
});

export const userSuccess = (data) => ({
  type: USER_SUCCESS,
  payload: data,
});

export const userFailed = (error) => ({
  type: USER_FAILED,
  payload: error,
});

export const fetchUser = (userId) => ({
  type: FETCH_USER,
  payload: userId,
});
