/* @flow */
import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import tabBarIcon from '@components/Icon';
import ProfileList from '@scene/ProfileList';
import FavList from '@scene/FavList';
import Login from '@scene/Login'
import ProfileDetails from '@scene/ProfileList/ProfileDetails'

const UserListStack = createStackNavigator(
  {
    ProfileList: {
      screen: ProfileList,
    },
    ProfileDetails: {
      screen: ProfileDetails,
    },
  },
  {
    initialRouteName: 'ProfileList',
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
)

const MainStack = createBottomTabNavigator(
  {
    UserList: {
      screen: UserListStack,
      navigationOptions: {
        tabBarIcon: tabBarIcon('home'),
        title: 'User List',
      },
    },
    FavList: {
      screen: FavList,
      navigationOptions: {
        tabBarIcon: tabBarIcon('show-chart'),
        title: 'Favorite List',
      },
    },
  },
  {
    initialRouteName: 'UserList',
    shifting: false,
    keyboardHidesNavigationBar: false,
  }
);



export default createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: MainStack,
        navigationOptions: {
          header: null,
        },
      },
      Login: {
        screen: Login,
      },
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none',
      mode: 'modal',
      defaultNavigationOptions: {
        gesturesEnabled: false,
      },
    }
  )
);
