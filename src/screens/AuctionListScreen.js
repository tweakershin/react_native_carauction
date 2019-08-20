import React, { Component } from "react";

import { View } from "react-native";
import CarList from "../components/CarList";

const mockAuctionData = [
  {
    vin: "12345678",
    manufacturer: "Benz",
    model: "E-Class",
    year: 2018,
    image:
      "https://www.tesla.com/sites/default/files/images/model-3/model_3--side_profile.png?20170801",
    price: 12000
  },
  {
    vin: "45678765",
    manufacturer: "Tesla",
    model: "Model 3",
    year: 2017,
    image:
      "https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524",
    price: 8000
  }
];

export default class AuctionListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carList: mockAuctionData
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Auction"
    };
  };

  render() {
    return (
      <View>
        <CarList
          carList={this.state.carList}
          toNavigate="CarAuctionDetail"
          {...this.props}
        />
      </View>
    );
  }
}
