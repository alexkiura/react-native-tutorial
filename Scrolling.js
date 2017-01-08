import React, { Component } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';


class ScrollingBasics extends Component {
  render() {
    return(
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Text style={{ fontSize: 96 }}>If you want</Text>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Image source={require('./img/favicon.png')}/>
        <Text style={{ fontSize: 96 }}>The best framework</Text>
      </ScrollView>
    )
  }
}

export default ScrollingBasics;
