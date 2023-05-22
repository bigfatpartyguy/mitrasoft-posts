import {all} from 'redux-saga/effects';
import {watchFetchAllPostsAsync} from './posts';
import {watchFetchPostCommentsASync} from './comments';

export default function* rootSaga() {
  yield all([watchFetchAllPostsAsync(), watchFetchPostCommentsASync()]);
}
