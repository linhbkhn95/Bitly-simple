import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { SubmissionError } from "redux-form";
import { apiBase } from "../../client/config";
import {
  ADD_LINK_FAILURE,
  ADD_LINK_SUCCESS,
  ADD_LINK_REQUEST,
  GET_TOP_LINK_REQUEST,
  GET_TOP_LINK_SUCCESS
} from "../constants/typeAction";
// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* addLinkSaga() {
  console.log("addlinkApi===>");

  yield takeEvery(ADD_LINK_REQUEST, addLink);
}
export function* getTopLinkSaga() {
  console.log("getTopLinkSaga===xx>");
  yield takeEvery(GET_TOP_LINK_REQUEST, getTopLink);
}
// function that makes the api request and returns a Promise for response
function addlinkApi(meta) {
  console.log("addlinkApissâđaádâdâđaxx>", meta);

  return axios.post(
    `${apiBase}/generate`,
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
function fetchApiTopLink() {
  return axios.get(`${apiBase}/getTopLink`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  });
}
// worker saga: makes the api call when watcher saga sees the action
function* addLink({ meta, callback }) {
  try {
    console.log("addlinkApi===xx>", meta);

    const response = yield call(addlinkApi, meta);
    const data = response.data;
    console.log("addlinkApi===data>", data);

    if (data.code === 0) {
      callback();
      yield put({ type: ADD_LINK_SUCCESS, data: data.data });
    } else {
      yield put({ type: ADD_LINK_FAILURE, error: data.message });
    }
    // dispatch a success action to the store with the new dog
  } catch (error) {
    console.log("===addLink>error", error);

    // dispatch a failure action to the store with the error
    yield put({ type: ADD_LINK_FAILURE, error: error.message });
    //callback(error)
  }
}
function* getTopLink() {
  try {
    console.log("===addLingetTopLinkk>error");
    const response = yield call(fetchApiTopLink);
    const data = response.data;

    if (data.code === 0) {
      yield put({ type: GET_TOP_LINK_SUCCESS, data: data.data });
    } else {
      yield put({ type: ADD_LINK_FAILURE, error: data.message });
    }
    // dispatch a success action to the store with the new dog
  } catch (error) {
    console.log("===getTopLink>error", error);

    // dispatch a failure action to the store with the error
    yield put({ type: ADD_LINK_FAILURE, error: error.message });
    //callback(error)
  }
}
