import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {AsyncStorage} from 'react-native';
import MyButton from '../components/MyButton'
export default class LoginScreen extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      userid:'',
      pwd: '',
    }
  }

  submitSignup = async ()=>{
    const userid=this.state.userid;
    const pwd = this.state.pwd;

    let user = await AsyncStorage.getItem(`user:${userid}`);
    

  }

  render(){
    return(
      <View>
        <TextInput 
          placeholder="아이디"
          style={{fontSize:25, borderWidth:1}}
          onChangeText={(text)=>this.setState({userid:text})}
        />
        <TextInput 
          placeholder="비밀번호"
          style={{fontSize:25, borderWidth:1}}
          secureTextEntry={true}
          onChangeText={(text)=>this.setState({pwd:text})}
        />
        <MyButton 
          text="로그인"
          iconName="ios-calendar"
        />
        <MyButton 
          text="회원가입"
          iconName="ios-calendar"
        />
      </View>
    )
  }
}