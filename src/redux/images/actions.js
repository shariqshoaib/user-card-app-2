/* eslint-disable no-plusplus */
import imagesActionTypes from './actionTypes';
import getUsers from '../../utils/usersApi';

const {
  FETCH_IMAGES_REQUESTED,
  FETCH_IMAGES_SUCCEEDED,
  FETCH_IMAGES_FAILED,
} = imagesActionTypes;

export const fetchImagesRequested = (dispatch) => (
  dispatch({ type: FETCH_IMAGES_REQUESTED })
);

export const fetchImagesSucceeded = (images) => (dispatch) => (
  dispatch({ type: FETCH_IMAGES_SUCCEEDED, payload: images })
);

export const fetchImagesFailed = (error) => (dispatch) => (
  dispatch({ type: FETCH_IMAGES_FAILED, payload: error })
);

export const fetchImages = async (dispatch) => {
  dispatch(fetchImagesRequested);
  try {
    const users = await getUsers();
    const images = {};
    for (let i = 0; i < users.length; i++) {
      const { username } = users[i];
      const link = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
      images[username] = link;
    }
    dispatch(fetchImagesSucceeded(images));
  } catch (error) {
    dispatch(fetchImagesFailed(error));
  }
};
