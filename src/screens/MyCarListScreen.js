import React from "react";
import { View, FlatList, Text } from "react-native";
import { fetchMyCar } from "../apis/cars";

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
      <View style={{ width: "100%" }}>
        <Text>id:{item.vin}</Text>
        <Text>{item.model}</Text>
        <Text>{item.brand}</Text>
        <Text>{item.image}</Text>
        <Text>{item.owner}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <FlatList data={this.state.myCarList} renderItem={this.renderItem} />
      </View>
    );
  }
}
