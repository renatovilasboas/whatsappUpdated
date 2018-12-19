import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import Components from "../components/";
import Home from "./threeTabs";
import Chat from "./eachchat";
import { createStackNavigator, createAppContainer } from "react-navigation";

/* class Index extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    const { state, actions } = this.props;
    const routeId = route.id;

    if (routeId === "home") {
      return <Home {...this.props} navigator={navigator} />;
    }

    if (routeId === "chat") {
      return (
        <Chat
          {...this.props}
          image={route.image}
          name={route.name}
          navigator={navigator}
        />
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator
          style={{ flex: 1 }}
          ref={"NAV"}
          initialRoute={{ id: "home", name: "home" }}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
} */

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Chat: {
      screen: Chat
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
