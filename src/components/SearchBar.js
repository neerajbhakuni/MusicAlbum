import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

import {AssetIcon} from '../utils/AssetIcon';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Image style={styles.searchIcon} source={AssetIcon.search} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    height: 44,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  searchIcon: {
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
  },
});

export default SearchBar;
