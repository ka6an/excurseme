import actionTypes from './tour.action-types';

const INITIAL_STATE = {
  isLoading: false,
  successfulMessage: null,
  errorMessage: null,
  tourId: null,
  tourBase: null,
  tourDetails: null,
  tourPhotos: null,
  tourRoute: null
};

const tourReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TOUR_REQUEST_START:
      return { ...state, isLoading: true };
    case actionTypes.CREATE_TOUR_REQUEST_SUCCESS:
      return { ...state, isLoading: false, tourId: action.payload.tour_id };
    case actionTypes.CREATE_TOUR_REQUEST_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case actionTypes.UPDATE_TOUR_BASE_REQUEST_START:
      return { ...state, isLoading: true };
    case actionTypes.UPDATE_TOUR_BASE_REQUEST_SUCCESS:
      return { ...state, isLoading: false, successfulMessage: action.payload };
    case actionTypes.UPDATE_TOUR_BASE_REQUEST_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case actionTypes.FETCH_TOUR_BASE_REQUEST_START:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_TOUR_BASE_REQUEST_SUCCESS:
      return { ...state, isLoading: false, tourBase: action.payload };
    case actionTypes.FETCH_TOUR_BASE_REQUEST_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case actionTypes.SET_TOUR_DETAILS_REQUEST_START:
      return { ...state, isLoading: true };
    case actionTypes.SET_TOUR_DETAILS_REQUEST_SUCCESS:
      return { ...state, isLoading: false, successfulMessage: action.payload };
    case actionTypes.SET_TOUR_PHOTOS_REQUEST_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case actionTypes.FETCH_TOUR_DETAILS_REQUEST_START:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_TOUR_DETAILS_REQUEST_SUCCESS:
      return { ...state, isLoading: false, tourDetails: action.payload };
    case actionTypes.FETCH_TOUR_DETAILS_REQUEST_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case actionTypes.SET_TOUR_PHOTOS_REQUEST_START:
      return { ...state, isLoading: true };
    case actionTypes.SET_TOUR_PHOTOS_REQUEST_SUCCESS:
      return { ...state, isLoading: false, successfulMessage: action.payload };
    case actionTypes.SET_TOUR_PHOTOS_REQUEST_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case actionTypes.FETCH_TOUR_PHOTOS_REQUEST_START:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_TOUR_PHOTOS_REQUEST_SUCCESS:
      return { ...state, isLoading: false, tourPhotos: action.payload.photos };
    case actionTypes.FETCH_TOUR_PHOTOS_REQUEST_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case actionTypes.SET_TOUR_ROUTE_REQUEST_START:
      return { ...state, isLoading: true };
    case actionTypes.SET_TOUR_ROUTE_REQUEST_SUCCESS:
      return { ...state, isLoading: false, successfulMessage: action.payload };
    case actionTypes.SET_TOUR_ROUTE_REQUEST_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case actionTypes.FETCH_TOUR_ROUTE_REQUEST_START:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_TOUR_ROUTE_REQUEST_SUCCESS:
      return { ...state, isLoading: false, tourRoute: action.payload.route };
    case actionTypes.FETCH_TOUR_ROUTE_REQUEST_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case actionTypes.SET_TOUR_ID:
      return { ...state, tourId: action.payload };
    case actionTypes.CLEAR_TOUR_DATA:
      return {
        ...state,
        tourId: null,
        tourId: null,
        tourBase: null,
        tourDetails: null,
        tourPhotos: null,
        tourRoute: null
      };
    default:
      return state;
  }
};

export default tourReducer;
