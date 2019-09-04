import React, { Component } from "react";

import { View } from "react-native";
import CarList from "../components/CarList";

import { fetchAuctionList } from "../apis/auction";
import AuctionList from "../components/AuctionList";

export default class AuctionListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carList: []
    };

    this.fetchAuctionList();
  }

  fetchAuctionList = async (auctionState = "FOR_SALE") => {
    auctionList = await fetchAuctionList(auctionState);
    this.setState({
      carList: auctionList
    });
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Auction"
    };
  };

  render() {
    return (
      <View>
        <AuctionList
          auctionList={this.state.carList}
          toNavigate="CarAuctionDetail"
          {...this.props}
        />
      </View>
    );
  }
}
