export const GET_CATEGORY_LIST_REQUEST = 'GET_CATEGORY_LIST_REQUEST';
export const GET_CATEGORY_LIST_SUCCESS = 'GET_CATEGORY_LIST_SUCCESS';
export const GET_CATEGORY_LIST_FAILURE = 'GET_CATEGORY_LIST_FAILURE';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

const _requestListOfCategories = () => ({
  type: GET_CATEGORY_LIST_REQUEST,
});

const _requestListOfCategoriesSuccess = categories => ({
  type: GET_CATEGORY_LIST_SUCCESS,
  categories,
});

const _requestListOfCategoriesFailure = () => ({
  type: GET_CATEGORY_LIST_FAILURE,
});

export const getListOfCategories = () => async dispatch => {
  dispatch(_requestListOfCategories());
  try {
    const result = await fetch(
      `${process.env.REACT_APP_API_HOST}/menuCategories.json`,
    );
    const categoryData = await result.json();

    dispatch(_requestListOfCategoriesSuccess(categoryData.resourceList));
  } catch (e) {
    dispatch(_requestListOfCategoriesFailure());
  }
};

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category,
});
