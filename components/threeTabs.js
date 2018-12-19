/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Calls from "./calls";
import Chats from "./chats";
import Contacts from "./contacts";
import ScrollableTabView from "react-native-scrollable-tab-view";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  logo: {
    color: "#fff",
    fontSize: 23,
    margin: 10,
    marginLeft: 10,
    fontWeight: "500"
  },
  row: {
    flexDirection: "row"
  },
  topBit: {
    flexDirection: "row",
    paddingTop: 0,
    backgroundColor: "#075e54"
  }
});

const Header = (name, image) => (
  <View
    style={{
      height: 65,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#075e54",
      alignItems: "center",
      paddingTop: 10
    }}
  >
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        alignItems: "center"
      }}
    >
      <TouchableOpacity>
        <Icon name="navigate-before" color="#fff" size={23} style={{}} />
      </TouchableOpacity>
      {renderImages(image, iconStyle)}
      <Text
        style={{
          color: "#fff",
          fontWeight: "600",
          margin: 10,
          fontSize: 15
        }}
      >
        {name}
      </Text>
    </View>
    <View style={styles.row}>
      <Icon name="call" color="#fff" size={23} style={{ padding: 5 }} />
      <Icon name="attach-file" color="#fff" size={23} style={{ padding: 5 }} />
      <Icon name="more-vert" color="#fff" size={23} style={{ padding: 5 }} />
    </View>
  </View>
);

export default class ThreePanels extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      screenProps: {
        headerStyle: {
          backgroundColor: "#075e54"
        }
      }
    };
  };

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#075e54"
    },
    headerLeft: (
      <View style={styles.topBit}>
        <Text style={styles.logo}>WhatsApp</Text>
      </View>
    ),
    headerRight: (
      <View style={styles.row}>
        <Icon name="search" color="#fff" size={23} style={{ padding: 5 }} />
        <Icon name="chat" color="#fff" size={23} style={{ padding: 5 }} />
        <Icon name="more-vert" color="#fff" size={23} style={{ padding: 5 }} />
      </View>
    ),
    headerBackTitle: null
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollableTabView
          tabBarUnderlineColor="#fff"
          tabBarBackgroundColor="#075e54"
          tabBarActiveTextColor="#fff"
          tabBarInactiveTextColor="#88b0ac"
        >
          <Calls tabLabel="YO' MAMAS" />
          <Chats tabLabel="YO' GIRLS" {...this.props} />
          <Contacts tabLabel="MA NI**AS" />
        </ScrollableTabView>
      </View>
    );
  }
}
