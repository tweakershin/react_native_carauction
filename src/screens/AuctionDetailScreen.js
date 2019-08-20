import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import IconText from "../components/IconText";
import AuctionList from "../components/AuctionList";

export default class AuctionDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: this.props.navigation.getParam("item")
    };
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", width: "100%" }}>
        <Text>detail!</Text>
        <View>
          <Image
            source={{ uri: this.state.car.image }}
            style={{ height: 100 }}
          />
        </View>

        <View style={{ flexDirection: "row", margin: 20 }}>
          <View style={{ flex: 1 }}>
            <IconText
              iconName="ios-barcode"
              text={this.state.car.vin}
              size={20}
            />

            <IconText
              iconName="logo-model-s"
              text={this.state.car.model}
              size={20}
            />
          </View>

          <View style={{ flex: 1 }}>
            <IconText
              iconName="ios-construct"
              text={this.state.car.manufacturer}
              size={20}
            />
            <IconText
              iconName="ios-calendar"
              text={this.state.car.year}
              size={20}
            />
          </View>
        </View>

        <View>
          <AuctionList />
        </View>
      </View>
    );
  }
}
