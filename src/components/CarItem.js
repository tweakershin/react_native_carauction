import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class CarItem extends Component {
  static defaultProps = {
    onPress: this._onPress,
    item: {
      image:
        "https://cdn.pixabay.com/photo/2017/10/05/05/01/car-2818384_1280.png",
      model: "E Class",
      brand: "Benz",
      year: 2017
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  _onPress() {
    return null;
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          height: 90,
          flexDirection: "row",
          alignItems: "center"
        }}
        onPress={this.props.onPress}
      >
        <Image
          style={{
            height: 90,
            width: 90,
            resizeMode: "contain",
            marginRight: 10,
            marginLeft: 20
          }}
          source={{
            uri: this.props.item.image
          }}
          //
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 22, color: "#333", fontWeight: "400" }}>
            {this.props.item.model}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name={"ios-calendar"}
              size={15}
              style={{ marginRight: 5 }}
              color={"#666"}
            />
            <Text style={{ fontSize: 12, color: "#333", fontWeight: "300" }}>
              {this.props.item.brand}
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 12,
                color: "#666",
                fontWeight: "400"
              }}
            >
              {this.props.item.year}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
