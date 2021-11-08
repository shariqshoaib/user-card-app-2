import userActionTypes from './actionTypes';
import getUsers from '../../utils/usersApi';

const {
  FETCH_USERS_REQUESTED,
  FETCH_USERS_SUCCEEDED,
  FETCH_USERS_FAILED,
} = userActionTypes;

export const fetchUsersRequested = (dispatch) => (
  dispatch({ type: FETCH_USERS_REQUESTED })
);

export const fetchUsersSucceeded = (users) => (dispatch) => (
  dispatch({ type: FETCH_USERS_SUCCEEDED, payload: users })
);

export const fetchUsersFailed = (error) => (dispatch) => (
  dispatch({ type: FETCH_USERS_FAILED, payload: error })
);

export const fetchUsers = async (dispatch) => {
  dispatch(fetchUsersRequested);
  try {
    const users = await getUsers();
    dispatch(fetchUsersSucceeded(users));
  } catch (error) {
    dispatch(fetchUsersFailed(error));
  }
};
