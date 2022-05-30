import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const onPressLogin = () => {
    if (validation()) {
      let token = email + password;
      console.log('token', token);
      storeData(token);
      navigation.navigate('Home');
    }
  };

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('storage_token', value);
    } catch (e) {
      console.log('Error while storing token', e);
    }
  };

  const validation = () => {
    if (email.length == 0 && email.trim() == '') {
      console.log('enter email', email);
      return false;
    } else if (password.length == 0 && password.trim() == '') {
      console.log('enter password', password);
      return false;
    }
    return true;
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
      }}>
      <TextInput
        placeholder="Email"
        onChangeText={text => {
          setemail(text);
        }}
        style={{
          borderBottomColor: 'blue',
          borderBottomWidth: 1,
          width: '100%',
          paddingVertical: 10,
        }}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => {
          setpassword(text);
        }}
        style={{
          borderBottomColor: 'blue',
          borderBottomWidth: 1,
          width: '100%',
          paddingVertical: 10,
        }}
      />
      <TouchableOpacity
        onPress={onPressLogin}
        style={{
          borderRadius: 30,
          borderWidth: 1,
          borderColor: 'blue',
          width: '90%',
          alignItems: 'center',
          paddingVertical: 15,
          marginVertical: 30,
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
