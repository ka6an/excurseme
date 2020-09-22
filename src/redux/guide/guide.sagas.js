import { takeLatest, all, call, put } from 'redux-saga/effects';

import guideService from '../../fetch-api/services/guide.service';

import {
  fetchGuideSuccess,
  fetchGuideFailure,
  fetchGuideReviewsSuccess,
  fetchGuideReviewsFailure,
  fetchGuideToursSuccess,
  fetchGuideToursFailure,
  fetchSelectedGuideTourSuccess,
  fetchSelectedGuideTourFailure,
  fetchSelectedGuideTourReviewsSuccess,
  fetchSelectedGuideTourReviewsFailure,
  fetchGuideScheduleSuccess,
  fetchGuideScheduleFailure,
  fetchGuideToursByDateSuccess,
  fetchGuideToursByDateFailure
} from './guide.actions';

import actionTypes from './guide.action-types';

// fetching guideData //

function* fetchGuideData(action) {
  const { payload } = action;
  try {
    const data = yield guideService.getGuideData(payload);
    yield put(fetchGuideSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(fetchGuideFailure(error));
  }
}

function* onFetchGuideData() {
  yield takeLatest(actionTypes.FETCH_GUIDE_START, fetchGuideData);
}

// fetching guideReviews //

function* fetchGuideReviews(action) {
  const { payload } = action;
  try {
    const data = yield guideService.getGuideReviews(payload);
    yield put(fetchGuideReviewsSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(fetchGuideReviewsFailure(error));
  }
}

function* onFetchGuideReviews() {
  yield takeLatest(actionTypes.FETCH_GUIDE_REVIEWS_START, fetchGuideReviews);
}

// fetching guideTours //

function* fetchGuideTours(action) {
  const { payload } = action;
  try {
    const data = yield guideService.getGuideTours(payload);
    yield put(fetchGuideToursSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(fetchGuideToursFailure(error));
  }
}

function* onFetchGuideTours() {
  yield takeLatest(actionTypes.FETCH_GUIDE_TOURS_START, fetchGuideTours);
}

// fetching guideToursByDate //

function* fetchGuideToursByDate(action) {
  const {
    payload: { id, date }
  } = action;
  try {
    const data = yield guideService.getGuideToursByDate(id, date);
    yield put(fetchGuideToursByDateSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(fetchGuideToursByDateFailure(error));
  }
}

function* onFetchGuideToursByDate() {
  yield takeLatest(
    actionTypes.FETCH_GUIDE_TOURS_BY_DATE_START,
    fetchGuideToursByDate
  );
}

// fetching selectedGuideTour //

function* fetchSelectedGuideTour(action) {
  const {
    payload: { guideId, tourId }
  } = action;
  try {
    const data = yield guideService.getSelectedGuideTour(guideId, tourId);
    yield put(fetchSelectedGuideTourSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(fetchSelectedGuideTourFailure(error));
  }
}

function* onFetchSelectedGuideTour() {
  yield takeLatest(
    actionTypes.FETCH_SELECTED_GUIDE_TOUR_START,
    fetchSelectedGuideTour
  );
}

// fetching selectedGuideTourReviews //

function* fetchSelectedGuideTourReviews(action) {
  const {
    payload: { guideId, tourId }
  } = action;
  try {
    const data = yield guideService.getSelectedGuideTourReviews(
      guideId,
      tourId
    );
    yield put(fetchSelectedGuideTourReviewsSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(fetchSelectedGuideTourReviewsFailure(error));
  }
}

function* onFetchSelectedGuideTourReviews() {
  yield takeLatest(
    actionTypes.FETCH_SELECTED_GUIDE_TOUR_REVIEWS_START,
    fetchSelectedGuideTourReviews
  );
}

// fetching guideSchedule //

function* fetchGuideSchedule(action) {
  const {
    payload: { guideId, dateStart, dateEnd }
  } = action;
  try {
    const data = yield guideService.getGuideSchedule(
      guideId,
      dateStart,
      dateEnd
    );
    yield put(fetchGuideScheduleSuccess(JSON.parse(data)));
  } catch (error) {
    console.error(error);
    yield put(fetchGuideScheduleFailure(error));
  }
}

function* onFetchGuideSchedule() {
  yield takeLatest(actionTypes.FETCH_GUIDE_SCHEDULE_START, fetchGuideSchedule);
}

// all guide sagas watchers (e.g. 'onFetch...') should be put here
export function* guideSagas() {
  yield all([
    call(onFetchGuideData),
    call(onFetchGuideReviews),
    call(onFetchGuideSchedule),
    call(onFetchSelectedGuideTour),
    call(onFetchSelectedGuideTourReviews),
    call(onFetchGuideTours),
    call(onFetchGuideToursByDate)
  ]);
}
