import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";

import SampleHomeScreen from "./src/screens/SampleHomeScreen";
import SampleDetailScreen from "./src/screens/SampleDetailScreen";

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    SampleHome: SampleHomeScreen,
    SampleDetail: SampleDetailScreen
  },
  {
    initialRouteName: "SampleHome"
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
