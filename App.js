import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/AuthStack/Login';
import Splash from './src/AuthStack/Splash';
import Home from './src/AppStack/Home';

const AuthNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
});

const SwitchStack = createSwitchNavigator({
  Auth: AuthNavigator,
  App: AppNavigator,
});

const AppContainer = createAppContainer(SwitchStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
