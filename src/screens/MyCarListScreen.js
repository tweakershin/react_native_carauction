import React from 'react';
import { 
  View, 
  Text, 
  FlatList,
  AsyncStorage // 이쪽입니다.
} 
from 'react-native';

import { NavigationEvents } from 'react-navigation';

import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import CarList from '../components/CarList'


const mockData = [
  {
    vin: '12345678',
    manufacturer: 'Benz',
    model: 'E-Class',
    year: 2018,
    image:
      'https://www.tesla.com/sites/default/files/images/model-3/model_3--side_profile.png?20170801',
  },
  {
    vin: '45678765',
    manufacturer: 'Tesla',
    model: 'Model 3',
    year: 2017,
    image:
      'https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524',
  },
];

export default class MyCarListScreen extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      myCarList: mockData
    };
    this.initMyCar()
  }
  initMyCar = async ()=>{
    let carList = await AsyncStorage.getItem("myCar");
    if (carList === null){
      await AsyncStorage.setItem(
        "myCar", JSON.stringify(mockData)
      )
      carList = mockData;
    }
    else{
      carList = JSON.parse(carList);
    }
    this.setState({myCarList: carList})
  }

  addMyCar(vin, manufacturer, model, year, image){
    const car = {
      vin: vin,
      manufacturer:manufacturer,
      model:model,
      year: year,
      image: image
    }
    const newCarList = this.state.myCarList.concat(car);
    this.setState({carList:newCarList})
  }

  getCarList = async () => {
      let a;
      await AsyncStorage.setItem("@MyStore:myCarList", JSON.stringify(mockData))
      try{
        a = await AsyncStorage.getItem('@MyStore:myCarList');
        if (a!==null){
          console.log(a)
        }
        console.log(a)
      } catch{
        console.log("error")
      }
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: (
        <TouchableOpacity
          style={{ padding: 5, paddingRight: 15 }}
          onPress={() => {
            navigation.push('MyCarAdd');
            console.log("오른쪽 + 버튼 토글");
            // navigation.navigate('');
          }}
        >
          <Ionicons name={'ios-add'} size={35} color={'white'} />
        </TouchableOpacity>
      ),
      title: 'My Cars',
    };
  };


  render(){
    return(

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
    )
  }
}