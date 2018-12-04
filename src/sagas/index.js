// import 'regenerator-runtime/runtime';

import {
    addLinkSaga
} from './linkSaga';

// Root sagas
// Single entry point to start all sagas at once
export default function* rootSaga() {
  yield [
    addLinkSaga
  ];
}