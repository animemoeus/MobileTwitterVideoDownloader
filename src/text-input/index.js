import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function Input(props) {
  const handleChangeText = e => {
    props.handleInput(e);
  };

  return (
    <TextInput
      style={styles.main}
      placeholder="enter url here"
      onChangeText={e => handleChangeText(e)}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    borderRadius: 6,
    height: 50,
    margin: 10,
  },
});

export default Input;
