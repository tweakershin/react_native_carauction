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

import { fetchUser, postUser } from "../apis/user";

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

    const loginMember = this.props.navigation.getParam("loginMember");

    this.state = {
      email: "",
      name: "",
      user: {},

      photos: [
        {
          image: {
            uri:
              "https://timesofindia.indiatimes.com/thumb/msid-67669843,width-800,height-600,resizemode-4/67669843.jpg"
          }
        }
      ]
    };
    if (loginMember !== undefined) {
      return this.props.navigtaion.navigate("MyCarList", {
        member: loginMember
      });
    }
  }

  componentDidMount() {
    this.checkLogined();
  }

  checkLogined = async () => {
    let user = await AsyncStorage.getItem(`loginMember`);
    this.setState({ user: user });
    console.log(user);
    if (user) {
      this.props.navigation.navigate("MyCarList", {
        user: user
      });
    }
  };

  submitLogin = () => {
    fetchUser(this.state.email, this.state.name).then(user => {
      console.log(user);

      if (user) {
        AsyncStorage.setItem(`loginMember`, JSON.stringify(user[0]));

        this.setState({ user: user[0] });
        return this.props.navigation.navigate("MyCarList", {
          user: user[0]
        });
      }
    });
  };

  submitSignup = async () => {
    const user = await postUser(
      this.state.email,
      this.state.name,
      this.state.name
    );

    await AsyncStorage.setItem(`loginMember`, JSON.stringify(user));

    this.props.navigation.navigate("MyCarList", {
      user: user
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
          onChangeText={text => {
            console.log(text);
            this.setState({ email: text });
          }}
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
