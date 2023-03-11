import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
