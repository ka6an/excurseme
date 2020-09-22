import actionTypes from './tour-form.action-types';

// Actions to post edited tour //

export const postTourInformationStart = (
  tourId,
  tourBase,
  tourDetails,
  tourPhotos,
  tourRoute,
  setOnVerification
) => ({
  type: actionTypes.POST_TOUR_INFORMATION_START,
  payload: {
    tourId,
    tourBase,
    tourDetails,
    tourPhotos,
    tourRoute,
    setOnVerification
  }
});

export const postTourInformationSuccess = message => ({
  type: actionTypes.POST_TOUR_INFORMATION_SUCCESS,
  payload: message
});

export const postTourInformationFailure = error => ({
  type: actionTypes.POST_TOUR_INFORMATION_FAILURE,
  payload: error
});

// Actions of setting tour form stages state //

export const setDescriptionStageState = (formData, isValid) => ({
  type: actionTypes.SET_DESCRIPTION_STAGE_STATE,
  payload: formData,
  isValid
});

export const setDetailsStageState = (formData, isValid) => ({
  type: actionTypes.SET_DETAILS_STAGE_STATE,
  payload: formData,
  isValid
});

export const setPhotoStageState = (formData, isValid) => ({
  type: actionTypes.SET_PHOTO_STAGE_STATE,
  payload: formData,
  isValid
});

export const setRouteStageState = (formData, isValid) => ({
  type: actionTypes.SET_ROUTE_STAGE_STATE,
  payload: formData,
  isValid
});

// Actions of clearing tour form stages state //

export const clearFormState = () => ({
  type: actionTypes.CLEAR_FORM_STATE
});

export const clearDescriptionStageState = () => ({
  type: actionTypes.CLEAR_DESCRIPTION_STAGE_STATE
});

export const clearDetailsStageState = () => ({
  type: actionTypes.CLEAR_DETAILS_STAGE_STATE
});

export const clearPhotoStageState = () => ({
  type: actionTypes.CLEAR_PHOTO_STAGE_STATE
});

export const clearRouteStageState = () => ({
  type: actionTypes.CLEAR_ROUTE_STAGE_STATE
});
