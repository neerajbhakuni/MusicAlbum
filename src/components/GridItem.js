import React from 'react';
import {
  Image,
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const GridItem = ({album, onPressAlbum}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressAlbum(album)}>
      <>
        <Image
          style={styles.imageThumbnail}
          source={{uri: album.artworkUrl100}}
        />
        <Text style={styles.title}>{album.trackName}</Text>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#00000029',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 4,
    elevation: 5,
  },
  imageThumbnail: {
    aspectRatio: 1.2,
    borderTopLeftRadius: Platform.OS === 'ios' ? 4 : 1,
    borderTopRightRadius: Platform.OS === 'ios' ? 4 : 1,
    resizeMode: 'stretch',
  },
  title: {
    marginVertical: 6,
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'center',
  },
});

export default GridItem;
