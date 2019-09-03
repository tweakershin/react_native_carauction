import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";
import MyCarListScreen from "./src/screens/MyCarListScreen";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

const CarListStack = createStackNavigator({
  MyCarList: {
    screen: MyCarListScreen
  }
});

const StackContainer = createAppContainer(CarListStack);

const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    CarListStack: CarListStack
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
