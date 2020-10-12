import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import { CalendarList } from "react-native-calendars";

const testIDs = require("./testIDs");

export default class BookingScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: "Image URL" }} />
                <Body>
                  <Text>{this.props.route.params.otherParam.name}</Text>
                  <Text note>April 1, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: this.props.route.params.otherParam.image }}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left></Left>
            </CardItem>
            <CardItem>
              <Right>
                <Button
                  onPress={() =>
                    this.props.navigation.navigate("PaymentScreen")
                  }
                  textStyle={{ color: "#87838B" }}
                >
                  <Icon
                    active
                    name="ios-checkmark-circle-outline"
                    inactive
                    name="ios-checkmark-circle"
                  />
                  <Text>Confirm</Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="ios-star-half" />
                  <Text>{this.props.route.params.otherParam.rating}</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

// {this.props.route.params.otherParam.name}
