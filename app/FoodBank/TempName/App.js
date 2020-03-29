//This is an example code for Bottom Navigation//
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import DetailsScreen from './screens/DetailsScreen';
import LogIn from './screens/LogIn';
import MapScreen from './screens/MapScreen';
const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#fc0703',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);
const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
    Login: { screen: LogIn },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#fc0703',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  }
);
const ProfileStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Login: { screen: LogIn },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#fc0703',
      },
      headerTintColor: '#FFFFFF',
      title: 'Profile',
      //Header title
    },
  }
);

const MapStack = createStackNavigator(
  {
    Map: { screen: MapScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fc0303',
      },
      headerTintColor: '#FFFFFF',
      title: 'Map',
      //Header title
    }
  }
);


const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Profile: { screen: ProfileStack},
    Settings: { screen: SettingsStack },
    Map: { screen: MapStack},
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }else if (routeName === 'Profile') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }else if (routeName === 'Map') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fc0703',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);