import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";

import SampleHomeScreen from "./src/screens/SampleHomeScreen";
import SampleDetailScreen from "./src/screens/SampleDetailScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<SampleHomeScreen />*/}
      <SampleDetailScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
