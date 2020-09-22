import actionTypes from './hub.action-types';

// Action to fetch web HUB data //

export const fetchHubDataStart = () => ({
  type: actionTypes.FETCH_HUB_WEB_DATA_START
});

export const fetchHubDataSuccess = data => ({
  type: actionTypes.FETCH_HUB_WEB_DATA_SUCCESS,
  payload: data
});

export const fetchHubDataFailure = error => ({
  type: actionTypes.FETCH_HUB_WEB_DATA_FAILURE,
  payload: error
});
