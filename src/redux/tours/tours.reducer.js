import actionTypes from './tours.action-types';

const {
  FETCH_ACTIVE_TOURS_START,
  FETCH_ACTIVE_TOURS_SUCCESS,
  FETCH_ACTIVE_TOURS_FAILURE,
  FETCH_DRAFT_TOURS_START,
  FETCH_DRAFT_TOURS_SUCCESS,
  FETCH_DRAFT_TOURS_FAILURE,
  FETCH_PENDING_TOURS_START,
  FETCH_PENDING_TOURS_SUCCESS,
  FETCH_PENDING_TOURS_FAILURE,
  FETCH_REJECTED_TOURS_START,
  FETCH_REJECTED_TOURS_SUCCESS,
  FETCH_REJECTED_TOURS_FAILURE,
  FETCH_UNPUBLISHED_TOURS_START,
  FETCH_UNPUBLISHED_TOURS_SUCCESS,
  FETCH_UNPUBLISHED_TOURS_FAILURE,
  CLEAR_TOURS_DATA
} = actionTypes;

const initialState = {
  activeTours: null,
  activeAmount: null,
  unpublishedTours: null,
  unpublishedAmount: null,
  draftTours: null,
  draftAmount: null,
  rejectedTours: null,
  rejectedAmount: null,
  pendingTours: null,
  pendingAmount: null,
  isLoading: false,
  error: null
};

const toursReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ACTIVE_TOURS_START:
      return { ...state, isLoading: true };
    case FETCH_ACTIVE_TOURS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        activeTours: payload.tours,
        activeAmount: payload.tours.length
      };
    case FETCH_ACTIVE_TOURS_FAILURE:
      return { ...state, isLoading: false, error: payload };

    case FETCH_DRAFT_TOURS_START:
      return { ...state, isLoading: true };
    case FETCH_DRAFT_TOURS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        draftTours: payload.tours,
        draftAmount: payload.tours.length
      };
    case FETCH_DRAFT_TOURS_FAILURE:
      return { ...state, isLoading: false, error: payload };

    case FETCH_PENDING_TOURS_START:
      return { ...state, isLoading: true };
    case FETCH_PENDING_TOURS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pendingTours: payload.tours,
        pendingAmount: payload.tours.length
      };
    case FETCH_PENDING_TOURS_FAILURE:
      return { ...state, isLoading: false, error: payload };

    case FETCH_REJECTED_TOURS_START:
      return { ...state, isLoading: true };
    case FETCH_REJECTED_TOURS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rejectedTours: payload.tours,
        rejectedAmount: payload.tours.length
      };
    case FETCH_REJECTED_TOURS_FAILURE:
      return { ...state, isLoading: false, error: payload };

    case FETCH_UNPUBLISHED_TOURS_START:
      return { ...state, isLoading: true };
    case FETCH_UNPUBLISHED_TOURS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        unpublishedTours: payload.tours,
        unpublishedAmount: payload.tours.length
      };
    case FETCH_UNPUBLISHED_TOURS_FAILURE:
      return { ...state, isLoading: false, error: payload };

    case CLEAR_TOURS_DATA:
      return initialState;
    default:
      return state;
  }
};

export default toursReducer;
