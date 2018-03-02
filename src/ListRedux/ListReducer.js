import * as ActionTypes from './ListActions';

function list(
  state = {
    isFetching: false,
    error: false,
    listData: [],
  },
  action,
) {
  switch (action.type) {
    case ActionTypes.GET_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
        listData: [],
      };
    case ActionTypes.GET_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listData: action.listData,
      };
    case ActionTypes.GET_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        listData: [],
      };
    default:
      return state;
  }
}

export default list;
