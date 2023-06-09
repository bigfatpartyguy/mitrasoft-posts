import {
  REQUEST_POST_COMMENTS,
  POST_COMMENTS_SUCCESS,
  POST_COMMENTS_FAILED,
  FETCH_POST_COMMENTS,
  RESET_POST_COMMENTS,
} from './actionTypes';

export const requestPostComments = (postId) => ({
  type: REQUEST_POST_COMMENTS,
  payload: postId,
});

export const postCommentsSuccess = (data) => ({
  type: POST_COMMENTS_SUCCESS,
  payload: data,
});

export const postCommentsFailed = (errorData) => ({
  type: POST_COMMENTS_FAILED,
  payload: errorData,
});

export const resetPostComments = () => ({
  type: RESET_POST_COMMENTS,
});

export const fetchPostComments = (postId) => ({
  type: FETCH_POST_COMMENTS,
  payload: {postId},
});
