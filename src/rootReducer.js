import { combineReducers } from 'redux';
import category from './Wrappers/CategoryWrapper/CategoryReducer';

const rootReducer = combineReducers({
    category
});

export default rootReducer;