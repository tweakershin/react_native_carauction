import React, { Component } from "react";

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default class CarItem extends Component {
  static defaultProps = {
    item: {
      vin: "",
      manufacturer: "",
      model: "",
      year: 2000,
      image: "",
      price: ""
    },
    style: {},
    onPress: () => console.log("onPress")
  };

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={this.props.onPress}
      >
        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: 30 }}>{this.props.item.vin}</Text>

          <Image
            source={{ uri: this.props.item.image }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View style={{ flex: 5 }}>
          <Text>{this.props.item.owner}</Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700"
            }}
          >
            {this.props.item.model}
          </Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={{
                marginRight: 4,
                marginTop: 4
              }}
            >
              {this.props.item.manufacturer}
            </Text>
            <Text
              style={{
                marginRight: 4,
                marginTop: 4
              }}
            >
              {this.props.item.year}
            </Text>
          </View>
        </View>

        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 22, paddingTop: 10 }}>
            {this.props.item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%"
    // borderWidth:1
  }
});
