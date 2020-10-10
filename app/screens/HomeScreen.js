import React from "react";
import { View, Button, StyleSheet, Text, SafeAreaView, ScrollView} from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { SearchBar } from "react-native-elements";
import StudioCard from './StudioCard'

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
        <Button 
        title=' hELLO'
        onPress={() =>
          this.props.navigation.navigate("BookingScreen")
        }
        >
          
        </Button>
        <SearchBar
          style={styles.searchBar}
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          platform="ios"
          showCancel={true}
        />
          <ScrollView>
      <StudioCard />
    </ScrollView>

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
