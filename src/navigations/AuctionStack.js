import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import SampleScreen from "../screens/SampleScreen";
import TabBarIcon from "../components/TabBarIcon";

/*** 1. CONFIG(PLATFORM등) 설정 ***/
const defaultNavigationOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  }
};

/*** 2. Navigator정의 ***/
const AuctionStack = createStackNavigator(
  {
    AuctionList: SampleScreen, // Auction 리스트
    VehicleDetail: SampleScreen // 자동차 상세
  },
  {
    defaultNavigationOptions
  }
);

/*** 3. NAVIGATOR 옵션 정의 ***/
AuctionStack.navigationOptions = {
  tabBarLabel: "Auction",
  tabBarIcon: ({ focused, horizontal, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-trending-up" : "ios-trending-up"}
    />
  )
};

export default AuctionStack;
