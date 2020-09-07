import 'react-native-gesture-handler';
import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import RootNavigator from './src/navigator/RootNavigator';
import {store, persistor} from './src/store/configureStore';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
