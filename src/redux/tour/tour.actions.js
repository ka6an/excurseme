import actionTypes from './tour.action-types';

// Actions of creating tour //

export const createTourStart = tourBase => ({
  type: actionTypes.CREATE_TOUR_REQUEST_START,
  payload: tourBase
});

export const createTourSuccess = tourId => ({
  type: actionTypes.CREATE_TOUR_REQUEST_SUCCESS,
  payload: tourId
});

export const createTourFailure = error => ({
  type: actionTypes.CREATE_TOUR_REQUEST_FAILURE,
  payload: error
});

// Actions of updating tour base //

export const updateTourBaseStart = (tourId, tourBase) => ({
  type: actionTypes.UPDATE_TOUR_BASE_REQUEST_START,
  payload: { tourId, tourBase }
});

export const updateTourBaseSuccess = successMessage => ({
  type: actionTypes.UPDATE_TOUR_BASE_REQUEST_SUCCESS,
  payload: successMessage
});

export const updateTourBaseFailure = error => ({
  type: actionTypes.UPDATE_TOUR_BASE_REQUEST_FAILURE,
  payload: error
});

// Actions of fetching tour base //

export const fetchTourBaseStart = tourId => ({
  type: actionTypes.FETCH_TOUR_BASE_REQUEST_START,
  payload: tourId
});

export const fetchTourBaseSuccess = tourBase => ({
  type: actionTypes.FETCH_TOUR_BASE_REQUEST_SUCCESS,
  payload: tourBase
});

export const fetchTourBaseFailure = error => ({
  type: actionTypes.FETCH_TOUR_BASE_REQUEST_FAILURE,
  payload: error
});

// Actions of setting tour details //

export const setTourDetailsStart = (tourId, tourDetails) => ({
  type: actionTypes.SET_TOUR_DETAILS_REQUEST_START,
  payload: { tourId, tourDetails }
});

export const setTourDetailsSuccess = successMessage => ({
  type: actionTypes.SET_TOUR_DETAILS_REQUEST_SUCCESS,
  payload: successMessage
});

export const setTourDetailsFailure = error => ({
  type: actionTypes.SET_TOUR_DETAILS_REQUEST_FAILURE,
  payload: error
});

// Actions of fetching tour details //

export const fetchTourDetailsStart = tourId => ({
  type: actionTypes.FETCH_TOUR_DETAILS_REQUEST_START,
  payload: tourId
});

export const fetchTourDetailsSuccess = tourBase => ({
  type: actionTypes.FETCH_TOUR_DETAILS_REQUEST_SUCCESS,
  payload: tourBase
});

export const fetchTourDetailsFailure = error => ({
  type: actionTypes.FETCH_TOUR_DETAILS_REQUEST_FAILURE,
  payload: error
});

// Actions of setting tour photos //

export const setTourPhotosStart = (tourId, tourPhotos) => ({
  type: actionTypes.SET_TOUR_PHOTOS_REQUEST_START,
  payload: { tourId, tourPhotos }
});

export const setTourPhotosSuccess = successMessage => ({
  type: actionTypes.SET_TOUR_PHOTOS_REQUEST_SUCCESS,
  payload: successMessage
});

export const setTourPhotosFailure = error => ({
  type: actionTypes.SET_TOUR_PHOTOS_REQUEST_FAILURE,
  payload: error
});

// Actions of fetching tour photos //

export const fetchTourPhotosStart = tourId => ({
  type: actionTypes.FETCH_TOUR_PHOTOS_REQUEST_START,
  payload: tourId
});

export const fetchTourPhotosSuccess = tourPhotos => ({
  type: actionTypes.FETCH_TOUR_PHOTOS_REQUEST_SUCCESS,
  payload: tourPhotos
});

export const fetchTourPhotosFailure = error => ({
  type: actionTypes.FETCH_TOUR_PHOTOS_REQUEST_FAILURE,
  payload: error
});

// Actions of setting tour route //

export const setTourRouteStart = (tourId, tourRoute) => ({
  type: actionTypes.SET_TOUR_ROUTE_REQUEST_START,
  payload: { tourId, tourRoute }
});

export const setTourRouteSuccess = successMessage => ({
  type: actionTypes.SET_TOUR_ROUTE_REQUEST_SUCCESS,
  payload: successMessage
});

export const setTourRouteFailure = error => ({
  type: actionTypes.SET_TOUR_ROUTE_REQUEST_FAILURE,
  payload: error
});

// Actions of fetching tour route //

export const fetchTourRouteStart = tourId => ({
  type: actionTypes.FETCH_TOUR_ROUTE_REQUEST_START,
  payload: tourId
});

export const fetchTourRouteSuccess = tourRoute => ({
  type: actionTypes.FETCH_TOUR_ROUTE_REQUEST_SUCCESS,
  payload: tourRoute
});

export const fetchTourRouteFailure = error => ({
  type: actionTypes.FETCH_TOUR_ROUTE_REQUEST_FAILURE,
  payload: error
});

// Demo action of setting tour id directly //

export const setTourId = tourId => ({
  type: actionTypes.SET_TOUR_ID,
  payload: tourId
});

// Actions for clearing tour data //

export const clearTourData = () => ({
  type: actionTypes.CLEAR_TOUR_DATA
});
