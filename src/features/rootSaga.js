import {all} from 'redux-saga/effects';
import {watchFetchPostsAsync} from './posts';
import {watchFetchPostCommentsASync} from './comments';
import {watchFetchUserAsync} from './user';

export default function* rootSaga() {
  yield all([
    watchFetchPostsAsync(),
    watchFetchPostCommentsASync(),
    watchFetchUserAsync(),
  ]);
}
