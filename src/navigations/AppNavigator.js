import React from 'react';

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import SampleScreen from "../screens/SampleScreen";
import LoginScreen from "../screens/LoginScreen";

import AuctionStack from "./AuctionStack";
import HomeStack from "./HomeStack";
import SettingStack from "./SettingStack";

/*** 1. CONFIG(PLATFORM등) 설정 ***/
const defaultNavigationOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  }
};

const MainTab = createBottomTabNavigator(
  {
    MyCars: HomeStack,
    Auction: AuctionStack,
    Settings: SettingStack
  },
  {
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const VehicleEditorStack = createStackNavigator({
  VehicleEditor: SampleScreen // 차 수정 스크린
});

const ListingEditorStack = createStackNavigator({
  ListingEditor: SampleScreen // 옥션 리스팅 수정 스크린
});

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainTab
    },
    ListingEditorStack,
    VehicleEditorStack,
    Login: LoginScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
