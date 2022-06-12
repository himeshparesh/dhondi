import React from 'react';
import {LogBox, Image} from 'react-native';
import {appColors} from './src/colors/colors';
import {appImages} from './src/images/images';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './src/screens/Home';
import Search from './src/screens/search';

LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs(); //Ignore all log notifications

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,

      navigationOptions: {
        tabBarOptions: {
          showLabel: false,
        },

        tabBarIcon: ({focused}) => {
          let navImg = focused ? appImages.home : appImages.home;
          return <Image source={navImg} style={{height: 24, width: 24}} />;
        },
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false,
        },

        tabBarIcon: ({focused}) => {
          let navImg = focused ? appImages.search : appImages.search;
          return <Image source={navImg} style={{height: 24, width: 24}} />;
        },
      },
    },
  },

  {
    initialRouteName: 'Search',
    index: '0',
    barStyle: {backgroundColor: appColors.white},
    labeled: false,
  },
);

const AppNavigator = createStackNavigator(
  {
    App: {
      screen: AppStack,
    },
  },
  {
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
