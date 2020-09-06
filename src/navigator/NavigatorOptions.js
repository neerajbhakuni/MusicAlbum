import React from 'react';
import {Image, Platform, StyleSheet} from 'react-native';
import {AssetIcon} from '../utils/AssetIcon';

const NavigatorOptions = () => ({
  headerBackTitleVisible: false,
  headerTitle: () => (
    <Image style={styles.logoIcon} source={AssetIcon.appLogo} />
  ),
  headerBackImage: () => (
    <Image style={styles.backIcon} source={AssetIcon.back} />
  ),
});

const styles = StyleSheet.create({
  logoIcon: {
    alignSelf: 'center',
  },
  backIcon: {
    alignSelf: 'center',
    marginLeft: Platform.OS === 'ios' ? 14 : 0,
    height: 25,
    width: 25,
  },
});

export default NavigatorOptions;
