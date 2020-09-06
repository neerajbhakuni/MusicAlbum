import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {AssetIcon} from '../utils/AssetIcon';

const TrackControl = ({
  paused,
  onPressPlay,
  onBack,
  onForward,
  forwardDisabled,
  disabled,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onBack}>
      <Image source={AssetIcon.backward} />
    </TouchableOpacity>
    <TouchableOpacity disabled={disabled} onPress={onPressPlay}>
      <View style={styles.playButton}>
        <Image source={!paused ? AssetIcon.pause : AssetIcon.play} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={onForward} disabled={forwardDisabled}>
      <Image
        style={[forwardDisabled && styles.off]}
        source={AssetIcon.forward}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.3,
  },
});

export default TrackControl;
