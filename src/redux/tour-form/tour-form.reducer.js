import actionTypes from './tour-form.action-types';

const INITIAL_STATE = {
  description: {},
  isDescriptionValid: false,
  details: {},
  isDetailsValid: false,
  photos: [],
  isPhotoValid: false,
  route: {},
  isRouteValid: false,
  isLoading: false,
  error: null,
  success: null
};

const tourFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.POST_TOUR_INFORMATION_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.POST_TOUR_INFORMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload
      };
    case actionTypes.POST_TOUR_INFORMATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case actionTypes.SET_DESCRIPTION_STAGE_STATE:
      return {
        ...state,
        description: action.payload,
        isDescriptionValid: action.isValid
      };
    case actionTypes.SET_DETAILS_STAGE_STATE:
      return {
        ...state,
        details: action.payload,
        isDetailsValid: action.isValid
      };
    case actionTypes.SET_PHOTO_STAGE_STATE:
      return {
        ...state,
        photos: action.payload,
        isPhotoValid: action.isValid
      };
    case actionTypes.SET_ROUTE_STAGE_STATE:
      return {
        ...state,
        route: action.payload,
        isRouteValid: action.isValid
      };

    case actionTypes.CLEAR_FORM_STATE:
      return {
        ...state,
        description: {},
        details: {},
        photos: [],
        route: {},
        isDescriptionValid: false
      };
    case actionTypes.CLEAR_DESCRIPTION_STAGE_STATE:
      return { ...state, description: {}, isDescriptionValid: false };
    case actionTypes.CLEAR_DETAILS_STAGE_STATE:
      return { ...state, details: {}, isDescriptionValid: false };
    case actionTypes.CLEAR_PHOTO_STAGE_STATE:
      return { ...state, photos: [], isDescriptionValid: false };
    case actionTypes.CLEAR_ROUTE_STAGE_STATE:
      return { ...state, route: {}, isDescriptionValid: false };
    default:
      return state;
  }
};

export default tourFormReducer;
