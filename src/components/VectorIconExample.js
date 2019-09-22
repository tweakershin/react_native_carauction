import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  EvilIcons,
  AntDesign
} from "@expo/vector-icons";

export default class VectorIconExample extends Component {
  render() {
    return (
      <View>
        <View>
          <Ionicons name="ios-person" size={100} color="gray" />
        </View>
        <View>
          <MaterialIcons name="3d-rotation" size={100} color="gray" />
        </View>
        <View>
          <EvilIcons name="bell" size={100} color="gray" />
        </View>
        <View>
          <AntDesign name="bars" size={100} color="gray" />
        </View>
      </View>
    );
  }
}
