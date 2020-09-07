import {SEARCH_INITIAL_STATE} from './defaults';

export const types = {
  SEARCH_FETCH_REQUESTED: 'ALBUM/SEARCH_FETCH_REQUESTED',
  SEARCH_FETCH_SUCCEEDED: 'ALBUM/SEARCH_FETCH_SUCCEEDED',
  SEARCH_FETCH_ERROR: 'ALBUM/SEARCH_ALBUM_ERROR',
};

export const reducer = (state = SEARCH_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SEARCH_FETCH_REQUESTED:
      return {...state, results: [], error: null, isLoading: true};
    case types.SEARCH_FETCH_SUCCEEDED:
      return {
        ...state,
        results: action.payload,
        error: null,
        isLoading: false,
      };
    case types.SEARCH_FETCH_ERROR:
      return {...state, error: action.payload, isLoading: false};

    default:
      return {...state};
  }
};

export const actions = {
  searchAlbum(payload) {
    return {
      type: types.SEARCH_FETCH_REQUESTED,
      payload,
    };
  },

  searchFetchSuccess(payload) {
    return {
      type: types.SEARCH_FETCH_SUCCEEDED,
      payload,
    };
  },

  searchFetchError(payload) {
    return {
      type: types.SEARCH_FETCH_ERROR,
      payload,
    };
  },
};
