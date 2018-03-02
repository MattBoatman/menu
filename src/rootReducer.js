import { combineReducers } from 'redux';
import category from './CategoryRedux/CategoryReducer';
import list from './ListRedux/ListReducer';

const rootReducer = combineReducers({
  category,
  list,
});

export default rootReducer;
