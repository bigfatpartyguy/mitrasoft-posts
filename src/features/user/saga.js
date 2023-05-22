import {takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {requestUser, userSuccess, userFailed} from './actionCreators';
import {FETCH_USER} from './actionTypes';
import {asyncDelay} from '../helpers';

function* fetchUserAsync({payload: userId}) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  try {
    yield put(requestUser());
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
    yield put(userSuccess(data));
  } catch (error) {
    yield put(userFailed(error));
  }
}

function* watchFetchUserAsync() {
  yield takeEvery(FETCH_USER, fetchUserAsync);
}

export {watchFetchUserAsync};
