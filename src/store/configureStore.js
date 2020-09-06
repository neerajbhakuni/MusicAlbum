import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {fork, all} from 'redux-saga/effects';

import {reducer as albumReducer} from '../ducks/album';

import {loadAlbumSaga} from '../ducks/albumSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  album: albumReducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const enhancer = applyMiddleware(...middlewares);
const _store = createStore(persistedReducer, {}, enhancer);

function* rootSaga() {
  yield all([fork(loadAlbumSaga)]);
}

// Run the saga
sagaMiddleware.run(rootSaga);

export const store = _store;
export const persistor = persistStore(store);
