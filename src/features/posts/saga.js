import {takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {requestPosts, postsSuccess, postsFailed} from './actionCreators';
import {FETCH_POSTS} from './actionTypes';
import {asyncDelay} from '../helpers';

function* fetchPostsAsync({payload: userId}) {
  console.log(userId);
  const url = `https://jsonplaceholder.typicode.com/${
    userId ? `users/${userId}/posts` : 'posts'
  }`;
  console.log(url);
  try {
    yield put(requestPosts());
    yield asyncDelay(500);
    const data = yield call(() =>
      axios
        .get(url)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          throw new Error(error);
        })
    );
    yield put(postsSuccess(data));
  } catch (error) {
    yield put(postsFailed(error));
  }
}

function* watchFetchPostsAsync() {
  yield takeEvery(FETCH_POSTS, fetchPostsAsync);
}

export {watchFetchPostsAsync};
