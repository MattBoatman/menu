import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as ActionTypes from './CategoryActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('CategoryActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  describe('getListOfCategories', () => {
    it('success: get request and success action', () => {
      fetchMock.getOnce(
        'https://s3.amazonaws.com/staticresourcesformenu/menuCategories.json',
        {
          resourceList: [
            { id: 1, type: 'taco', imageUrl: 'www.matthewboatman.com' },
          ],
        },
      );
      const expected = [
        { type: ActionTypes.GET_CATEGORY_LIST_REQUEST },
        {
          type: ActionTypes.GET_CATEGORY_LIST_SUCCESS,
          categories: [
            { id: 1, type: 'taco', imageUrl: 'www.matthewboatman.com' },
          ],
        },
      ];
      const store = mockStore();

      return store.dispatch(ActionTypes.getListOfCategories()).then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expected);
      });
    });
    it('failure: get request and failure action', () => {
      fetchMock.getOnce(
        'https://s3.amazonaws.com/staticresourcesformenu/menuCategories.json',
        { status: 404 },
      );
      const expected = [
        { type: ActionTypes.GET_CATEGORY_LIST_REQUEST },
        { type: ActionTypes.GET_CATEGORY_LIST_FAILURE },
      ];
      const store = mockStore();

      return store.dispatch(ActionTypes.getListOfCategories()).then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expected);
      });
    });
  });
});
