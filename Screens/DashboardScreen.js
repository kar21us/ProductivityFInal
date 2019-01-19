import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import firebase from "firebase";
import { Header, Left, Right, Icon, Body, Title } from "native-base";
import { LinearGradient } from "expo";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

class DashboardScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{
            backgroundColor: "#00ebb6"
          }}
        >
          <Left>
            <Icon
              name="md-menu"
              onPress={() => this.props.navigation.openDrawer()}
              style={{ marginLeft: 10, color: "#00614b" }}
            />
          </Left>
          <Body>
            <Title style={{ color: "#00614b" }}>Activity Feed</Title>
          </Body>
          <Right />
        </Header>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <FlatList
            data={[
              {
                key: "a",
                name: "Kartikeya",
                activity: "Gym",
                time: "60 minutes",
                date: "1/19/19"
              },
              {
                key: "b",
                name: "Sid",
                activity: "Gym",
                time: "60 minutes",
                date: "1/19/19"
              },
              {
                key: "c",
                name: "Sid",
                activity: "Gym",
                time: "60 minutes",
                date: "1/19/19"
              },
              {
                key: "d",
                name: "Sid",
                activity: "Gym",
                time: "60 minutes",
                date: "1/19/19"
              },
              {
                key: "e",
                name: "Sid",
                activity: "Gym",
                time: "60 minutes",
                date: "1/19/19"
              },
              {
                key: "f",
                name: "Sid",
                activity: "Gym",
                time: "60 minutes",
                date: "1/19/19"
              },
              {
                key: "g",
                name: "Sid",
                activity: "Gym",
                time: "60 minutes",
                date: "1/19/19"
              }
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: width - 10,
                  height: 100,
                  backgroundColor: "#ffb53b",
                  marginTop: 10,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  borderRadius: 5
                }}
              >
                <LinearGradient
                  colors={["#ffb53b", "#ff9f00"]}
                  style={{
                    padding: 15,
                    alignItems: "flex-start",
                    borderRadius: 5,
                    width: width - 10
                  }}
                >
                  <Text>{item.name}</Text>
                  <Text>{item.activity}</Text>
                  <Text>{item.time}</Text>
                  <Text>{item.date}</Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
              shadowOffset: { width: 0, height: 1 },
              shadowColor: "#00000",
              shadowOpacity: 0.7,
              right: 30,
              bottom: 30
            }}
            onPress={() =>
              this.props.navigation.navigate("ChallengeDetailScreens")
            }
          >
            <LinearGradient
              colors={["#dd0023", "#f83958"]}
              style={{
                padding: 15,
                borderRadius: 100,
                width: 75,
                height: 75,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../assets/flag.png")}
                style={{ width: 50, height: 50 }}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
