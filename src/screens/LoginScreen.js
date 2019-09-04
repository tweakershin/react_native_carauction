import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
  CameraRoll
} from "react-native";
import { AsyncStorage } from "react-native";
import MyButton from "../components/MyButton";

import { fetchUser } from "../apis/user";

import * as Permissions from "expo-permissions";

// async function alertIfRemoteNotificationsDisabledAsync() {
//   const status = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//   console.log(status);
//   if (status.granted !== "granted") {
//     alert(
//       "Hey! You might want to enable notifications for my app, they are good."
//     );
//   }
//   return;
// }

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    const loginId = this.props.navigation.getParam("loginId");

    this.state = {
      email: "",
      name: "",
      user: {},

      loginId: loginId,
      photos: [
        {
          image: {
            uri:
              "https://timesofindia.indiatimes.com/thumb/msid-67669843,width-800,height-600,resizemode-4/67669843.jpg"
          }
        }
      ]
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
    // let user = AsyncStorage.getItem(`loginuser`);
    // this.setState({ loginId: user });
    // if (user) {
    //   this.props.navigation.navigate("MyCarList", {
    //     loginId: user
    //   });
    // }
  };
  submitLogin() {
    user = fetchUser(this.state.email, this.state.name);
    console.log(user);
    if (user) {
      this.setState({ user: user[0] });
    }
  }

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
  // componentDidMount() {
  //   alertIfRemoteNotificationsDisabledAsync();
  // }
  // _handleButtonPress = () => {
  //   CameraRoll.getPhotos({
  //     first: 20,
  //     assetType: "Photos"
  //   })
  //     .then(r => {
  //       this.setState({ photos: r.edges });
  //     })
  //     .catch(err => {
  //       //Error Loading Images
  //     });
  // };
  render() {
    return (
      <View style={{ justifyContent: "center", marginTop: 250 }}>
        <TextInput
          placeholder="이메일"
          style={{ fontSize: 25, borderWidth: 1 }}
          onChangeText={text => this.setState({ email: text })}
        />

        <TextInput
          placeholder="이름"
          style={{ fontSize: 25, borderWidth: 1 }}
          secureTextEntry={true}
          onChangeText={text => this.setState({ name: text })}
        />
        <MyButton
          text="로그인"
          iconName="ios-calendar"
          onPress={this.submitLogin}
        />
        <MyButton
          text="회원가입"
          iconName="ios-calendar"
          onPress={this.submitSignup}
        />
      </View>
    );
  }
}
