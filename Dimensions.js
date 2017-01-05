import React, { Component } from 'react';
import {
  View
} from 'react-native';

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}/>
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
      </View>
    )
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.25, backgroundColor: 'powderblue' }}/>
        <View style={{ flex: 0.25, backgroundColor: 'skyblue'}}/>
        <View style={{ flex: 0.5, backgroundColor: 'steelblue'}}/>
      </View>
    )
  }
}

export default FlexDimensionsBasics;
