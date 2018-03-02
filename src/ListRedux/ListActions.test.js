import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as ActionTypes from './ListActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('ListActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  describe('getListOfItems', () => {
    it('success: get request and success action', () => {
      fetchMock.getOnce(
        'https://s3.amazonaws.com/staticresourcesformenu/list:1.json',
        {
          resourceList: [
            { id: 1, type: 'taco', imageUrl: 'www.matthewboatman.com' },
          ],
        },
      );
      const expected = [
        { type: ActionTypes.GET_LIST_REQUEST },
        {
          type: ActionTypes.GET_LIST_SUCCESS,
          listData: [
            { id: 1, type: 'taco', imageUrl: 'www.matthewboatman.com' },
          ],
        },
      ];
      const store = mockStore();

      return store.dispatch(ActionTypes.getListOfItems(1)).then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expected);
      });
    });
    it('failure: get request and failure action', () => {
      fetchMock.getOnce(
        'https://s3.amazonaws.com/staticresourcesformenu/list:1.json',
        { status: 404 },
      );
      const expected = [
        { type: ActionTypes.GET_LIST_REQUEST },
        { type: ActionTypes.GET_LIST_FAILURE },
      ];
      const store = mockStore();

      return store.dispatch(ActionTypes.getListOfItems(1)).then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expected);
      });
    });
  });
});
