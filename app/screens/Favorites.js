import React from "react";
import { View, Button, StyleSheet, Text, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import StudioCard from './StudioCard'

const Favorites = (props) => {
  return (
    <>
    <StudioCard />
    </>
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

