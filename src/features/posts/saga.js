import {takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {
  requestAllPosts,
  allPostsSuccess,
  allPostsFailed,
} from './actionCreators';
import {FETCH_ALL_POSTS} from './actionTypes';
import {asyncDelay} from '../helpers';

function* fetchAllPostsAsync() {
  try {
    yield put(requestAllPosts());
    yield asyncDelay(500);
    const data = yield call(() =>
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          console.log(response);
          return response.data;
        })
        .catch((error) => {
          throw new Error(error);
        })
    );
    yield put(allPostsSuccess(data));
  } catch (error) {
    yield put(allPostsFailed(error));
  }
}

function* watchFetchAllPostsAsync() {
  yield takeEvery(FETCH_ALL_POSTS, fetchAllPostsAsync);
}

export {watchFetchAllPostsAsync};
