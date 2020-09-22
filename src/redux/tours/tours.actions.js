import actionTypes from './tours.action-types';

// Action to fetch tours by status //

export const fetchToursByStatusStart = status => ({
  type: `FETCH_${status.toUpperCase()}_TOURS_START`,
  payload: status
});

export const fetchToursByStatusSuccess = (tours, status) => ({
  type: `FETCH_${status.toUpperCase()}_TOURS_SUCCESS`,
  payload: tours
});

export const fetchToursByStatusFailure = (error, status) => ({
  type: `FETCH_${status.toUpperCase()}_TOURS_FAILURE`,
  payload: error
});

// Action to clear tours data //
export const clearToursData = () => ({
  type: actionTypes.CLEAR_TOURS_DATA
});
