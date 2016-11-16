import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  myReducer: (state = [], action) => state,
});

export default rootReducer;
