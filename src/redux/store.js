import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ThunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import imagesReducer from './images/reducer';
import usersReducer from './users/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  images: imagesReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(ThunkMiddleware, logger),
);

const store = createStore(
  rootReducer,
  {},
  middleware,
);

export default store;
