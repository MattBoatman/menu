import * as ActionTypes from './ItemActions';

function item(
  state = {
    isFetching: false,
    error: false,
    selectedItem: {},
  },
  action,
) {
  switch (action.type) {
    case ActionTypes.GET_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
        selectedItem: {},
      };
    case ActionTypes.GET_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        selectedItem: action.item,
      };
    case ActionTypes.GET_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case ActionTypes.CLEAR_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: {},
      };
    default:
      return state;
  }
}

export default item;
