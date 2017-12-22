/* eslint-disable max-len, no-unused-vars */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/index';
import GITHUB_API from './utils/Api';

// With Dev Tools
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware.withExtraArgument({ GITHUB_API })),
  logger,
);

// Without Dev Tools
/* eslint-disable */
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunkMiddleware.withExtraArgument({ GITHUB_API })),
// );

store.subscribe(() => {
  console.log('SUBSCRIBER store changed', store.getState());
});
/* eslint-enable */
export default store;
