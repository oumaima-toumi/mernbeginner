// store.js
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'; // Assuming the location of your root reducer file
import { userConstants } from '../actions/constantes'; // Importing userConstants from constantes.jsx

const { GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILURE } = userConstants;

// Create Redux store with middleware and Redux DevTools integration (if available)
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
