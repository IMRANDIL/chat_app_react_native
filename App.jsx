import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import config from './config/dotenvconfig';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import ChatScreen from './screens/Chat';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    // console.log(config.API_KEY);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
