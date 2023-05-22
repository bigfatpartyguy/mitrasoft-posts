import {takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {
  requestPostComments,
  postCommentsSuccess,
  postCommentsFailed,
} from './actionCreators';
import {FETCH_POST_COMMENTS} from './actionTypes';
import {asyncDelay} from '../helpers';

function* fetchPostCommentsAsync({payload: {postId}}) {
  try {
    yield put(requestPostComments());
    yield asyncDelay(500);
    const data = yield call(() =>
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => {
          console.log(response);
          return response.data;
        })
        .catch((error) => {
          throw new Error(error);
        })
    );
    yield put(postCommentsSuccess(data));
  } catch (error) {
    yield put(postCommentsFailed(error));
  }
}

function* watchFetchPostCommentsASync() {
  yield takeEvery(FETCH_POST_COMMENTS, fetchPostCommentsAsync);
}

export {watchFetchPostCommentsASync};
