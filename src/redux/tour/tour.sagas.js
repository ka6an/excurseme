import { takeLatest, all, call, put } from 'redux-saga/effects';

import tourService from '../../fetch-api/services/tour.service';

import {
  createTourSuccess,
  createTourFailure,
  updateTourBaseSuccess,
  updateTourBaseFailure,
  fetchTourBaseSuccess,
  fetchTourBaseFailure,
  setTourDetailsSuccess,
  setTourDetailsFailure,
  fetchTourDetailsSuccess,
  fetchTourDetailsFailure,
  setTourPhotosSuccess,
  setTourPhotosFailure,
  fetchTourPhotosSuccess,
  fetchTourPhotosFailure,
  setTourRouteSuccess,
  setTourRouteFailure,
  fetchTourRouteSuccess,
  fetchTourRouteFailure
} from './tour.actions';

import actionTypes from './tour.action-types';

// creating tour //

function* createTour(action) {
  const { payload } = action;
  try {
    const data = yield tourService.createTour(payload);
    yield put(createTourSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(createTourFailure(error.message));
  }
}

function* onCreateTour() {
  yield takeLatest(actionTypes.CREATE_TOUR_REQUEST_START, createTour);
}

// updating tour base //

function* updateTourBase(action) {
  const {
    payload: { tourId, tourBase }
  } = action;
  try {
    const data = yield tourService.updateTourBase(tourId, tourBase);
    // 1/30/2020: data is not receiving from BE yet
    yield put(updateTourBaseSuccess('Tour updated successfully!'));
  } catch (error) {
    console.error(error);
    yield put(updateTourBaseFailure(error.message));
  }
}

function* onUpdateTourBase() {
  yield takeLatest(actionTypes.UPDATE_TOUR_BASE_REQUEST_START, updateTourBase);
}

// fetching tour base //

function* fetchTourBase(action) {
  const { payload } = action;
  try {
    const data = yield tourService.getTourBase(payload);
    yield put(fetchTourBaseSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(fetchTourBaseFailure(error.message));
  }
}

function* onFetchTourBase() {
  yield takeLatest(actionTypes.FETCH_TOUR_BASE_REQUEST_START, fetchTourBase);
}

// setting tour details //

function* setTourDetails(action) {
  const {
    payload: { tourId, tourDetails }
  } = action;
  try {
    const data = yield tourService.setTourDetails(tourId, tourDetails);
    // 1/30/2020: data is not receiving from BE yet
    yield put(setTourDetailsSuccess('Tour updated successfully!'));
  } catch (error) {
    console.error(error);
    yield put(setTourDetailsFailure(error.message));
  }
}

function* onSetTourDetails() {
  yield takeLatest(actionTypes.SET_TOUR_DETAILS_REQUEST_START, setTourDetails);
}

// fetching tour details //

function* fetchTourDetails(action) {
  const { payload } = action;
  try {
    const data = yield tourService.getTourDetails(payload);
    yield put(fetchTourDetailsSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(fetchTourDetailsFailure(error.message));
  }
}

function* onFetchTourDetails() {
  yield takeLatest(
    actionTypes.FETCH_TOUR_DETAILS_REQUEST_START,
    fetchTourDetails
  );
}

// setting tour photos //

function* setTourPhotos(action) {
  const {
    payload: { tourId, tourPhotos }
  } = action;
  try {
    const data = yield tourService.setTourPhotos(tourId, tourPhotos);
    // 1/30/2020: data is not receiving from BE yet
    yield put(setTourPhotosSuccess('Tour updated successfully!'));
  } catch (error) {
    console.error(error);
    yield put(setTourPhotosFailure(error.message));
  }
}

function* onSetTourPhotos() {
  yield takeLatest(actionTypes.SET_TOUR_PHOTOS_REQUEST_START, setTourPhotos);
}

// fetching tour photos //

function* fetchTourPhotos(action) {
  const { payload } = action;
  try {
    const data = yield tourService.getTourPhotos(payload);
    yield put(fetchTourPhotosSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(fetchTourPhotosFailure(error.message));
  }
}

function* onFetchTourPhotos() {
  yield takeLatest(
    actionTypes.FETCH_TOUR_PHOTOS_REQUEST_START,
    fetchTourPhotos
  );
}

// setting tour route //

function* setTourRoute(action) {
  const {
    payload: { tourId, tourRoute }
  } = action;
  try {
    const data = yield tourService.setTourRoute(tourId, tourRoute);
    // 1/30/2020: data is not receiving from BE yet
    yield put(setTourRouteSuccess('Tour updated successfully!'));
  } catch (error) {
    console.error(error);
    yield put(setTourRouteFailure(error.message));
  }
}

function* onSetTourRoute() {
  yield takeLatest(actionTypes.SET_TOUR_ROUTE_REQUEST_START, setTourRoute);
}

// fetching tour route //

function* fetchTourRoute(action) {
  const { payload } = action;
  try {
    const data = yield tourService.getTourRoute(payload);
    yield put(fetchTourRouteSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(fetchTourRouteFailure(error.message));
  }
}

function* onFetchTourRoute() {
  yield takeLatest(actionTypes.FETCH_TOUR_ROUTE_REQUEST_START, fetchTourRoute);
}

// all tour sagas watchers (e.g. 'onFetch...') should be put here
export function* tourSagas() {
  yield all([
    call(onCreateTour),
    call(onUpdateTourBase),
    call(onFetchTourBase),
    call(onSetTourDetails),
    call(onFetchTourDetails),
    call(onSetTourDetails),
    call(onFetchTourDetails),
    call(onSetTourPhotos),
    call(onFetchTourPhotos),
    call(onSetTourRoute),
    call(onFetchTourRoute)
  ]);
}
