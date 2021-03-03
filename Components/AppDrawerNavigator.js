import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../Screens/SettingScreen';
import MyDonationScreen from '../Screens/MyDonationScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import MyReceivedBooksScreen from '../Screens/MyReceivedBooksScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppTabNavigator,
    navigationOptions: {drawerIcon: ({tintColor})=><Ionicons name="ios-home" size={20} color={tintColor} />}
  },
  "My Donations": {
    screen: MyDonationScreen,
    navigationOptions: {drawerIcon: ({tintColor})=><FontAwesome5 name="donate" size={18} color={tintColor} />}
  },
  Notifications: {
    screen: NotificationScreen,
    navigationOptions: {drawerIcon: ({tintColor})=><Ionicons name="ios-notifications" size={20} color={tintColor} />}
  },
  MyReceivedBooks: {
    screen: MyReceivedBooksScreen,
    navigationOptions: {drawerIcon: ({tintColor})=><Ionicons name="ios-book" size={20} color={tintColor} />}
  },
  Settings: {
    screen: SettingScreen,
    navigationOptions: {drawerIcon: ({tintColor})=><Ionicons name="ios-settings" size={20} color={tintColor} />}
  },
},
{
  contentComponent: CustomSideBarMenu,
}, {
  initialRouteName: 'Home'
})