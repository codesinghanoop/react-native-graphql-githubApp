/* @flow */

import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import tabBarIcon from '@components/tabBarIcon';
import ProfileList from '@scene/containers/ProfileList';
import FavList from '@scenes/containers/FavList';
import Login from '@scenes/containers/Login'

const MainStack = createMaterialBottomTabNavigator(
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
      mode: 'modal',
      defaultNavigationOptions: {
        gesturesEnabled: false,
      },
    }
  )
);
