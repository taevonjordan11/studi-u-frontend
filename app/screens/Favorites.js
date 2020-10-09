import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

const Favorites = (props) => {
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
    </View>
  );
};

export default Favorites;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

