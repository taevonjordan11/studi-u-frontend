import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Container, Header, Content, Form, Item, Input } from "native-base";
import { Button } from "react-native-elements";

export default class NewStudio extends Component {
  state = {
    name: "",
    address: "",
    contact: "",
    description: "",
    image: "",
    rating: 0,
    price: 0,
  };

  postStudio = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        address: this.state.address,
        contact: this.state.contact,
        description: this.state.description,
        image: this.state.image,
        price: this.state.price,
        user_id: 13,
      }),
    };

    fetch("http://localhost:3000/api/v1/studios", options)
      .then(
        this.setState({
          name: "",
          address: "",
          contact: "",
          description: "",
          image: "",
          rating: 0,
          price: 0,
        })
      )
      .then(() => this.props.navigation.navigate("HomeScreen"));
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                name="name"
                type="text"
                placeholder="Studio Name"
                onChangeText={(value) =>
                  this.setState({
                    name: value,
                  })
                }
              />
            </Item>
            <Item last>
              <Input
                placeholder="Add Address"
                onChangeText={(value) =>
                  this.setState({
                    address: value,
                  })
                }
              />
            </Item>
            <Item>
              <Input
                placeholder="Contact"
                onChangeText={(value) =>
                  this.setState({
                    contact: value,
                  })
                }
              />
            </Item>
            <Item last>
              <Input
                placeholder="Add Description"
                onChangeText={(value) =>
                  this.setState({
                    description: value,
                  })
                }
              />
            </Item>
            <Item>
              <Input
                placeholder="Add Image URL"
                onChangeText={(value) =>
                  this.setState({
                    image: value,
                  })
                }
              />
            </Item>
            <Item last>
              <Input
                placeholder="Name your Price per hour!"
                onChangeText={(value) =>
                  this.setState({
                    price: value,
                  })
                }
              />
            </Item>
            <Button
              title="Create Studio Listing"
              onPress={() => this.postStudio()}
            />
          </Form>
        </Content>
      </Container>
    );
  }
}
