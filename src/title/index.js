import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Title() {
  return <Text style={styles.heading}>Twitter Video Downloader</Text>;
}
const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 77,
  },
});

export default Title;
