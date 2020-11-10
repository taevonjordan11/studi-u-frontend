import React, { Component } from "react";
import { Tooltip } from "react-native-elements";
import { Text, View, Image, TextInput } from "react-native";
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
  Picker,
  Input,
  Item,
} from "native-base";
import { CalendarList } from "react-native-calendars";

const testIDs = require("./testIDs");

export default class BookingScreen extends Component {
  state = {
    hours: 0,
    user_id: 13,
    studio_id: this.props.route.params.otherParam.id,
    price: this.props.route.params.otherParam.price,
  };

  onChanged(text) {
    // code to remove non-numeric characters from text
    this.setState({ hours: text });
  }

  bookSession = (id) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        studio_id: this.state.studio_id,
        user_id: 13,
        hours: this.state.hours,
        price: this.state.price,
      }),
    };

    fetch("http://localhost:3000/api/v1/bookings", options).then(() =>
      this.props.navigation.navigate("Done")
    );
  };

  render() {
    console.log(this.state.hours);
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{ uri: this.props.route.params.otherParam.image }}
                />
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
                <Text>Please select your hours requested</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Item>
                  <TextInput
                    onChangeText={(text) => this.onChanged(text)}
                    value={String(this.state.hours)}
                    placeholder="hours"
                  />
                </Item>
              </Left>
              <Right>
                <Button onPress={() => this.bookSession(this.state.id)}>
                  <Icon
                    active
                    name="ios-checkmark-circle-outline"
                    inactive
                    name="ios-checkmark-circle"
                  />
                  <Text>Book Session</Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="ios-star-half" />
                  <Text>
                    Rating:{this.props.route.params.otherParam.rating}Stars
                  </Text>
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
