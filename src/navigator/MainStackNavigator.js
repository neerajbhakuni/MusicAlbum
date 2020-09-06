import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import AlbumDetail from '../screens/AlbumDetail';

import NavigatorOptions from './NavigatorOptions';

const {Navigator, Screen} = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={NavigatorOptions}
      />
      <Screen
        name="AlbumDetail"
        component={AlbumDetail}
        options={NavigatorOptions}
      />
    </Navigator>
  );
};

export default MainStackNavigator;
