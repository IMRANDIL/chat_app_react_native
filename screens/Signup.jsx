import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Alert,
  Keyboard,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
const backImage = require('../assets/backImage2.png');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  const handleTabPress = () => {
    Keyboard.dismiss();
    input2Ref.current.focus();
  };

  const onHandleLogin = async () => {
    try {
      if (email !== '' || password !== '') {
        setIsLoading(true);
        const authentication = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        if (authentication) {
          console.log('login successful');
          setIsLoading(false);
        }
      }
    } catch (error) {
      Alert.alert('Login error', error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          onSubmitEditing={handleTabPress}
          autoFocus={true}
          value={email}
          ref={input1Ref}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          ref={input2Ref}
          onSubmitEditing={handleTabPress}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onHandleLogin}
          disabled={!email || !password}>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>
            {' '}
            Log In
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#f57c00', fontWeight: '600', fontSize: 14}}>
              {' '}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f57c00',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'orange',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  input: {
    backgroundColor: '#F6F7FB',
    height: 58,
    marginBottom: 15,
    fontSize: 20,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: deviceWidth,
    height: 340,
    position: 'absolute',
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: deviceWidth,
    height: deviceHeight * 0.75,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#f57c00',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
