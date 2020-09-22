import { takeLatest, all, call, put } from 'redux-saga/effects';

import toursService from '../../fetch-api/services/tours.service';

import {
  fetchToursByStatusSuccess,
  fetchToursByStatusFailure
} from './tours.actions';

import actionTypes from './tours.action-types';
const {
  FETCH_ACTIVE_TOURS_START,
  FETCH_DRAFT_TOURS_START,
  FETCH_PENDING_TOURS_START,
  FETCH_REJECTED_TOURS_START,
  FETCH_UNPUBLISHED_TOURS_START
} = actionTypes;

// fetching toursData //

function* fetchToursByStatus(action) {
  const { payload } = action;

  try {
    const data = yield toursService.getToursByStatus(payload);
    yield put(fetchToursByStatusSuccess(JSON.parse(data), payload));
  } catch (error) {
    console.error(error);
    yield put(fetchToursByStatusFailure(error, payload));
  }
}

function* onFetchActiveTours() {
  yield takeLatest(FETCH_ACTIVE_TOURS_START, fetchToursByStatus);
}

function* onFetchDraftTours() {
  yield takeLatest(FETCH_DRAFT_TOURS_START, fetchToursByStatus);
}

function* onFetchPendingTours() {
  yield takeLatest(FETCH_PENDING_TOURS_START, fetchToursByStatus);
}

function* onFetchRejectedTours() {
  yield takeLatest(FETCH_REJECTED_TOURS_START, fetchToursByStatus);
}

function* onFetchUnpublishedTours() {
  yield takeLatest(FETCH_UNPUBLISHED_TOURS_START, fetchToursByStatus);
}

// All tours sagas watchers (e.g. 'onFetch...') should be put here //

export function* toursSagas() {
  yield all([
    call(onFetchActiveTours),
    call(onFetchDraftTours),
    call(onFetchPendingTours),
    call(onFetchRejectedTours),
    call(onFetchUnpublishedTours)
  ]);
}
