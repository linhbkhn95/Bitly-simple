import { takeLatest,takeEvery, call, put } from "redux-saga/effects";
 import axios from "axios";

 // watcher saga: watches for actions dispatched to the store, starts worker saga
 export function* addLinkSaga() {
   yield takeEvery("ADD_LINK_REQUEST", addLink);
 }

 // function that makes the api request and returns a Promise for response
 function addlinkApi() {
  //  return axios({
  //    method: "GET",
  //    url: "http(s)://5af675a576035f0014f2bcc3.mockapi.io/api/"
  //  });
   return{
      data:"ok"
   }
 }

 // worker saga: makes the api call when watcher saga sees the action
 function* addLink() {
   try {
     const response = yield call(addlinkApi);
     const data = response.data;

     // dispatch a success action to the store with the new dog
     yield put({ type: "ADD_LINK_SUCCESS", data });

   } catch (error) {
     // dispatch a failure action to the store with the error
     yield put({ type: "ADD_LINK_FAILURE", error });
   }
 }