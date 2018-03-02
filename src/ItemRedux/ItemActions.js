export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';
export const CLEAR_SELECTED_ITEM = 'CLEAR_SELECTED_ITEM';

const requestItem = () => ({
  type: GET_ITEM_REQUEST,
});

const requestItemSuccess = item => ({
  type: GET_ITEM_SUCCESS,
  item,
});

const requestItemFailure = () => ({
  type: GET_ITEM_FAILURE,
});

export const clearSelectedItem = () => ({
  type: CLEAR_SELECTED_ITEM,
});

export const getItem = id => async (dispatch, getState) => {
  if (getState().item.selectedItem.itemId === id) {
    dispatch(clearSelectedItem());
    return;
  }
  dispatch(requestItem());
  try {
    const result = await fetch(
      `${process.env.REACT_APP_API_HOST}/information:${id}.json`,
    );
    const itemData = await result.json();

    dispatch(requestItemSuccess(itemData.resourceList));
  } catch (e) {
    dispatch(requestItemFailure());
  }
};
