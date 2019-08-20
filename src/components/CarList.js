import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

import CarItem from "./CarItem";

export default class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  static defaultProps = {
    carList: Object(),
    toNavigate: "MyCarDetail"
  };

  renderCarItem({ item, index, separators }) {
    return (
      <CarItem
        item={item}
        onPress={() =>
          this.props.navigation.push(this.props.toNavigate, {
            item: item
          })
        }
      />
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.carList}
          renderItem={this.renderCarItem.bind(this)}
          keyExtractor={(item, index) => item.vin}
          refreshing={this.state.refreshing}
          onRefresh={() => {
            this.setState({ refreshing: true });
            console.log("새로고침중입니다.");
            console.log("서버에 요청을 보냅니다.");
            // setTimeout(
            //   ()=>{
            //     console.log("요청 성공")
            //   },
            // )
            this.setState({ refreshing: false });
          }}
          ItemSeparatorComponent={({ highlighted, leadingItem }) => {
            // console.log(leadingItem) // 앞 component
            return (
              <View
                style={{
                  height: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  width: "90%",
                  backgroundColor: "gray"
                }}
              />
            );
          }}
        />
      </View>
    );
  }
}
