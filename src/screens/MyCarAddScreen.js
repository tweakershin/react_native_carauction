import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import MyButton from '../components/MyButton';

import { AsyncStorage } from 'react-native';

class MyCarAddScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      vin: '',
      manufacturer: '',
      model: '',
      year: '',
      image: ''
    }
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'MyCar Add',
    };
  };

  submitButton = async() => {
    if(this.state.vin=='' || this.state.image==''){
      return false
    }
    let myCar = await AsyncStorage.getItem('myCar');
    myCar = JSON.parse(myCar);
    const newCar = {
      vin: this.state.vin,
      manufacturer: this.state.manufacturer,
      model: this.state.model,
      year: this.state.year,
      image: this.state.image
    }
    const newCarList = myCar.concat(newCar);
    try{
      await AsyncStorage.setItem('myCar', JSON.stringify(newCarList));
    }
    catch{
      console.log("error 발생")
    }
    return this.props.navigation.navigate('MyCarList')
  }

  render(){
    return(
      <View>
        <View style={{marginTop:200}}>
          <Text style={{textAlign:'center'}}>
            등록하시려는 차량의 정보를 정확히 입력해주세요.
          </Text>

          <View style={{flexDirection:'column', alignItems:'center'}}>
            <TextInput 
              style={styles.textinput}
              placeholder="vin"
              onChangeText={(text)=>this.setState({vin:text})}
            />
            <TextInput 
              style={styles.textinput}
              placeholder="제조사"
              onChangeText={(text)=>this.setState({manufacturer:text})}
            />
            <TextInput 
              style={styles.textinput}
              placeholder="모델"
              onChangeText={(text)=>this.setState({model:text})}
              />
            <TextInput 
              style={styles.textinput}
              placeholder="연식"
              onChangeText={(text)=>this.setState({year:text})}
            />
            <TextInput 
              style={styles.textinput}
              placeholder="이미지URL"
              onChangeText={(text)=>this.setState({image:text})}
            />

            <MyButton 
              iconName="ios-add"
              text="차량 등록"
              size={25}
              onPress={this.submitButton}
            />
          </View>

        </View>
      </View>     
    )
  }
}

const styles = StyleSheet.create({
  textinput:{
    borderWidth:1,
    margin: 8,
    width: '70%',
    fontSize: 23
  }
})

export default MyCarAddScreen