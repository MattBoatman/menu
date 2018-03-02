import * as ActionTypes from './CategoryActions';

function category(
  state = {
    isFetching: false,
    error: false,
    categories: [],
    selectedCategory: {},
  },
  action,
) {
  switch (action.type) {
    case ActionTypes.GET_CATEGORY_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
        categories: [],
        selectedCategory: {},
      };
    case ActionTypes.GET_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        categories: action.categories,
      };
    case ActionTypes.GET_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        categories: [],
      };
    case ActionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.category,
      };
    default:
      return state;
  }
}

export default category;
