import { all, call } from 'redux-saga/effects';
import { guideSagas } from './guide/guide.sagas';
import { tourSagas } from './tour/tour.sagas';
import { tourFormSagas } from './tour-form/tour-form.sagas';
import { hubSagas } from './hub/hub.sagas';
import { toursSagas } from './tours/tours.sagas';

export default function* rootSaga() {
  yield all([
    call(guideSagas),
    call(tourSagas),
    call(tourFormSagas),
    call(hubSagas),
    call(toursSagas)
  ]);
}
