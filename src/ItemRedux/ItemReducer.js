import * as ActionTypes from './ItemActions';

function item(
  state = {
    isFetching: false,
    error: false,
    selectedItem: {
      itemId: null,
    },
  },
  action,
) {
  switch (action.type) {
    case ActionTypes.GET_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
        selectedItem: { itemId: null },
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
    default:
      return state;
  }
}

export default item;
