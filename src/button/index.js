import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function DownloadButton(props) {
  const handlePress = () => {
    props.handleButton();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.buttonText}>Download</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    backgroundColor: '#ffc054',
    borderRadius: 5,
    height: 50,
  },
  buttonText: {
    fontSize: 25,
    marginVertical: 10,
    alignSelf: 'center',
  },
});

export {DownloadButton};
