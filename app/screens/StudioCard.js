import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import BookingScreen from "./BookingScreen";

export default class StudioCard extends Component {
  state = {
    studioArray: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/studios")
      .then((resp) => resp.json())
      .then((obj) => {
        this.setState({
          studioArray: obj,
        });
      });
  }
  render() {
    const card = this.state.studioArray.map((obj) => {
      return (
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: obj.image,
                  }}
                />
                <Body>
                  <Text>{obj.name}</Text>
                  <Text note>Taevon Jordan</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri: obj.image,
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>Favorite</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="ios-cash" />
                  <Text>{obj.price}per/HR</Text>
                </Button>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Button
                    onPress={() =>
                      this.props.navigation.navigate("BookingScreen")
                    }
                    transparent
                  >
                    <Icon
                      active
                      name="md-microphone"
                      style={{ color: "red" }}
                    />
                    <Text style={{ color: "red" }}>Book Now!</Text>
                  </Button>
                </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
        </Content>
      );
    });

    return <>{card}</>;
  }
}
