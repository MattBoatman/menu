import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as ActionTypes from './ItemActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('ItemActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  describe('getItem', () => {
    it('success: get request and success action', () => {
      fetchMock.getOnce(
        'https://s3.amazonaws.com/staticresourcesformenu/information:1.json',
        {
          resourceList: [
            { id: 1, type: 'taco', imageUrl: 'www.matthewboatman.com' },
          ],
        },
      );
      const expected = [
        { type: ActionTypes.GET_ITEM_REQUEST },
        {
          type: ActionTypes.GET_ITEM_SUCCESS,
          item: [{ id: 1, type: 'taco', imageUrl: 'www.matthewboatman.com' }],
        },
      ];
      const initialState = {
        item: {
          selectedItem: {},
        },
      };
      const store = mockStore(initialState);

      return store.dispatch(ActionTypes.getItem(1)).then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expected);
      });
    });
    it('failure: get request and failure action', () => {
      fetchMock.getOnce(
        'https://s3.amazonaws.com/staticresourcesformenu/information:1.json',
        { status: 404 },
      );
      const expected = [
        { type: ActionTypes.GET_ITEM_REQUEST },
        { type: ActionTypes.GET_ITEM_FAILURE },
      ];
      const initialState = {
        item: {
          selectedItem: {},
        },
      };
      const store = mockStore(initialState);

      return store.dispatch(ActionTypes.getItem(1)).then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expected);
      });
    });
    it('dont call the api and dispatch CLEAR_SELECTED_ITEM when the item in the store is the same as the one passed in', () => {
      const expected = [{ type: ActionTypes.CLEAR_SELECTED_ITEM }];
      const initialState = {
        item: {
          selectedItem: { itemId: 1 },
        },
      };
      const store = mockStore(initialState);
      store.dispatch(ActionTypes.getItem(1));
      const actions = store.getActions();
      expect(actions).toEqual(expected);
    });
  });
});
