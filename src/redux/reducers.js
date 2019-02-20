import { combineReducers } from 'redux'
import dictionaryReducer from './dictionary.reducers';
import dictionaryListReducer from './dictionaryList.reducers';

const rootReducer = combineReducers({
    dictionaryReducer,
    dictionaryListReducer
});

export default rootReducer;
