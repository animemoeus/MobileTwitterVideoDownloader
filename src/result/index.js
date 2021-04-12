import React from 'react';
import {View, Text, Image} from 'react-native';

function Loading() {
  return <Text>Loading</Text>;
}

function Success(props) {
  console.log(props.data.thumbnail);
  return (
    <View>
      <Text>Success</Text>
      <Image
        source={{uri: props.data.thumbnail}}
        style={{height: 50, width: 50}}
      />
      <Text>ahaha</Text>
    </View>
  );
}

function Failed() {
  return <Text>Failed</Text>;
}

export {Loading, Success, Failed};
