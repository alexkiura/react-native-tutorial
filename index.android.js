import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Banana from './Banana';
import ManyGreetings from './Greeting'

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
      <View style={styles.container}>
        <Text style={styles.welcome}>
          A banana is shown below
        </Text>
        <Banana />
        <Text style={styles.instructions}>Let's say hi to:</Text>
        <ManyGreetings />
      </View>
    );
  }
}


AppRegistry.registerComponent('HelloReact', () => HelloReact);
