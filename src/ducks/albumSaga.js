import {call, put, takeLatest} from 'redux-saga/effects';
import {types, actions as albumActions} from './album';

import {fetchSearchAlbum} from '../network/searchAlbum';

function* fetchAlbumRequest(action) {
  try {
    const {data} = yield call(fetchSearchAlbum, action.payload);
    yield put(albumActions.searchFetchSuccess(data.results));
  } catch (error) {
    yield put(albumActions.searchFetchError(error));
  }
}

export function* loadAlbumSaga() {
  yield takeLatest(types.SEARCH_FETCH_REQUESTED, fetchAlbumRequest);
}
