import React from "react";
import { View,  StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './LoginScreen'


class Logout extends React.Component{
  
  render(){
    return (
      <View style={styles.container}>
        <Button 
          onPress={() => this.props.navigation.navigate('Login')}
          icon={
            <Icon
              name="arrow-right"
              size={15}
              color="white"
            />
          }
          
          title="Logout"
          
        />
  
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Logout;
