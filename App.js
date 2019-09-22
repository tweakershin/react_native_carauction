import React from "react";
import { Text, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "./src/screens/LoginScreen";

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import TabBarIcon from "./src/components/TabBarIcon";
import MyVehicleListScreen from "./src/screens/MyVehicleListScreen";

/*** 1. CONFIG(PLATFORM등) 설정 ***/
const defaultNavigationOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  }
};

const DefaultScreen = props => {
  return (
    <View>
      <Text>Screen 구조를 위한 SampleScreen</Text>
    </View>
  );
};

/*** 2. Navigator정의 ***/
const HomeStack = createStackNavigator(
  {
    Home: MyVehicleListScreen, // 홈
    VehicleDetail: DefaultScreen // 자동차 상세
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

/*** 2. Navigator정의 ***/
const AuctionStack = createStackNavigator(
  {
    AuctionList: DefaultScreen, // Auction 리스트
    VehicleDetail: DefaultScreen // 자동차 상세
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

const SettingsStack = createStackNavigator(
  {
    Settings: DefaultScreen // 세팅 스크린
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

const MainTab = createBottomTabNavigator(
  {
    MyCars: HomeStack,
    Auction: AuctionStack,
    Settings: SettingsStack
  },
  {
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const VehicleEditorStack = createStackNavigator({
  VehicleEditor: DefaultScreen // 차 수정 스크린
});

const ListingEditorStack = createStackNavigator({
  ListingEditor: DefaultScreen // 옥션 리스팅 수정 스크린
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
