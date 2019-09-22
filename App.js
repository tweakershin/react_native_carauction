import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";
import MyCarListScreen from "./src/screens/MyCarListScreen";
import MyCarDetailScreen from "./src/screens/MyCarDetailScreen";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

const defaultNavigationOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  }
};

const CarStack = createStackNavigator({
  MyCarList: {
    screen: MyCarListScreen
  },
  MyCarDetail: {
    screen: MyCarDetailScreen
  }
});

const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    CarStack: CarStack
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return <AppContainer />;
}
