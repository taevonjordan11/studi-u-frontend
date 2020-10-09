import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";

import Login from "../screens/LoginScreen";

const LoginStack = createStackNavigator();

const LoginStackNavigator = (props) => {
  const { loginHandler } = props;

  return (
    <NavigationContainer>
      <LoginStack.Navigator
        style={styles.container}
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <LoginStack.Screen name="Login">
          {(props) => <Login {...props} loginHandler={loginHandler} />}
        </LoginStack.Screen>
        <LoginStack.Screen name="HomeScreen" component={HomeScreen} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginStackNavigator;
