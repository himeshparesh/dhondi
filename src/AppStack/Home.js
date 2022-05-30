import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

const Home = ({navigation}) => {
  useEffect(() => {
    getData();
    requestApiData();
  }, []);

  const [dataList, setdataList] = useState([]);
  const [token, settoken] = useState('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('storage_token');
      if (value !== null) {
        console.log('value', value);
        settoken(value);
      }
    } catch (e) {
      console.log('error while fetch token', e);
    }
  };

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
    navigation.navigate('Login');
  };

  const requestApiData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(res => res.json())
      .then(respose => {
        console.log('response of api', respose);
        setdataList(respose);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>{`The token is:${token}`}</Text>
      <TouchableOpacity onPress={clearAsyncStorage}>
        <Text style={{color: 'red'}}>Clear async storage</Text>
      </TouchableOpacity>

      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={{marginHorizontal: 10}}
          data={dataList}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CustomItems item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const CustomItems = props => (
  <View
    style={{
      marginVertical: 10,
      borderRadius: 10,
      backgroundColor: 'grey',
      padding: 5,
    }}>
    <Text>{`Status: ${props.item.completed}`}</Text>
    <Text>{`Title: ${props.item.title}`}</Text>
  </View>
);
