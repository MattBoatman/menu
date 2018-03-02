import item from './ItemReducer';
import * as ActionTypes from './ItemActions';

describe('item', () => {
  it('should return the initial state', () => {
    const reducerState = item(undefined, {});
    const expectedState = {
      isFetching: false,
      error: false,
      selectedItem: {},
    };

    expect(reducerState).toEqual(expectedState);
  });

  it('GET_ITEM_REQUEST', () => {
    const reducerState = item(
      {},
      {
        type: ActionTypes.GET_ITEM_REQUEST,
      },
    );
    const expectedState = {
      isFetching: true,
      error: false,
      selectedItem: {},
    };

    expect(reducerState).toEqual(expectedState);
  });

  it('GET_ITEM_SUCCESS', () => {
    const reducerState = item(
      {},
      {
        type: ActionTypes.GET_ITEM_SUCCESS,
        item: [{ id: 1, type: 'taco', imageUrl: 'www.matthewboatman.com' }],
      },
    );
    const expectedState = {
      isFetching: false,
      selectedItem: [
        { id: 1, type: 'taco', imageUrl: 'www.matthewboatman.com' },
      ],
    };

    expect(reducerState).toEqual(expectedState);
  });

  it('GET_ITEM_FAILURE', () => {
    const reducerState = item(
      {},
      {
        type: ActionTypes.GET_ITEM_FAILURE,
      },
    );
    const expectedState = {
      isFetching: false,
      error: true,
    };

    expect(reducerState).toEqual(expectedState);
  });
});
