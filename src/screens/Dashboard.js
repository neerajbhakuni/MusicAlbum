import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {connect} from 'react-redux';

import SearchBar from '../components/SearchBar';
import GridItem from '../components/GridItem';

import {actions as albumActions} from '../ducks/album';

const Dashboard = ({navigation: {navigate}, results, searchAlbum}) => {
  const [term, setTerm] = useState('Jack Johnson');
  useEffect(() => {
    searchAlbum({term});
  }, [searchAlbum, term]);

  const onPressAlbum = (album) => navigate('AlbumDetail', {album});

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchAlbum({term})}
      />
      <FlatList
        data={results}
        renderItem={({item}) => (
          <GridItem album={item} onPressAlbum={onPressAlbum} />
        )}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf3f6',
  },
});

const mapStateToProps = ({album}) => ({
  results: album.results,
});

const mapDispatchToProps = (dispatch) => ({
  searchAlbum: (payload) => dispatch(albumActions.searchAlbum(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
