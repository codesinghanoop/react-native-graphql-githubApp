/* @flow */

import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import tabBarIcon from '@components/tabBarIcon';
import ProfileList from '@scene/ProfileList';
import FavList from '@scene/FavList';
import Login from '@scene/Login'

const MainStack = createBottomTabNavigator(
  {
    ProfileList: {
      screen: ProfileList,
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
    initialRouteName: 'ProfileList',
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
