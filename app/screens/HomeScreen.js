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
import { SearchBar } from "react-native-elements";
import StudioCard from "./StudioCard";
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

class HomeScreen extends React.Component {
  state = {
    search: "",
    studioArray: [],
  };

  updateSearch = (search) => {
    this.setState({ search });
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

  card = () =>
    this.state.studioArray.map((obj) => {
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
                <Button transparent>
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
                      this.props.navigation.navigate("BookingScreen", 
                      {otherParam: obj}
                      )
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

  render() {
    const { search } = this.state;

    return (
      <SafeAreaView>
        <SearchBar
          style={styles.searchBar}
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          platform="ios"
          showCancel={true}
        />

        <ScrollView>{this.card()}</ScrollView>

        {/* <ScrollView>
        <StudioCard />
      </ScrollView> */}
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
