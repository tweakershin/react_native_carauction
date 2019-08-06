import React, {Component} from 'react';
import { View, Text, FlatList } from 'react-native';

import CarItem from './CarItem'

export default class CarList extends Component{
  static defaultProps = {
    carList: Object()
  }

  renderCarItem({item, index, separators}){
    return (
      <CarItem item={item}></CarItem>
    )
  }

  render(){    
    return(
      <View>
        <FlatList 
          data={this.props.carList}
          renderItem={this.renderCarItem}
          keyExtractor={(item, index) => item.vin}
        />
      </View>
    )
  }
}
