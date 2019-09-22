import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class SampleHomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30, color: "red" }}>홈스크린!</Text>

        <TouchableOpacity>
          <Text style={{ fontSize: 30, color: "green" }}>디테일가기!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
