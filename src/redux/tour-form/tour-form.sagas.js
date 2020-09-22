import { takeLatest, all, call, put } from 'redux-saga/effects';
import { isEmpty } from 'lodash';

import tourService from '../../fetch-api/services/tour.service';

import {
  postTourInformationSuccess,
  postTourInformationFailure
} from './tour-form.actions';

import actionTypes from './tour-form.action-types';

// posting tour information //

function* postTourInformation(action) {
  const {
    payload: {
      tourId,
      tourBase,
      tourDetails,
      tourPhotos,
      tourRoute,
      setOnVerification
    }
  } = action;

  let updateTourBase = [() => null, null, null];
  let setTourDetails = [() => null, null, null];
  let setTourPhotos = () => [];
  let setTourRoute = [() => null, null, null];
  let setTourOnVerification = [() => null];

  if (!isEmpty([...tourBase.entries()])) {
    updateTourBase = [tourService.updateTourBase, tourId, tourBase];
  }
  if (!isEmpty([...tourDetails.entries()])) {
    setTourDetails = [tourService.setTourDetails, tourId, tourDetails];
  }
  if (!isEmpty(tourPhotos)) {
    setTourPhotos = () =>
      tourPhotos.map(requestContainer => {
        return call(
          tourService.setTourPhotos,
          tourId,
          requestContainer.photoRequest
        );
      });
  }
  if (!isEmpty([...tourRoute.entries()])) {
    setTourRoute = [tourService.setTourRoute, tourId, tourRoute];
  }
  if (setOnVerification) {
    setTourOnVerification = [tourService.setTourOnVerification, tourId];
  }

  try {
    yield all([
      call(...updateTourBase),
      call(...setTourDetails),
      ...setTourPhotos(),
      call(...setTourRoute),
      call(...setTourOnVerification)
    ]);

    yield put(postTourInformationSuccess('Success!'));
  } catch (error) {
    console.error(error);
    yield put(postTourInformationFailure(error.message));
  }
}

function* onPostTourInformation() {
  yield takeLatest(
    actionTypes.POST_TOUR_INFORMATION_START,
    postTourInformation
  );
}

// all tour-form sagas watchers (e.g. 'onFetch...') should be put here
export function* tourFormSagas() {
  yield all([call(onPostTourInformation)]);
}
