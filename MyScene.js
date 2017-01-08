import React, { Component, PropTypes } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Current scene: {this.props.title}</Text>
        <TouchableHighlight
          onPress={this.props.onForward}
          style={styles.button}
        >
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.props.onBack}
          style={styles.button}
        >
          <Text>Tap me to load the previous scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green',
    margin: 5,
  }

})
MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
}
