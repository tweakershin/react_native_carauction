import React from "react";

import { Button, View, AsyncStorage } from "react-native";

export default class SettingScreen extends React.Component {
  logout = async () => {
    await AsyncStorage.removeItem("loginMember");
    return this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={{ marginTop: 300 }}>
        <Button title="로그아웃" onPress={this.logout} />
      </View>
    );
  }
}
