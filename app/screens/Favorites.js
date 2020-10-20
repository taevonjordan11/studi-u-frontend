import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import { createBottomTabNavigator } from "react-navigation";
import StudioCard from "./StudioCard";
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

class Favorites extends React.Component {
  state = {
    favoritesArray: [],
  };

  componentDidMount() {
    this.props.navigation.addListener("focus", this.favsFetch);
    this.favsFetch();
  }

  favsFetch = () => {
    fetch("http://localhost:3000/api/v1/favorites")
      .then((resp) => resp.json())
      .then((obj) => {
        this.setState({
          favoritesArray: obj,
        });
      });
  };

  UnfavoritePost = (id) => {
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

    fetch(`http://localhost:3000/api/v1/favorites/${id}`, options).then(() =>
      this.favsFetch()
    );
  };

  favs = () =>
    this.state.favoritesArray.map((fav) => {
      return (
        <Content key={fav.id}>
          <Divider />
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: fav.studio.image,
                  }}
                />
                <Body>
                  <Text>{fav.studio.name}</Text>
                  <Text note>{fav.studio.address}</Text>
                  <Text note>Contact: {fav.studio.contact}</Text>
                  <Text note>Description: {fav.studio.description}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri: fav.studio.image,
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button onPress={() => this.UnfavoritePost(fav.id)} transparent>
                  <Icon active name="ios-heart-dislike" />
                  <Text>Un-Favorite</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="ios-cash" />
                  <Text>${fav.studio.price}per/HR</Text>
                </Button>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Button
                    onPress={() =>
                      this.props.navigation.navigate("BookingScreen", {
                        otherParam: fav,
                      })
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
          <Divider />
        </Content>
      );
    });
  render() {
    return (
      <SafeAreaView>
        <ScrollView>{this.favs()}</ScrollView>
      </SafeAreaView>
    );
  }
}

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
