import React from "react";
import { View, Text, TextInput } from "react-native";
import { AsyncStorage } from "react-native";
import MyButton from "../components/MyButton";
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    const loginId = this.props.navigation.getParam("loginId");
    this.state = {
      userid: "",
      pwd: "",
      loginId: loginId
    };
    if (loginId !== undefined) {
      return this.props.navigtaion.navigate("MyCarList", {
        logindId: loginId
      });
    }
  }

  componentDidMount() {
    this.checkLogined();
  }

  checkLogined = async () => {
    let user = AsyncStorage.getItem(`loginuser`);

    this.setState({ loginId: user });
    if (user) {
      this.props.navigation.navigate("MyCarList", {
        loginId: user
      });
    }
  };

  submitSignup = async () => {
    const userid = this.state.userid;
    const pwd = this.state.pwd;

    let user = await AsyncStorage.getItem(`user:${userid}`);
    if (user !== null) {
      alert("이미 가입된 아이디입니다.");
      return false;
    }

    await AsyncStorage.setItem(`user:${userid}`, pwd);

    await AsyncStorage.setItem(`loginuser`, userid);

    this.props.navigation.navigate("MyCarList", {
      loginId: userid
    });
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="아이디"
          style={{ fontSize: 25, borderWidth: 1 }}
          onChangeText={text => this.setState({ userid: text })}
        />
        <TextInput
          placeholder="비밀번호"
          style={{ fontSize: 25, borderWidth: 1 }}
          secureTextEntry={true}
          onChangeText={text => this.setState({ pwd: text })}
        />
        <MyButton text="로그인" iconName="ios-calendar" />
        <MyButton
          text="회원가입"
          iconName="ios-calendar"
          onPress={this.submitSignup}
        />
      </View>
    );
  }
}
