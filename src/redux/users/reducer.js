import userActionTypes from './actionTypes';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

const {
  FETCH_USERS_REQUESTED,
  FETCH_USERS_SUCCEEDED,
  FETCH_USERS_FAILED,
} = userActionTypes;

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case FETCH_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default: return state;
  }
};

export default usersReducer;
