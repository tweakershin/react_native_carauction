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

import * as Permissions from "expo-permissions";

async function alertIfRemoteNotificationsDisabledAsync() {
  const status = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  console.log(status);
  if (status.granted !== "granted") {
    alert(
      "Hey! You might want to enable notifications for my app, they are good."
    );
  }
  return;
}

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    const loginId = this.props.navigation.getParam("loginId");
    this.state = {
      userid: "",
      pwd: "",
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
      <View>
        <View>
          <ScrollView>
            {this.state.photos.map((p, i) => {
              return (
                <Image
                  key={i}
                  style={{
                    width: 300,
                    height: 100
                  }}
                  source={{ uri: p.image.uri }}
                />
              );
            })}
          </ScrollView>
        </View>
        <TextInput
          placeholder="아이디"
          style={{ fontSize: 25, borderWidth: 1 }}
          onChangeText={text => this.setState({ userid: text })}
        />
        <Button title="Load Images" onPress={this._handleButtonPress} />

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
