import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import config from './config/dotenvconfig';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import ChatScreen from './screens/Chat';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createNativeStackNavigator();

export default function App(props) {
  useEffect(() => {
    // console.log(config.API_KEY);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerTitleAlign: 'center', headerShown: false}}
          navigation={props.navigation}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerTitleAlign: 'center', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
