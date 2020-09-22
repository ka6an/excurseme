import { combineReducers } from 'redux';
import guideReducer from './guide/guide.reducer';
import tourReducer from './tour/tour.reducer';
import tourFormReducer from './tour-form/tour-form.reducer';
import hubReducer from './hub/hub.reducer';
import toursReducer from './tours/tours.reducer';

export default combineReducers({
  guide: guideReducer,
  tour: tourReducer,
  tourForm: tourFormReducer,
  hub: hubReducer,
  tours: toursReducer
});
