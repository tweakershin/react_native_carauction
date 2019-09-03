import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IconTextInput from "../components/IconTextInput";

import { fetchUser, postUser } from "../apis/user";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textName: "",
      textEmail: ""
    };
  }

  setTextName(name) {
    this.setState({ textName: name });
  }
  setTextEmail(email) {
    this.setState({ textEmail: email });
  }

  async login() {
    let member = await fetchUser(this.state.textEmail, this.state.textName);
    console.log(member);
    if (member.length === 1) {
      return this.props.navigation.navigate("");
    }
    if (member.length === 0) {
      member = await postUser(
        this.state.textEmail,
        this.state.firstName,
        this.state.firstName
      );
      if (!member) {
        alert("이름이 틀렸습니다.");
      } else {
        return this.props.navigation.navigate("");
      }
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          flexDirection: "column",
          // backgroundColor: 'tomato',
          justifyContent: "center"
        }}
        behavior="padding"
      >
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 30,
              color: "tomato",
              marginTop: -20,
              fontWeight: "200"
            }}
          >
            CAR AUCTION
          </Text>

          <IconTextInput
            style={{ marginTop: 10 }}
            iconName={"ios-person"}
            placeholder={"이름"}
            onChange={this.setTextName.bind(this)}
          />
          <IconTextInput
            style={{ marginTop: 10 }}
            iconName={"ios-mail"}
            placeholder={"이메일"}
            onChange={this.setTextEmail.bind(this)}
          />
          <Button
            style={{ marginTop: 10 }}
            title={"회원가입 / 로그인"}
            onPress={this.login.bind(this)}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: "column",
    padding: 30,
    alignItems: "center"
  }
});

export default LoginScreen;
