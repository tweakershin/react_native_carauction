import React, {Component} from 'react';
import { View, Text, FlatList } from 'react-native';

import CarItem from './CarItem'

export default class CarList extends Component{
  constructor(props){
    super(props);
    this.state = {
      refreshing:false
    };
  }
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
          onRefresh={()=> {
            this.setState({refreshing:true})
            console.log("새로고침중입니다.");
            console.log("서버에 요청을 보냅니다.")
            this.setState({refreshing:false})
            }
          }
          refreshing={this.state.refreshing}
          ItemSeparatorComponent={({ highlighted, leadingItem }) => {
            console.log(leadingItem) // 앞 component
            return(
              <View
                style={{
                  height: 1,
                  marginLeft: 20,
                  width: '100%',
                  backgroundColor: 'gray',
                }}
              >
              </View>
            )}
          }
        />
      </View>
    )
  }
}
