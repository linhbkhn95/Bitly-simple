import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { SubmissionError } from 'redux-form';

import {
  ADD_LINK_FAILURE,
  ADD_LINK_SUCCESS,
  ADD_LINK_REQUEST
} from "../constants/typeAction";
// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* addLinkSaga() {
  console.log("addlinkApi===>");

  yield takeEvery(ADD_LINK_REQUEST, addLink);
}

// function that makes the api request and returns a Promise for response
function addlinkApi() {
  console.log("addlinkApissâđaádâdâđaxx>");

  return axios({
    method: "GET",
    url: "http(s)://5af675a576035f0014f2bcc3.mockapi.io/api/"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* addLink({ values, callback }) {
  try {
    console.log("addlinkApi===xx>");

    const response = yield call(addlinkApi);
    const data = response.data;
    callback();
    // dispatch a success action to the store with the new dog
    yield put({ type: ADD_LINK_SUCCESS, data });
  } catch (error) {
    console.log("===addLink>error",error);
    

    // dispatch a failure action to the store with the error
    yield put({ type: ADD_LINK_FAILURE, error:error.message });
    //callback(error)
  }
}
