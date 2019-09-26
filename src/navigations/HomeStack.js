import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import MyVehicleListScreen from "@screens/MyVehicleListScreen";
import SampleScreen from "@screens/SampleScreen";
import TabBarIcon from "@components/TabBarIcon";

/*** 1. CONFIG(PLATFORM등) 설정 ***/
const defaultNavigationOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  }
};

/*** 2. Navigator정의 ***/
const HomeStack = createStackNavigator(
  {
    Home: MyVehicleListScreen, // 홈
    VehicleDetail: SampleScreen // 자동차 상세
  },
  {
    defaultNavigationOptions // navigation Option
  }
);

/*** 3. NAVIGATOR 옵션 정의 ***/
HomeStack.navigationOptions = {
  tabBarLabel: "MyCars",
  tabBarIcon: ({ focused, horizontal, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-car" : "ios-car"}
    />
  )
};

export default HomeStack;
