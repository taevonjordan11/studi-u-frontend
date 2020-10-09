import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = (props) => {
  return (
    <Container>
      <BgImage
        source={require("/Users/nude.plus/Development/code/MOD5/studi-u/assets/bg.jpg")}
      />
      <TitleBar>
        <Ionicons
          name="md-arrow-back"
          size={25}
          color="white"
          style={{ position: "absolute", left: 30, top: 10 }}
        />
        <AvatarBorder>
            <Avatar />
        </AvatarBorder>
      </TitleBar>
    </Container>
  );
};

export default HomeScreen;

const AvatarBorder= styled.View`

`

const Avatar= styled.View`

`

const Container = styled.View`
  flex: 1;
  background: #fff;
`;

const BgImage = styled.Image`
position: absolute
top:0;
left:0;
right:0;
height:660px;
`;

const TitleBar = styled.View`
width: 100%
margin-top: 50px;
padding-left: 80px
`;
