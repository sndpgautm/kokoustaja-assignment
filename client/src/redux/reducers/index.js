// Root Reducer

import { combineReducers } from 'redux';

import inputReducer from './input';

const rootReducer = combineReducers({
  inputReducer,
});

export default rootReducer;
