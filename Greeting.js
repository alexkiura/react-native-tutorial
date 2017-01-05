import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    )
  }
}

class ManyGreetings extends Component {
    render() {
      return (
        <View style={{ alignItems: 'center'}}>
          <Greeting name="Smarty"/>
          <Greeting name="Mercy"/>
          <Greeting name="Jackie"/>
          <Greeting name="Sarah"/>
          <Greeting name="Reepa"/>
        </View>
      )
    }
}

export default ManyGreetings;
