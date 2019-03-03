import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux'

 class Splash extends Component {


  componentWillMount() {
    setTimeout(() => {
        Actions.intro()
    }, 3000);
}

  render() {
    return (
        <ImageBackground source={require('../../assets/preg_woman.jpg')} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center',}}>
        </ImageBackground>
    );
  }
}

export default Splash