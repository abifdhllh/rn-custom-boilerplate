import {combineReducers} from 'redux';

// Reducer List
import {reducer as sample} from './sample';

const rootReducer = combineReducers({
  sample,
});

export default rootReducer;
