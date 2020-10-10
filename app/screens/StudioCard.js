import React, { Component } from "react";
import { Image } from "react-native";
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

export default class StudioCard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: "https://cdn4.iconfinder.com/data/icons/characters-4/512/1-05-512.png" }} />
                <Body>
                  <Text>Some Stuido</Text>
                  <Text note>Taevon Jordan</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: "https://www.gearank.com/sites/default/files/styles/large/public/field/image/home-recording-studio.jpg?itok=RGnFJgCd" }}
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
                  <Text>$25 per/HR</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                  <Icon active name="md-microphone" 
                    style={{color: 'red'}}
                  />
                  <Text style={{color: 'red'}}>Book Now!</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}