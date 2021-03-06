import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import HomeScreen from "../screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import NewStudio from "../screens/NewStudio";
import HomeScreenNavigator from "./HomeScreenNavigator";

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
            size = 26;
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-list-box" : "ios-list";
            size = 26;
          } else if (route.name === "Favorites") {
            iconName = focused ? "ios-heart" : "ios-heart";
            size = 26;
          } else if (route.name === "NewStudio") {
            iconName = focused ? "ios-add" : "ios-add";
            size = 26;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "dodgerblue",
        inactiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#43ada5",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarColor: "#f04e3e",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="NewStudio"
        component={NewStudio}
        options={{
          tabBarLabel: "NewStudio",
          tabBarColor: "#fcca64",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="folder-plus"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#43434f",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
