import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainStackNavigator from './MainStackNavigator';
import MusicPlayer from '../screens/MusicPlayer';
import NavigatorOptions from './NavigatorOptions';

const {Navigator, Screen} = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Navigator mode="modal">
      <Screen
        name="Main"
        component={MainStackNavigator}
        options={{headerShown: false}}
      />
      <Screen
        name="MusicPlayer"
        component={MusicPlayer}
        options={NavigatorOptions}
      />
    </Navigator>
  );
};

export default RootStackNavigator;
