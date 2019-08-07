import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class MyCarAddScreen extends React.Component{

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'MyCar Add',
    };
  };

  render(){
    return(
      <View>
        <View style={{marginTop:200}}>
          <Text style={{textAlign:'center'}}>
            등록하시려는 차량의 정보를 정확히 입력해주세요.
          </Text>

          <View style={{flexDirection:'column', alignItems:'center'}}>
            <TextInput style={styles.textinput}/>
            <TextInput style={styles.textinput}/>
            <TextInput style={styles.textinput}/>
            <TextInput style={styles.textinput}/>
            <TextInput style={styles.textinput}/>
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
    width: '70%'
  }
})

export default MyCarAddScreen