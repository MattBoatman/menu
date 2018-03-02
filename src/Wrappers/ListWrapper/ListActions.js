export const GET_LIST_REQUEST = 'GET_LIST_REQUEST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAILURE = 'GET_LIST_FAILURE';

const _requestList = () => ({
    type: GET_LIST_REQUEST,
});

const _requestListSuccess = (listData) => ({
    type: GET_LIST_SUCCESS,
    listData
});

const _requestListFailure = () => ({
    type: GET_LIST_FAILURE,
});

export const getList = (id) => async (dispatch) => {
    dispatch(_requestList());
    try {
        const result = await fetch(
          `${process.env.REACT_APP_API_HOST}/list:${id}.json`
        );
        const listData = await result.json();

        dispatch(_requestListSuccess(listData.categories));
      } catch (e) {
        dispatch(_requestListFailure());
      }
};