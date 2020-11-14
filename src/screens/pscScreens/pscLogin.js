import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Form,
  Text,
  Toast,
  List,
  ListItem,
  Icon,
  Thumbnail,
} from "native-base";

class IgLogin extends Component {
  constructor(props) {
    super(props);
    // console.log(props);

    const { dispatch } = this.props;
    const { state, setParams, navigate } = props.navigation;

    this.state = {
      loging: false,
      email: "igen054@igenco.co.th",
      password: "123456",
      movies: null,
      spinner: false,
      params: state.params || {},
    };

    console.log("params : ", this.state.params);
  }

  handleChangeEmail = (e) => {
    this.setState({ email: e.nativeEvent.text });
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.nativeEvent.text });
  };

  render() {
    return (
      <Container>
        <Header>
          {/* <Left style={{ flex: 1 }}>
            <Button>
              <Icon name="home" />
            </Button>
          </Left> */}

          <Left style={{ flex: 1 }} />
          <Body
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Title>Login Office</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>

        <Content>
          {this.state.loging ? (
            <Spinner
              visible={this.state.spinner}
              textContent={"Loading..."}
              textStyle={styles.spinnerTextStyle}
            />
          ) : null}
          <View style={styles.igImg}>
            <Thumbnail
              source={require(`./../../../assets/logo.png`)}
              style={styles.igLogo}
            />
          </View>
          <Form>
            <Item fixedLabel>
              <Label>Email</Label>
              <Input
                onChange={this.handleChangeEmail}
                value={this.state.email}
              />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input
                onChange={this.handleChangePassword}
                value={this.state.password}
                secureTextEntry
              />
            </Item>
          </Form>
          <Button
            block
            style={{ margin: 15, marginTop: 50 }}
            onPress={() => console.log(`submit...`)}
          >
            <Text>Sing in</Text>
          </Button>

          <Text style={{ margin: 15, marginTop: 50, color: "red" }}>
            หมายเหตุ : xxx
          </Text>
        </Content>
      </Container>
    );
  }
}


export default (IgLogin);

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
  igImg: {
    justifyContent: "center",
    alignItems: "center",
  },
  igLogo: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
});
