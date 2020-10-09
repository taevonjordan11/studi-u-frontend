import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

const Profile = (props) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

