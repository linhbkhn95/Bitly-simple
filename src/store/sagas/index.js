// import 'regenerator-runtime/runtime';
import { put, takeLatest, all } from 'redux-saga/effects';

import {
    addLinkSaga,
    getTopLinkSaga
} from './linkSaga';

// Root sagas
// Single entry point to start all sagas at once
export default function* rootSaga() {
   yield [
    getTopLinkSaga(),
    addLinkSaga()
  ];
}