import { combineReducers } from 'redux';
import category from './CategoryRedux/CategoryReducer';
import list from './ListRedux/ListReducer';
import item from './ItemRedux/ItemReducer';

const rootReducer = combineReducers({
  category,
  list,
  item,
});

export default rootReducer;
