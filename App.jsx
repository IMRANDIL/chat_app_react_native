import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import config from './config/dotenvconfig';
export default function App() {
  useEffect(() => {
    console.log(config.apiKey);
  }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
