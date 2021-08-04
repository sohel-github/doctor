import React, { Component } from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Splash from './Components/Splash';
import Signin from './Components/Auth/Signin';
import Signup from './Components/Auth/Signup';
import Forget from './Components/Auth/Forget';

import Home from './Components/Dashboard/Home/Home';
import Account from './Components/Dashboard/Account/Account';
import Menu from './Components/Dashboard/Menu/Menu';

import FindDoctors from './Components/Dashboard/Appointment/FindDoctors';
import SpecialistList from './Components/Dashboard/Appointment/SpecialistList';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  render() {
    return <NavigationContainer />
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel:"Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={20} color={tintColor}/>
      )
    },
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel:"Account",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="wrench" size={20} color={tintColor}/>
      )
    },
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      tabBarLabel:"Menu",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="bars" size={20} color={tintColor}/>
      )
    },
  }
}, {
  tabBarOptions: {
    activeTintColor: '#D4AF37',
    inactiveTintColor: 'gray',
  },
  navigationOptions: {
    headerShown: false
  },
});

const AppNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
  },
  Signin: {
    screen: Signin,
  },
  Signup: {
    screen: Signup,
  },
  Forget: {
    screen: Forget,
  },
  Home: {
    screen: TabNavigator,
  },
  FindDoctors: {
    screen: FindDoctors
  },
  SpecialistList: {
    screen: SpecialistList
  }
},{
  initialRouteName: 'Splash',
  defaultNavigationOptions: {
    headerBackTitle: null,
  },
});

const NavigationContainer = createAppContainer(AppNavigator);
