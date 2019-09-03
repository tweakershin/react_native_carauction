import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    }
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
