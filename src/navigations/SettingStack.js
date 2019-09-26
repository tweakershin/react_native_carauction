import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import MyVehicleListScreen from "../screens/MyVehicleListScreen";
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
const SettingsStack = createStackNavigator(
  {
    Settings: SampleScreen // 세팅 스크린
  },
  {
    defaultNavigationOptions
  }
);

/*** 3. NAVIGATOR 옵션 정의 ***/
SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused, horizontal, tintColor }) => (
    <TabBarIcon
      focused={focused}
      color={tintColor}
      name={Platform.OS === "ios" ? "ios-settings" : "ios-settings"}
    />
  )
};

export default SettingsStack;
