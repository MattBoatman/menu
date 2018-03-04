export const GET_LIST_REQUEST = 'GET_LIST_REQUEST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAILURE = 'GET_LIST_FAILURE';
export const CLEAR_LIST = 'CLEAR_LIST';

const requestList = name => ({
  type: GET_LIST_REQUEST,
  name,
});

const requestListSuccess = listData => ({
  type: GET_LIST_SUCCESS,
  listData,
});

const requestListFailure = () => ({
  type: GET_LIST_FAILURE,
});

export const getListOfItems = selectedCategory => async dispatch => {
  dispatch(requestList(selectedCategory.name));
  try {
    const result = await fetch(
      `${process.env.REACT_APP_API_HOST}/list:${
        selectedCategory.categoryId
      }.json`,
    );
    const listData = await result.json();

    dispatch(requestListSuccess(listData.resourceList));
  } catch (e) {
    dispatch(requestListFailure());
  }
};

export const clearList = () => ({
  type: CLEAR_LIST,
});
