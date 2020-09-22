import actionTypes from './guide.action-types';

// Action to set currentTour //

export const setCurrentTour = id => ({
  type: actionTypes.SET_CURRENT_TOUR,
  payload: id
});

// Action to clear currentTour //

export const clearCurrentTourData = () => ({
  type: actionTypes.CLEAR_CURRENT_TOUR_DATA
});

// Action to set currentGuide //

export const setCurrentGuide = id => ({
  type: actionTypes.SET_CURRENT_GUIDE,
  payload: id
});

// Action to clear guideData //

export const clearGuideData = () => ({
  type: actionTypes.CLEAR_GUIDE_DATA
});

// Actions of fetching guideData //

export const fetchGuideStart = id => ({
  type: actionTypes.FETCH_GUIDE_START,
  payload: id
});

export const fetchGuideSuccess = guide => ({
  type: actionTypes.FETCH_GUIDE_SUCCESS,
  payload: guide
});

export const fetchGuideFailure = error => ({
  type: actionTypes.FETCH_GUIDE_FAILURE,
  payload: error
});

// Actions of fetching guideReviews //

export const fetchGuideReviewsStart = id => ({
  type: actionTypes.FETCH_GUIDE_REVIEWS_START,
  payload: id
});

export const fetchGuideReviewsSuccess = reviews => ({
  type: actionTypes.FETCH_GUIDE_REVIEWS_SUCCESS,
  payload: reviews
});

export const fetchGuideReviewsFailure = error => ({
  type: actionTypes.FETCH_GUIDE_REVIEWS_FAILURE,
  payload: error
});

// Actions of fetching guideTours //

export const fetchGuideToursStart = id => ({
  type: actionTypes.FETCH_GUIDE_TOURS_START,
  payload: id
});

export const fetchGuideToursSuccess = tours => ({
  type: actionTypes.FETCH_GUIDE_TOURS_SUCCESS,
  payload: tours
});

export const fetchGuideToursFailure = error => ({
  type: actionTypes.FETCH_GUIDE_TOURS_FAILURE,
  payload: error
});

// Actions of fetching guideToursByDate //

export const fetchGuideToursByDateStart = (id, date) => ({
  type: actionTypes.FETCH_GUIDE_TOURS_BY_DATE_START,
  payload: { id, date }
});

export const fetchGuideToursByDateSuccess = tours => ({
  type: actionTypes.FETCH_GUIDE_TOURS_BY_DATE_SUCCESS,
  payload: tours
});

export const fetchGuideToursByDateFailure = error => ({
  type: actionTypes.FETCH_GUIDE_TOURS_BY_DATE_FAILURE,
  payload: error
});

// Actions of fetching selectedGuideTour //

export const fetchSelectedGuideTourStart = (guideId, tourId) => ({
  type: actionTypes.FETCH_SELECTED_GUIDE_TOUR_START,
  payload: { guideId, tourId }
});

export const fetchSelectedGuideTourSuccess = tour => ({
  type: actionTypes.FETCH_SELECTED_GUIDE_TOUR_SUCCESS,
  payload: tour
});

export const fetchSelectedGuideTourFailure = error => ({
  type: actionTypes.FETCH_SELECTED_GUIDE_TOUR_FAILURE,
  payload: error
});

// Actions of fetching selectedGuideTourReviews //

export const fetchSelectedGuideTourReviewsStart = (guideId, tourId) => ({
  type: actionTypes.FETCH_SELECTED_GUIDE_TOUR_REVIEWS_START,
  payload: { guideId, tourId }
});

export const fetchSelectedGuideTourReviewsSuccess = tour => ({
  type: actionTypes.FETCH_SELECTED_GUIDE_TOUR_REVIEWS_SUCCESS,
  payload: tour
});

export const fetchSelectedGuideTourReviewsFailure = error => ({
  type: actionTypes.FETCH_SELECTED_GUIDE_TOUR_REVIEWS_FAILURE,
  payload: error
});

// Actions of fetching guideSchedule //

export const fetchGuideScheduleStart = (guideId, dateStart, dateEnd) => ({
  type: actionTypes.FETCH_GUIDE_SCHEDULE_START,
  payload: { guideId, dateStart, dateEnd }
});

export const fetchGuideScheduleSuccess = guideSchedule => ({
  type: actionTypes.FETCH_GUIDE_SCHEDULE_SUCCESS,
  payload: guideSchedule
});

export const fetchGuideScheduleFailure = error => ({
  type: actionTypes.FETCH_GUIDE_SCHEDULE_FAILURE,
  payload: error
});
