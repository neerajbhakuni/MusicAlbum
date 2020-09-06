import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import AlbumArt from '../components/AlbumArt';

const AlbumDetail = ({
  navigation: {navigate},
  route: {
    params: {album},
  },
}) => {
  const onPlayPreview = () => navigate('MusicPlayer', {album});

  return (
    <View style={styles.container}>
      <AlbumArt
        uri={album.artworkUrl100}
        trackName={album.trackName}
        collection={album.collectionName}
      />
      <Text style={styles.artist}>{album.artistName}</Text>
      <Text style={styles.genreName}>
        {`${album.primaryGenreName} - ${album.country}`}
      </Text>
      <TouchableOpacity style={styles.background} onPress={onPlayPreview}>
        <Text style={styles.preview}>Preview</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf3f6',
    marginHorizontal: 16,
  },
  artist: {
    color: '#3474EB',
    fontSize: 22,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'center',
    marginTop: 10,
  },
  genreName: {
    color: '#211B1A',
    fontSize: 18,
    fontFamily: 'Quicksand-Light',
    textAlign: 'center',
  },
  background: {
    marginTop: 20,
    backgroundColor: '#546BD6',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '50%',
    borderRadius: 8,
  },
  preview: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'center',
  },
});
