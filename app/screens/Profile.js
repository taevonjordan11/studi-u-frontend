import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Button,
  Icon,
} from "native-base";

import Logout from "./Logout";

export default class Profile extends Component {
  Drawer = createDrawerNavigator();

  state = {
    bookingsArray: [],
    userInfo: [],
    currentUser: null
  };

  componentDidMount() {
    this.props.navigation.addListener("focus", this.bookingsFetch);
    this.bookingsFetch();

    fetch("http://localhost:3000/api/v1/users")
      .then((resp) => resp.json())
      .then((data) => { 
        console.log(data[0].studios);
        this.setState({
          userInfo: data,
          currentUser: data[0]
        });
      });
  }

  bookingsFetch = () => {
    fetch("http://localhost:3000/api/v1/bookings")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          bookingsArray: data,
        });
      });
  };

  // componentDidMount() {
  //   Promise.all([
  //     fetch("http://localhost:3000/api/v1/bookings"),
  //     fetch("http://localhost:3000/api/v1/users/"),
  //   ])

  //     .then(([res1, res2]) => {
  //       return Promise.all([res1.json(), res2.json()]);
  //     })
  //     .then(([res1, res2]) => {
  //       this.setState({
  //         bookingsArray: res1,
  //         userInfo: res2,
  //       });
  //     });
  // }

  cancelSession = (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        studio_id: id,
        user_id: 13,
      }),
    };

    fetch(`http://localhost:3000/api/v1/bookings/${id}`, options).then(() =>
      this.bookingsFetch()
    );
  };

  listings = () =>
    this.state.userInfo.map((value) => {
      return (
        <Content key={value.id}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: value.image,
                  }}
                />
                <Body>
                  <Text>{value["studios"].name}</Text>
                  <Text note>{value.studios.address}</Text>
                  <Text note>Contact: {value.studios.contact}</Text>
                  <Text note>Description: {value.studios.description}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri: value.studios.image,
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Button transparent>
                    <Icon name="ios-cash" />
                    <Text>${value.studios.price}per/HR</Text>
                  </Button>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      );
    });

  bookedCard = () =>
    this.state.bookingsArray.map((obj) => {
      return (
        <Content key={obj.id}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: obj.studio.image,
                  }}
                />
                <Body>
                  <Text>{obj.studio.name}</Text>
                  <Text note>{obj.studio.address}</Text>
                  <Text note>Contact: {obj.studio.contact}</Text>
                  <Text note>Price: ${obj.studio.price} per/hr</Text>
                  <Text note>Hours: {obj.hours} </Text>
                  <Text note>Booked: {obj.created_at} </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri: obj.studio.image,
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Right>
                <Body>
                  <Button
                    onPress={() => this.cancelSession(obj.id)}
                    transparent
                  >
                    <Icon name="ios-remove-circle-outline" />
                    <Text style={{ color: "red" }}>Cancel Session</Text>
                  </Button>
                </Body>
              </Right>
            </CardItem>
          </Card>
        </Content>
      );
    });

  render() {
    // console.log("USER DATA", this.state.userInfo);
    return (
      <SafeAreaView>
        <ScrollView>
          <Text>My Listing</Text>
          {this.listings()}
          <Text>My Booked Sessions</Text>
          {this.bookedCard()}
          <Logout />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#43434f",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 68,
    borderWidth: 0,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "white",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "black",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
