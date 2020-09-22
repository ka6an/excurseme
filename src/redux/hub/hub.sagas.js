import { takeLatest, all, call, put } from 'redux-saga/effects';

import hubService from '../../fetch-api/services/hub.service';

import { fetchHubDataSuccess, fetchHubDataFailure } from './hub.actions';

import actionTypes from './hub.action-types';

// fetching guideData //

function* fetchHubData() {
  try {
    const data = yield hubService.getHubData();
    console.log(data);
    yield put(fetchHubDataSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(fetchHubDataFailure(error));
  }
}

function* onFetchHubData() {
  yield takeLatest(actionTypes.FETCH_HUB_WEB_DATA_START, fetchHubData);
}

// all hub sagas watchers (e.g. 'onFetch...') should be put here
export function* hubSagas() {
  yield all([call(onFetchHubData)]);
}
