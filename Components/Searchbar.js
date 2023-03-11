import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleSubmit = () => {
    onSubmit(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Search"
        placeholderTextColor="#999"
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Icon name="search" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={{ height: 25, width: 2, backgroundColor: 'white' }}></View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Icon name="microphone" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 45,
    backgroundColor:'#1D252E',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  button: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 25,
    height: 36,
  },
});

export default SearchBar;
