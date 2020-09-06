import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';

const AlbumArt = ({uri, trackName, collection}) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.imageThumbnail} source={{uri}} />
      </View>
      <Text style={styles.trackName}>{trackName}</Text>
      <Text style={styles.collection}>{collection}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 200,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#00000029',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 4,
    elevation: 5,
  },
  imageThumbnail: {
    resizeMode: 'stretch',
    aspectRatio: 1,
    borderTopLeftRadius: Platform.OS === 'ios' ? 4 : 1,
    borderTopRightRadius: Platform.OS === 'ios' ? 4 : 1,
  },
  trackName: {
    fontSize: 20,
    fontFamily: 'Quicksand-Light',
    textAlign: 'center',
  },
  collection: {
    fontSize: 22,
    fontFamily: 'Quicksand-Medium',
    textAlign: 'center',
  },
});

export default AlbumArt;
