import * as React from "react";
import { Text, View, Image, Button } from "react-native";
import { Header } from "react-native-elements";
import LottieView from 'lottie-react-native';
import { iOSUIKit } from "react-native-typography";


class Done extends React.Component {
  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={iOSUIKit.body} >Your Session Has Been Booked!</Text>
        <LottieView source={require('./animation.json')} style={{height: 100, width: 100}} autoPlay loop={false} />
        <Button title="Go Back to Home" onPress={()=>this.props.navigation.popToTop()} />
      </View>
    );
  }
}

export default Done;