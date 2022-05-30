import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
const Splash = ({navigation}) => {
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('storage_token');
      console.log('value is', value);
      if (value !== null) {
        console.log('value', value);
        navigation.navigate('App');
      } else {
        navigation.navigate('Login');
      }
    } catch (e) {
      navigation.navigate('Login');
      console.log('error while fetch token', e);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
