import React from "react";
import { View, FlatList, Text } from "react-native";
import { fetchMyCar } from "../apis/cars";

import CarItem from "../components/CarItem";

export default class MyCarListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      myCarList: []
    };
  }
  componentDidMount() {
    const member = this.props.navigation.getParam("member");
    if (member) {
      this.setState({ member: member });
      myCarList = fetchMyCar(member.email).then(result => {
        this.setState({ myCarList: result });
      });
    }
  }
  renderItem({ item }) {
    console.log(item);
    return (
      <CarItem
        item={item}
        onPress={() => {
          this.props.navigation.push("MyCarDetail", {
            car: item,
            title: item.vin
          });
        }}
      />
    );
  }

  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <FlatList
          data={this.state.myCarList}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.vin}
        />
      </View>
    );
  }
}
