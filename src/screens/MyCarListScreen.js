import React from "react";
import {
  View,
  Text,
  FlatList,
  AsyncStorage // 이쪽입니다.
} from "react-native";

import { NavigationEvents } from "react-navigation";

import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CarList from "../components/CarList";

const mockData = [
  {
    vin: "12345678",
    manufacturer: "Benz",
    model: "E-Class",
    year: 2018,
    image:
      "https://www.tesla.com/sites/default/files/images/model-3/model_3--side_profile.png?20170801"
  },
  {
    vin: "45678765",
    manufacturer: "Tesla",
    model: "Model 3",
    year: 2017,
    image:
      "https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524"
  }
];

export default class MyCarListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myCarList: []
    };
  }

  fetchMyCar = async () => {
    const carList = await fetch(
      "http://ec2-13-124-49-137.ap-northeast-2.compute.amazonaws.com:3000/api/org.example.carauction.Car"
    ).then(resp => {
      if (resp.status != 200) {
        return false;
      }
      return resp.json();
    });
    console.log(carList);
    this.setState({ myCarList: carList });
  };

  addMycar = async (vin, imageUri) => {
    const uri =
      "http://ec2-13-124-49-137.ap-northeast-2.compute.amazonaws.com:3000/api/org.example.carauction.Car";
    const result = fetch(uri, {
      method: "POST",
      body: JSON.stringify({
        $class: "org.example.carauction.Car",
        vin: vin,
        imageUri: imageUri
      })
    });
    console.log(result);
  };

  componentDidMount() {
    // this.initMyCar();
    this.fetchMyCar();
  }

  initMyCar = async () => {
    return await fetch(
      "http://ec2-13-124-49-137.ap-northeast-2.compute.amazonaws.com:3000/api/org.example.carauction.Car",
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(resp => resp.json())
      .then(respJson => {
        // console.log(respJson);
        this.setState({ myCarList: respJson });
      })
      .catch(err => console.error(err));
  };

  addMyCar(vin, manufacturer, model, year, image) {
    fetch(
      "http://ec2-13-124-49-137.ap-northeast-2.compute.amazonaws.com:3000/api/org.example.carauction.Car",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          $class: "org.example.carauction.Car",
          vin: vin,
          imageUri: image,
          owner: "ys@betweak.com"
        })
      }
    )
      .then(resp => resp.json())
      .then(respJson => {
        const newCarList = this.state.myCarList.concat(respJson);
        this.setState({ carList: newCarList });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getCarList = async () => {
    let a;
    await AsyncStorage.setItem("@MyStore:myCarList", JSON.stringify(mockData));
    try {
      a = await AsyncStorage.getItem("@MyStore:myCarList");
      if (a !== null) {
        console.log(a);
      }
      console.log(a);
    } catch {
      console.log("error");
    }
  };

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: (
        <TouchableOpacity
          style={{ padding: 5, paddingRight: 15 }}
          onPress={() => {
            navigation.push("MyCarAdd");
            console.log("오른쪽 + 버튼 토글");
            // navigation.navigate('');
          }}
        >
          <Ionicons name={"ios-add"} size={35} color={"white"} />
        </TouchableOpacity>
      ),
      title: "My Cars"
    };
  };

  render() {
    return (
      <View>
        <NavigationEvents
          onWillFocus={payload => this.initMyCar()}
          // onDidFocus={payload => this.initMyCar()}
        />
        <Text>MyCarList</Text>
        <CarList
          carList={this.state.myCarList}
          // navigtaion={this.props.navigation}
          {...this.props}
        />
      </View>
    );
  }
}
