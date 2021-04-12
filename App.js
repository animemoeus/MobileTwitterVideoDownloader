import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import axios from 'axios';

import Title from './src/title';
import Input from './src/text-input';
import {DownloadButton} from './src/button';
import {Loading, Success, Failed} from './src/result';

function App() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');
  const [status, setStatus] = useState(undefined);

  const handleInput = e => {
    setUrl(
      'https://api.animemoe.us/twitter/video-downloader/?id=1320209719902957568',
    );
  };

  const handleButton = () => {
    setStatus('loading');

    console.log(url);
    axios
      .get(url)
      .then(result => {
        setData(result.data.data);
        setStatus('success');
      })
      .catch(err => {
        console.log(err);
        setStatus('failed');
      });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ScrollView style={styles.bgBlue}>
      <Title />

      <Input handleInput={handleInput} />
      <DownloadButton handleButton={handleButton} />

      {status === 'loading' && <Loading />}
      {status === 'success' && <Success data={data} />}
      {status === 'failed' && <Failed />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bgBlue: {
    backgroundColor: '#4d8eff',
  },
});

export default App;
