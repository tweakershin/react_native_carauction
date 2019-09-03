import React from "react";
import { View, FlatList } from "react-native";
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
    let myCarList = [];
    if (member) {
      this.setState({ member: member });
      myCarList = fetchMyCar(member.email).then(result => {
        this.setState({ myCarList: result });
      });
    }

    this.setState({ myCarList: myCarList });
  }
  renderItem({ item }) {}

  render() {
    return (
      <View>
        <FlatList renderItem={this.renderItem}></FlatList>
      </View>
    );
  }
}
