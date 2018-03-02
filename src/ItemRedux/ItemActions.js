export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';
export const SELECT_ITEM = 'SELECT_ITEM';

const _requestItem = () => ({
  type: GET_ITEM_REQUEST,
});

const _requestItemSuccess = item => ({
  type: GET_ITEM_SUCCESS,
  item,
});

const _requestItemFailure = () => ({
  type: GET_ITEM_FAILURE,
});

export const getItem = id => async dispatch => {
  dispatch(_requestItem());
  try {
    const result = await fetch(
      `${process.env.REACT_APP_API_HOST}/information:${id}.json`,
    );
    const itemData = await result.json();

    dispatch(_requestItemSuccess(itemData.resourceList));
  } catch (e) {
    dispatch(_requestItemFailure());
  }
};
