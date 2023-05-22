import {
  REQUEST_ALL_POSTS,
  ALL_POSTS_SUCCESS,
  ALL_POSTS_FAILED,
  FETCH_ALL_POSTS,
} from './actionTypes';

export const requestAllPosts = () => ({
  type: REQUEST_ALL_POSTS,
});

export const allPostsSuccess = (data) => ({
  type: ALL_POSTS_SUCCESS,
  payload: data,
});

export const allPostsFailed = (error) => ({
  type: ALL_POSTS_FAILED,
  payload: error,
});

export const fetchAllPosts = () => ({
  type: FETCH_ALL_POSTS,
});
