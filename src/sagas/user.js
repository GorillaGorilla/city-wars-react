import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { RECEIVE_USER, REGISTER, LOGIN, USER_REGISTERED, USER_LOGGED_IN } from '../actions/constants';
import { login, register } from '../api/user-api';

// this is for sending data... right now we just want to tirgger an action on a socket event

export function* postRegistration(action) {
  let response;
  try {
    response = yield call(register, action.payload);
    yield put.resolve({ type: USER_REGISTERED });
    yield put(push('/login'));
  } catch (e) {
    console.log(`This is the error while registering: ${e}`);
  }
  
}

export function* postLogin(action) {
  let response;
  try {
    response = yield call(login, action.payload);
    const { data } = response;
    yield put.resolve({ type: USER_LOGGED_IN, payload: data });
    yield put(push('/game'));
  } catch (e) {
    console.log(`This is the error while logging in: ${e}`);
  }
}

export function* registerUser() {
  yield takeEvery(REGISTER, postRegistration);
}

export function* loginUser() {
  yield takeEvery(LOGIN, postLogin);
}
