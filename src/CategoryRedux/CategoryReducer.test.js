import category from './CategoryReducer';
import * as ActionTypes from './CategoryActions';

describe('category', () => {
  it('should return the initial state', () => {
    const reducerState = category(undefined, {});
    const expectedState = {
      isFetching: false,
      error: false,
      categories: [],
      selectedCategory: {},
    };

    expect(reducerState).toEqual(expectedState);
  });

  it('GET_CATEGORY_LIST_REQUEST', () => {
    const reducerState = category(
      {},
      {
        type: ActionTypes.GET_CATEGORY_LIST_REQUEST,
      },
    );
    const expectedState = {
      isFetching: true,
      error: false,
      categories: [],
      selectedCategory: {},
    };

    expect(reducerState).toEqual(expectedState);
  });

  it('GET_CATEGORY_LIST_SUCCESS', () => {
    const reducerState = category(
      {},
      {
        type: ActionTypes.GET_CATEGORY_LIST_SUCCESS,
        categories: [
          { id: 1, type: 'taco', imageUrl: 'www.matthewboatman.com' },
        ],
      },
    );
    const expectedState = {
      isFetching: false,
      categories: [{ id: 1, type: 'taco', imageUrl: 'www.matthewboatman.com' }],
    };

    expect(reducerState).toEqual(expectedState);
  });

  it('GET_CATEGORY_LIST_FAILURE', () => {
    const reducerState = category(
      {},
      {
        type: ActionTypes.GET_CATEGORY_LIST_FAILURE,
      },
    );
    const expectedState = {
      isFetching: false,
      error: true,
      categories: [],
    };

    expect(reducerState).toEqual(expectedState);
  });
});
