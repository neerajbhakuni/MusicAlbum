import {actions, reducer, types} from '../src/ducks/album';
import {SEARCH_INITIAL_STATE} from '../src/ducks/defaults';

describe('searchAlbum()', function () {
  it('should dispatch the REQUEST action when the action is dispatched', function () {
    const action = actions.searchAlbum({
      term: 'John Jaskson',
    });
    expect(action.type).toEqual(types.SEARCH_FETCH_REQUESTED);
  });
});

describe('searchFetchSuccess()', function () {
  it('should dispatch the REQUEST Success action', function () {
    const action = actions.searchFetchSuccess({
      results: [{item: 'foo'}, {item: 'goo'}],
    });
    expect(action.type).toEqual(types.SEARCH_FETCH_SUCCEEDED);
  });
});

describe('searchFetchError()', function () {
  it('should dispatch the REQUEST Failure action', function () {
    const action = actions.searchFetchError('Error Message');
    expect(action.type).toEqual(types.SEARCH_FETCH_ERROR);
  });

  it('should store the Error Message', function () {
    const action = actions.searchFetchError('Error Message');
    expect(action.payload).toEqual('Error Message');
  });
});

describe('Initial State for album reducer', function () {
  it('should store initial state', function () {
    const initial = reducer(undefined, {
      type: '',
    });
    expect(initial.isLoading).toEqual(false);
    expect(initial.results).toEqual([]);
    expect(initial.error).toEqual(null);
  });
});

describe('Load Search Album Request', function () {
  it('should set the loading property to `true` when the load search request is made', function () {
    const result = reducer(SEARCH_INITIAL_STATE, {
      type: types.SEARCH_FETCH_REQUESTED,
      payload: {term: 'John Jaskson'},
    });
    expect(result.isLoading).toEqual(true);
  });
});

describe('Search Album Succeeded Response', function () {
  it('should set the loading property to `false`', function () {
    const result = reducer(SEARCH_INITIAL_STATE, {
      type: types.SEARCH_FETCH_SUCCEEDED,
      payload: [{item: 'foo'}, {item: 'goo'}],
    });
    expect(result.isLoading).toEqual(false);
  });
  it('should set the results property to payload objects', function () {
    const payload = [{item: 'foo'}, {item: 'goo'}];
    const result = reducer(SEARCH_INITIAL_STATE, {
      type: types.SEARCH_FETCH_SUCCEEDED,
      payload,
    });
    expect(result.results).toEqual(payload);
  });
});

describe('Failed to fetch Search Album Request', function () {
  it('should store the error message', function () {
    const dummyError = 'data not available';
    const result = reducer(
      {loading: false},
      {
        type: types.SEARCH_FETCH_ERROR,
        payload: dummyError,
      },
    );
    expect(result.error).toEqual(dummyError);
  });
});
