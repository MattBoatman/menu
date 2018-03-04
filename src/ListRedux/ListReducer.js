import * as ActionTypes from './ListActions';

function list(
  state = {
    isFetching: false,
    error: false,
    listData: [],
    name: '',
  },
  action,
) {
  switch (action.type) {
    case ActionTypes.GET_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
        name: action.name,
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
        name: '',
      };
    case ActionTypes.CLEAR_LIST:
      return {
        ...state,
        listData: [],
        name: '',
      };
    default:
      return state;
  }
}

export default list;
