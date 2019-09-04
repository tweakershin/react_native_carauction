import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import IconText from "../components/IconText";
import { Ionicons } from "@expo/vector-icons";

import AuctionList from "../components/AuctionList";

import { fetchCarDetail } from "../apis/cars";
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
    console.log(car);
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
          <AuctionList />
        </View>
      </View>

      // <View>
      //   <View style={{ flexDirection: 'column' }}>
      //       <Image
      //         source={{ uri: this.state.myCar.image }}
      //         style={{
      //           width: '100%',
      //           height: 150,
      //           resizeMode: 'cover',
      //         }}
      //       />
      //     <View style={{ flexGrow: 1, paddingLeft: 10 }}>
      //       <View
      //         style={{
      //           position: 'absolute',
      //           height: '70%',
      //           width: 1,
      //           left: '50%',
      //           top: '15%',
      //           backgroundColor: '#aaa',
      //         }}
      //       />

      //       <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      //         <IconText iconName={'ios-barcode'}>
      //           {this.state.myCar.vin}
      //         </IconText>
      //         <IconText iconName={'ios-construct'}>
      //           {this.state.myCar.manufacturer}
      //         </IconText>
      //         <IconText iconName={'ios-car'}>
      //           {this.state.myCar.model}
      //         </IconText>
      //         <IconText iconName={'ios-calendar'}>
      //           {this.state.myCar.year}
      //         </IconText>
      //       </View>

      //     </View>
      //   </View>

      //   <FlatList></FlatList>

      // </View>
    );
  }
}
