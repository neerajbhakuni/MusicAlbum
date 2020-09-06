import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';

import RootStackNavigator from './RootStackNavigator';

const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
