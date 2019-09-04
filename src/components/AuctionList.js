import React from "react";
import { View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import MyButton from "./MyButton";
import CarList from "./CarList";
import CarItem from "./CarItem";

export default class AuctionList extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    auctionList: []
  };

  renderItem = ({ item }) => {
    if (!item.car.vin) {
      return <View></View>;
    }

    const carItem = {
      vin: item.car.vin,
      image: item.car.image,
      brand: item.car.brand,
      model: item.car.model,
      year: item.car.year,
      price: item.reservedPrice
    };
    return (
      <View>
        <CarItem item={carItem} />
      </View>
    );
  };

  render() {
    if (this.props.auctionList.length !== 0) {
      return (
        <View>
          <FlatList
            renderItem={this.renderItem}
            data={this.props.auctionList}
            keyExtractor={(item, index) => {
              return item.listingId;
            }}
          />
        </View>
      );
    } else {
      return (
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text
            style={{ textAlign: "center", fontWeight: "800", fontSize: 22 }}
          >
            진행중인 경매가 없습니다.
          </Text>
          <View>
            <MyButton iconName="ios-calendar" text="경매 등록" />
          </View>
        </View>
      );
    }
  }
}
