import actionTypes from './guide.action-types';

const INITIAL_STATE = {
  isLoading: false,
  isLoadingCalendarData: null,
  error: null,
  guideData: null,
  guideReviews: null,
  guideTours: null,
  guideSchedule: null,
  guideToursByDate: null,
  selectedGuideTour: null,
  selectedGuideTourReviews: null,
  currentTour: null,
  currentGuide: null
};

const guideReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_TOUR:
      return {
        ...state,
        currentTour: action.payload
      };
    case actionTypes.CLEAR_CURRENT_TOUR_DATA:
      return {
        ...state,
        currentTour: null,
        selectedGuideTour: null,
        selectedGuideTourReviews: null,
        error: null
      };
    case actionTypes.SET_CURRENT_GUIDE:
      return {
        ...state,
        currentGuide: action.payload
      };
    case actionTypes.FETCH_GUIDE_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_GUIDE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        guideData: action.payload
      };
    case actionTypes.FETCH_GUIDE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case actionTypes.CLEAR_GUIDE_DATA:
      return {
        ...state,
        guideData: null,
        guideReviews: null,
        guideTours: null,
        guideSchedule: null,
        selectedGuideTour: null,
        selectedGuideTourReviews: null,
        currentTour: null,
        currentGuide: null,
        error: null
      };
    case actionTypes.FETCH_GUIDE_REVIEWS_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_GUIDE_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        guideReviews: action.payload
      };
    case actionTypes.FETCH_GUIDE_REVIEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case actionTypes.FETCH_GUIDE_TOURS_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_GUIDE_TOURS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        guideTours: action.payload
      };
    case actionTypes.FETCH_GUIDE_TOURS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case actionTypes.FETCH_GUIDE_TOURS_BY_DATE_START:
      return {
        ...state,
        isLoadingCalendarData: true
      };
    case actionTypes.FETCH_GUIDE_TOURS_BY_DATE_SUCCESS:
      return {
        ...state,
        isLoadingCalendarData: false,
        guideToursByDate: action.payload
      };
    case actionTypes.FETCH_GUIDE_TOURS_BY_DATE_FAILURE:
      return {
        ...state,
        isLoadingCalendarData: false,
        error: action.payload
      };
    case actionTypes.FETCH_SELECTED_GUIDE_TOUR_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_SELECTED_GUIDE_TOUR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedGuideTour: action.payload
      };
    case actionTypes.FETCH_SELECTED_GUIDE_TOUR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case actionTypes.FETCH_SELECTED_GUIDE_TOUR_REVIEWS_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_SELECTED_GUIDE_TOUR_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedGuideTourReviews: action.payload
      };
    case actionTypes.FETCH_SELECTED_GUIDE_TOUR_REVIEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case actionTypes.FETCH_GUIDE_SCHEDULE_START:
      return {
        ...state,
        isLoadingCalendarData: true
      };
    case actionTypes.FETCH_GUIDE_SCHEDULE_SUCCESS:
      return {
        ...state,
        isLoadingCalendarData: false,
        guideSchedule: action.payload
      };
    case actionTypes.FETCH_GUIDE_SCHEDULE_FAILURE:
      return {
        ...state,
        isLoadingCalendarData: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default guideReducer;
