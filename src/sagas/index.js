import { all, fork } from 'redux-saga/effects';
import * as user from './user';

export default function* rootSaga() {
  yield all([
    ...Object.values(user),
  ].map(saga => fork(saga)));
}
