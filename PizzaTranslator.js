import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 0.5,
    height: 40,
  },
  text: {
    padding: 10,
    fontSize: 42,
  }
})
class PizzaTranslator extends Component {
  constructor(props) {
    super(props)
    this.state = { text: ''}
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Type here to translate!"
          onChangeText={(text) => {this.setState({text})}}
        />
        <Text style={styles.text}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

      </View>
    )
  }

}

export default PizzaTranslator;
