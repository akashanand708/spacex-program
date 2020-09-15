
import { combineReducers } from 'redux';
import { programReducer } from './program-reducer';
import { showToastReducer } from './show-toast-reducer'

const rootReducer = combineReducers({
  programReducer,
  showToastReducer
});

export {
  rootReducer
}
