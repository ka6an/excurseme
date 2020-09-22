import actionTypes from './hub.action-types';
import hubData from './temporary-data.json';

const INITIAL_STATE = {
  data: hubData,
  error: null
};

const hubReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HUB_WEB_DATA_START:
      return state;
    case actionTypes.FETCH_HUB_WEB_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case actionTypes.FETCH_HUB_WEB_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default hubReducer;
