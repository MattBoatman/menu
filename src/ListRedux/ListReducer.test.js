import list from './ListReducer';
import * as ActionTypes from './ListActions';

describe('list', () => {
  it('should return the initial state', () => {
    const reducerState = list(undefined, {});
    const expectedState = {
      isFetching: false,
      error: false,
      listData: [],
    };

    expect(reducerState).toEqual(expectedState);
  });

  it('GET_LIST_REQUEST', () => {
    const reducerState = list(
      {},
      {
        type: ActionTypes.GET_LIST_REQUEST,
      },
    );
    const expectedState = {
      isFetching: true,
      error: false,
      listData: [],
    };

    expect(reducerState).toEqual(expectedState);
  });

  it('GET_LIST_SUCCESS', () => {
    const reducerState = list(
      {},
      {
        type: ActionTypes.GET_LIST_SUCCESS,
        listData: [{ id: 1, type: 'taco', imageUrl: 'www.matthewboatman.com' }],
      },
    );
    const expectedState = {
      isFetching: false,
      listData: [{ id: 1, type: 'taco', imageUrl: 'www.matthewboatman.com' }],
    };

    expect(reducerState).toEqual(expectedState);
  });

  it('GET_LIST_FAILURE', () => {
    const reducerState = list(
      {},
      {
        type: ActionTypes.GET_LIST_FAILURE,
      },
    );
    const expectedState = {
      isFetching: false,
      error: true,
    };

    expect(reducerState).toEqual(expectedState);
  });
});
