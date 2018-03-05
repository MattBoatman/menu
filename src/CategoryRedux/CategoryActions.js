export const GET_CATEGORY_LIST_REQUEST = 'GET_CATEGORY_LIST_REQUEST';
export const GET_CATEGORY_LIST_SUCCESS = 'GET_CATEGORY_LIST_SUCCESS';
export const GET_CATEGORY_LIST_FAILURE = 'GET_CATEGORY_LIST_FAILURE';

const requestListOfCategories = () => ({
  type: GET_CATEGORY_LIST_REQUEST,
});

const requestListOfCategoriesSuccess = categories => ({
  type: GET_CATEGORY_LIST_SUCCESS,
  categories,
});

const requestListOfCategoriesFailure = () => ({
  type: GET_CATEGORY_LIST_FAILURE,
});

export const getListOfCategories = () => async dispatch => {
  dispatch(requestListOfCategories());
  try {
    const result = await fetch(
      `${process.env.REACT_APP_API_HOST}/menuCategories.json`,
    );
    const categoryData = await result.json();

    dispatch(requestListOfCategoriesSuccess(categoryData.resourceList));
  } catch (e) {
    dispatch(requestListOfCategoriesFailure());
  }
};
