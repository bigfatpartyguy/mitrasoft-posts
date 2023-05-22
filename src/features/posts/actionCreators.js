import {
  REQUEST_POSTS,
  POSTS_SUCCESS,
  POSTS_FAILED,
  FETCH_POSTS,
} from './actionTypes';

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const postsSuccess = (data) => ({
  type: POSTS_SUCCESS,
  payload: data,
});

export const postsFailed = (error) => ({
  type: POSTS_FAILED,
  payload: error,
});

export const fetchPosts = (userId) => ({
  type: FETCH_POSTS,
  payload: userId,
});
