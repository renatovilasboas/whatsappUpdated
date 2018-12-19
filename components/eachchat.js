/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import InvertibleScrollView from "react-native-invertible-scroll-view";
import {
  AppRegistry,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Dimensions,
  Image,
  Button,
  Text,
  View,
  ImageBackground
} from "react-native";

import renderImages from "../mock/mockImage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  row: {
    flexDirection: "row"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const { width, height } = Dimensions.get("window");
const convo = [];
const iconStyle = { width: 30, height: 30, borderRadius: 15, margin: 5 };
const userIcon = {
  height: 40,
  width: 40,
  margin: 5,
  borderRadius: 20,
  backgroundColor: "#f8f8f8"
};

export default class Chaty extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#075e54",
          alignItems: "center",
          paddingTop: 0
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center"
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="navigate-before" color="#fff" size={23} style={{}} />
          </TouchableOpacity>
          {renderImages(navigation.getParam("image"), iconStyle)}
          <Text
            style={{
              color: "#fff",
              fontWeight: "600",
              margin: 10,
              fontSize: 15
            }}
          >
            {navigation.getParam("name")}
          </Text>
        </View>
      </View>
    ),
    headerRight: (
      <View style={styles.row}>
        <Icon name="call" color="#fff" size={23} style={{ padding: 5 }} />
        <Icon
          name="attach-file"
          color="#fff"
          size={23}
          style={{ padding: 5 }}
        />
        <Icon name="more-vert" color="#fff" size={23} style={{ padding: 5 }} />
      </View>
    ),
    headerBackStyle: {
      backgroundColor: "#075e54"
    },
    headerStyle: {
      backgroundColor: "#075e54"
    },
    headerBackTitle: null,
    headerBackImage: null
  });

  constructor(props) {
    super(props);

    this.state = {
      datasource: convo,
      note: ""
    };
  }

  eachMessage(x, image) {
    if (x.person == 2) {
      return (
        <View
          style={{ flexDirection: "row", alignItems: "flex-end", margin: 5 }}
        >
          {renderImages(image, userIcon)}
          <View
            style={{
              width: 220,
              borderRadius: 10,
              backgroundColor: "#f4f4f4",
              padding: 10
            }}
          >
            <Text style={{ fontSize: 15, color: "#555", fontWeight: "600" }}>
              {x.note}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            alignItems: "flex-end",
            margin: 5
          }}
        >
          <View
            style={{
              width: 220,
              borderRadius: 10,
              backgroundColor: "#00b499",
              padding: 10
            }}
          >
            <Text style={{ fontSize: 15, color: "#fff", fontWeight: "600" }}>
              {x.note}
            </Text>
          </View>
          <Image
            source={require("../images/profile.jpg")}
            resizeMode="contain"
            style={userIcon}
          />
        </View>
      );
    }
  }
  submitThis() {
    convo.push({
      person: 1,
      note: this.state.note
    });

    this.setState({
      datasource: convo.reverse(),
      note: ""
    });

    setTimeout(() => {
      this.similator();
    }, 2000);
  }

  similator() {
    convo.reverse();
    convo.push({ person: 2, note: "When are we gonna hangout Sam!!!!" });
    this.setState({
      datasource: convo.reverse()
    });
  }

  render() {
    const { navigation } = this.props;
    const image = navigation.getParam("image");
    const name = navigation.getParam("name");
    const { note } = this.state;
    return (
      <View style={{ display: "flex", flex: 1 }}>
        <ImageBackground
          source={require("../images/background.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <FlatList
            inverted
            style={{
              flex: 1
            }}
            data={this.state.datasource}
            renderItem={({ item }) => this.eachMessage(item, image)}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignSelf: "flex-start",
              padding: 10,
              height: 60,
              width: width
            }}
          >
            <TextInput
              style={{
                flex: 1,
                backgroundColor: "white",
                marginRight: 8,
                borderRadius: 25,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 1,
                elevation: 0.8
              }}
              value={note}
              onChangeText={note => this.setState({ note })}
              onSubmitEditing={() => this.submitThis()}
              placeholder="Enter Your message here"
            />

            <TouchableHighlight
              style={{
                backgroundColor: "#128c7e",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 1,
                elevation: 1,
                borderRadius: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 40
              }}
            >
              <Icon name="mic" color="white" size={24} />
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

//fundo
//<Image
//source={require("../images/background.jpg")}
//style={styles.container}
///>
