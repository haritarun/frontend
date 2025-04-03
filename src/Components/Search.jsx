import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
const Search = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#888"
      />

      <TouchableOpacity onPress={() => console.log('Filter pressed')} >
        <Icon name="filter-list" size={20} color="#888" style={styles.filterIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom:10,
    marginTop: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterIcon: {
    marginLeft: 10,
  },
});

export default Search;