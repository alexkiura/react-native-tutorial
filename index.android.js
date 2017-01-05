import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Banana from './Banana';
import ManyGreetings from './Greeting';
import BlinkApp from './Blink';
import LotsOfStyles from './Styles';
import FixedDimensionsBasics from './Dimensions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class HelloReact extends Component {
  render() {
    return (
      <FixedDimensionsBasics />
    );
  }
}


AppRegistry.registerComponent('HelloReact', () => HelloReact);
