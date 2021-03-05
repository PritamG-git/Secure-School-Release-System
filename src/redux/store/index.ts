import {createStore} from 'redux';
import requestReducer from '../reducer/requestReducer';

const store = createStore(requestReducer);

export default store;
