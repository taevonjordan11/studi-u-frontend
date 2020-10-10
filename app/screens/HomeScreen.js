import React from "react";
import { View, Button, StyleSheet, Text, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { SearchBar } from "react-native-elements";

class HomeScreen extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

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
        <View style={styles.container}>
          <Text>HomeScreen</Text>
        </View>
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
