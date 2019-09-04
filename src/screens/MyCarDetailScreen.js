import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import IconText from "../components/IconText";
import { Ionicons } from "@expo/vector-icons";

import AuctionList from "../components/AuctionList";

import { fetchCarDetail, auctionListByCar } from "../apis/cars";
import { fetchAuctionList } from "../apis/auction";
export default class MyCarDetailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myCar: this.props.navigation.getParam("item")
    };
    this.fetchCar();
  }

  fetchCar = async () => {
    car = await fetchCarDetail(this.state.myCar.vin);
    this.setState({ myCar: car });

    auctionList = await auctionListByCar(car);
    console.log(auctionList);
    this.setState({ auctionList: auctionList });
  };

  static navigationOptions = ({ navigation }) => {
    const item = navigation.getParam("item");
    return {
      title: item.model
    };
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", width: "100%" }}>
        <Text>detail!</Text>
        <View>
          <Image
            source={{ uri: this.state.myCar.image }}
            style={{ height: 100 }}
          />
        </View>

        <View style={{ flexDirection: "row", margin: 20 }}>
          <View style={{ flex: 1 }}>
            <IconText
              iconName="ios-barcode"
              text={this.state.myCar.vin}
              size={20}
            />

            <IconText
              iconName="logo-model-s"
              text={this.state.myCar.model}
              size={20}
            />
          </View>

          <View style={{ flex: 1 }}>
            <IconText
              iconName="ios-construct"
              text={this.state.myCar.brand}
              size={20}
            />
            <IconText
              iconName="ios-calendar"
              text={this.state.myCar.year}
              size={20}
            />
          </View>
        </View>

        <View>
          <AuctionList auctionList={this.state.auctionList} />
        </View>
      </View>
    );
  }
}
