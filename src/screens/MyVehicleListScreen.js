import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import VehicleItem from "../components/VehicleItem";

const mockData = [
  {
    vin: "abc",
    manufacturer: "Tesla",
    model: "Model 3",
    year: 2018,
    image:
      "https://www.tesla.com/sites/default/files/images/model-3/model_3--side_profile.png?20170801"
  },
  {
    vin: "abc123",
    manufacturer: "Tesla",
    model: "Model 3",
    year: 2017,
    image:
      "https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524"
  }
];

class MyVehicleListScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   refreshing: false
    // };
  }
  render(){
    return(
      <View></View>
    )
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: (
        <TouchableOpacity
          style={{ padding: 5, paddingRight: 15 }}
          onPress={() => {
            navigation.navigate("VehicleEditorStack");
          }}
        >
          <Ionicons name={"ios-add"} size={35} color={"white"} />
        </TouchableOpacity>
      ),
      title: "My Cars"
    };
  };
}

export default MyVehicleListScreen;
