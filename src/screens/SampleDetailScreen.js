import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class SampleDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30, color: "black" }}>상세 스크린!</Text>

        <TouchableOpacity>
          <Text style={{ fontSize: 30, color: "blue" }}>
            디테일의 디테일가기!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 30, color: "orange" }}>뒤로가기!</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 30, color: "red" }}>처음으로 가기!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
