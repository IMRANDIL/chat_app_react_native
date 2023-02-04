import React, {useEffect, useState, createContext, useContext} from 'react';
import config from './config/dotenvconfig';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import ChatScreen from './screens/Chat';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {View, ActivityIndicator} from 'react-native';
import {onAuthStateChanged} from 'firebase/auth';

const Stack = createNativeStackNavigator();

const AuthenticatedUserContext = createContext({});
const AuthenticatedUserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{user, setUser}}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
export default function App(props) {
  useEffect(() => {
    // console.log(config.API_KEY);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitleAlign: 'center', headerShown: false}}
          navigation={props.navigation}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerTitleAlign: 'center', headerShown: false}}
          navigation={props.navigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
