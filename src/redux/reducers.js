import { combineReducers } from 'redux'
import dictionaryReducer from './dictionary.reducers';

const rootReducer = combineReducers({
    dictionaryReducer,
});

export default rootReducer;
