import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';

const logger = createLogger({
  collapsed: true,
  duration: true
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk, logger)));

export {
  store
}
