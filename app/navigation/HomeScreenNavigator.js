import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from '../screens/HomeScreen'
import BookingScreen from '../screens/BookingScreen'
import StudioCard from '../screens/StudioCard'
import PaymentScreen from '../screens/PaymentScreen'

const HomeStack = createStackNavigator();

const HomeScreenNavigator = (props) => {
  return (
    
      <HomeStack.Navigator
    
        initialRouteName="HomeScreen"

      >
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <HomeStack.Screen name="BookingScreen" component={BookingScreen} />
        <HomeStack.Screen name="StudioCard" component={StudioCard} />
        <HomeStack.Screen name="PaymentScreen" component={PaymentScreen} />
      </HomeStack.Navigator>
  );
};


export default HomeScreenNavigator