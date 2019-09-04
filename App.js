import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import MyCarListScreen from "./src/screens/MyCarListScreen";
import MyCarDetailScreen from "./src/screens/MyCarDetailScreen";
import MyCarAddScreen from "./src/screens/MyCarAddScreen";
import LoginScreen from "./src/screens/LoginScreen";

import AuctionListScreen from "./src/screens/AuctionListScreen";
import AuctionDetailScreen from "./src/screens/AuctionDetailScreen";
import SettingScreen from "./src/screens/SettingScreen";

const auction = function tempAuction() {
  return <View />;
};
const settings = function tempSettings() {
  return <View />;
};

const defaultNavigationOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  }
};

const MyCarStack = createStackNavigator(
  {
    MyCarList: {
      screen: MyCarListScreen
    },
    MyCarDetail: {
      screen: MyCarDetailScreen
    },
    MyCarAdd: {
      screen: MyCarAddScreen
    }
  },
  {
    defaultNavigationOptions
  }
);

const AuctionStack = createStackNavigator(
  {
    AuctionList: {
      screen: AuctionListScreen
    },
    CarAuctionDetail: {
      screen: AuctionDetailScreen
    }
  },
  {
    defaultNavigationOptions
  }
);

const tabNavigator = createBottomTabNavigator(
  {
    MyCars: {
      screen: MyCarStack // home
    },
    Auction: {
      screen: AuctionStack
    },
    Settings: {
      screen: SettingScreen
    }
  },
  {
    /* Other configuration remains unchanged */
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "MyCars") {
          iconName = "ios-car";
        } else if (routeName === "Auction") {
          iconName = "ios-trending-up";
        } else if (routeName === "Settings") {
          iconName = "ios-settings";
        }

        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: tabNavigator
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return (
    <AppContainer />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
  );
}
