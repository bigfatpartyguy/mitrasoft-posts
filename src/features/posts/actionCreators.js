import {LOAD_ALL_POSTS} from './actionTypes';

export const loadAllPosts = (data) => ({
  type: LOAD_ALL_POSTS,
  payload: data,
});
