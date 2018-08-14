import {combineReducers} from 'redux';
import calendars from './calReducer';

const rootReducer = combineReducers({
    calendars
});

export default rootReducer;