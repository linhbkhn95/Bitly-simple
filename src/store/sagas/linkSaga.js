import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { SubmissionError } from "redux-form";

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
function addlinkApi(meta) {
  console.log("addlinkApissâđaádâdâđaxx>", meta);

  return axios.post(
    "http://192.168.9.48:4000/generate",
    {
      token: "s",
      link: meta.full_link
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    }
  );
}

// worker saga: makes the api call when watcher saga sees the action
function* addLink({ meta, callback }) {
  try {
    console.log("addlinkApi===xx>", meta);

    const response = yield call(addlinkApi, meta);
    const data = response.data;
    callback();
    // dispatch a success action to the store with the new dog
    yield put({ type: ADD_LINK_SUCCESS, data });
  } catch (error) {
    console.log("===addLink>error", error);

    // dispatch a failure action to the store with the error
    yield put({ type: ADD_LINK_FAILURE, error: error.message });
    //callback(error)
  }
}
