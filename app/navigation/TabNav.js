import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import HomeScreen from "../screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import NewStudio from "../screens/NewStudio";
import HomeScreenNavigator from "./HomeScreenNavigator";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Favorites") {
            iconName = focused ? "ios-heart" : "ios-heart";
          } else if (route.name === "NewStudio") {
            iconName = focused ? "ios-add" : "ios-add";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "dodgerblue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreenNavigator} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="NewStudio" component={NewStudio} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
