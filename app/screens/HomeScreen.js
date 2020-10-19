import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { SearchBar, Divider } from "react-native-elements";

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
import BookingScreen from "../screens/BookingScreen";

class HomeScreen extends React.Component {
  state = {
    search: "",
    studioArray: [],
    favortitesArray: [],
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  componentDidMount() {
    this.props.navigation.addListener("focus", this.studioFetch);
    this.studioFetch();
  }

  find = () => {
    let filteredArray = this.state.studioArray.filter((obj) =>
      obj.address.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return filteredArray.map((found) => this.card());
  };

  studioFetch = () => {
    fetch("http://localhost:3000/api/v1/studios")
      .then((resp) => resp.json())
      .then((obj) => {
        this.setState({
          studioArray: obj,
        });
      });
  };

  favoritePost = (id) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        studio_id: id,
        user_id: 13,
      }),
    };

    fetch("http://localhost:3000/api/v1/favorites", options).then(() =>
      this.props.navigation.navigate("Favorites")
    );
  };

  find = () => {
    let filteredArray = this.state.studioArray.filter((obj) =>
      obj.address.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return filteredArray.map((obj) => {
      return (
        
        <Content>
          <Divider />
          <Card key={obj.id}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: obj.image,
                  }}
                />
                <Body>
                  <Text>{obj.name}</Text>
                  <Text note>{obj.address}</Text>
                  <Text note>Contact: {obj.contact}</Text>
                  <Text note>Description: {obj.description}</Text>
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
                <Button onPress={() => this.favoritePost(obj.id)} transparent>
                  <Icon active name="heart" />
                  <Text>Favorite</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="ios-cash" />
                  <Text>${obj.price}per/HR</Text>
                </Button>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Button
                    onPress={() =>
                      this.props.navigation.navigate("BookingScreen", {
                        otherParam: obj,
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
  };

  

  render() {

    return (
      <SafeAreaView>
        <SearchBar
          style={styles.searchBar}
          placeholder="Search by Borough..."
          onChangeText={this.updateSearch}
          value={this.state.search}
          platform="ios"
        />
        <ScrollView>{this.find()}</ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
