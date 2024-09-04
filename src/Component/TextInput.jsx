import React from 'react';
import { TextInput } from 'react-native-paper';
import styles from '../styles/GlobalStyles';

const MyComponent = ({ label, onChangeText, keyboardType, secureTextEntry }) => {
  return (
    <TextInput
      label={label}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry} 
      style={styles.label}
      
    />
  );
};

export default MyComponent;
