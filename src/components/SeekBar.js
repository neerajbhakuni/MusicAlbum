import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

const SeekBar = ({
  sliderValue,
  currentPosition,
  trackLength,
  onSlidingStart,
  onSeekComplete,
}) => {
  const timeConversion = (position, width, remain = 0) => {
    position = position + '';

    return position.length >= width
      ? position
      : new Array(width - position.length + 1).join(remain) + position;
  };

  const minutesAndSeconds = (position) => [
    timeConversion(Math.floor(position / 60), 2),
    timeConversion(position % 60, 2),
  ];

  const elapsedTime = minutesAndSeconds(currentPosition);
  const remainingTime = minutesAndSeconds(trackLength - currentPosition);

  return (
    <View style={styles.container}>
      <View style={styles.timerBackground}>
        <Text style={styles.text}>
          {elapsedTime[0] + ':' + ('0' + Math.floor(elapsedTime[1])).slice(-2)}
        </Text>
        <Text style={styles.text}>
          {trackLength > 1 &&
            '-' +
              remainingTime[0] +
              ':' +
              ('0' + Math.floor(remainingTime[1])).slice(-2)}
        </Text>
      </View>
      <Slider
        minimumValue={0}
        maximumValue={1}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeekComplete}
        value={sliderValue}
        minimumTrackTintColor="black"
        maximumTrackTintColor="black"
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  timerBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default SeekBar;
