import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { SearchBar } from 'react-native-elements';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

