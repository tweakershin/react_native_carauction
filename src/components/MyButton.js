import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {Ionicons} from '@expo/vector-icons';

export default class MyButton extends React.Component{
  static defaultProps = {
    size: 20,
    style: {},
    iconName: '',
    text: '',
    onPress: ()=>(console.log("버튼 클릭"))
  }

  render(){
    return(
      <TouchableOpacity 
            style={
              [{flexDirection:'row', 
              marginTop:30, 
              backgroundColor:'tomato', 
              justifyContent:'center',
              padding: 20},
              this.props.style]
              }
            onPress={this.props.onPress}
            >
            <View style={{flexDirection:'row'}}>

              <Ionicons 
                name={this.props.iconName} 
                size={this.props.size} 
                color='white'/> 

              <Text 
                style={
                  {color:'white', 
                  fontSize:this.props.size, 
                  marginLeft:20}}>
                {this.props.text}
              </Text>

            </View>
          </TouchableOpacity>
    )
  }
}