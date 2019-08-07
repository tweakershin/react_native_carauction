import React from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default class AuctionList extends React.Component{
  constructor(props){
    super(props)
  }

  static defaultProps = {
    auctionList: null
  }

  render(){
    if (this.props.auctionList){
      return(
        <View>
          <Text>asd</Text>
        </View>
      )
    }
    else{
      return(
        <View style={{flexDirection:'column', alignItems:'center'}}>
          <Text style={{textAlign:'center', fontWeight:'800', fontSize:22}}>
            진행중인 경매가 없습니다.
          </Text>

          <TouchableOpacity 
            style={
              {flexDirection:'row', 
              marginTop:30, 
              backgroundColor:'tomato', 
              width:'60%', 
              justifyContent:'center',
              padding: 20}
              }>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <Ionicons name="ios-calendar" size={23} color='white'/> 
              <Text style={{color:'white', fontSize:23, marginLeft:20}}>
                경매에 등록하기
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
  }
}