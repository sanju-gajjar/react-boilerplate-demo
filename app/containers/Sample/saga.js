import { takeEvery, put } from 'redux-saga/effects';
import { CALLFUNCTION_ACTION } from 'containers/Sample/constants';
import * as actions from './actions';

export function* callFunction() {
  // Select username from store
  yield put(actions.dataAction());

  // try {
  //   // Call our request helper (see 'utils/request')
  //   const repos = yield call(request, requestURL);
  //   yield put(reposLoaded(repos, username));
  // } catch (err) {
  //   yield put(repoLoadingError(err));
  // }
}
// Individual exports for testing
export default function* sampleSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(CALLFUNCTION_ACTION, callFunction);
}
