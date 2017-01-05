import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = { showText: true }

    // toggle the text every second
    setInterval( () => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    )
  }
}

class BlinkApp extends Component {
  render() {
    return(
      <View>
        <Blink text="I love to blink"/>
        <Blink text="Yes blinking is so great"/>
        <Blink text="Why did they ever take this away from HTML?"/>
        <Blink text="Look at me, look at me, i'm your blinker now"/>
      </View>
    )
  }
}

export default BlinkApp;
