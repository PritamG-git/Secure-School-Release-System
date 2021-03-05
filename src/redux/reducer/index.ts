import {combineReducers} from 'redux';
import studentReducer from './studentReducer';
import requestReducer from './requestReducer';
export default combineReducers({
  students: studentReducer,
  request: requestReducer,
});
