import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'
import { LinearGradient } from 'expo'


class Login extends Component {

    render() {
        return (
            <ImageBackground source={require('../../assets/preg_woman.jpg')} style={{ width: '100%', height: '100%'}}>
                <View style={{ alignItems: 'center', height: '100%'}}>
                    <Text style={{ fontSize: 35, fontWeight: "500", color: 'white', marginTop: 200}}>
                        Welcome to Mybellé
                    </Text>
                    <Text style={{ fontSize: 35, fontWeight: "500", color: 'white', marginBottom: 140}}>
                        Pregnancy App
                    </Text>
                    <LinearGradient
                    colors={[ '#4d2ec9'  , '#cf32f2']}
                    style={{ borderRadius: 5, marginLeft: 5, marginRight: 5, marginTop: 5, width: '85%', alignItems: 'center', height: 60}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                        >
                        <TouchableOpacity onPress={() => Actions.signup()} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{ fontSize: 26, fontWeight: "600", paddingTop: 5, paddingBottom: 5, color: 'white'}}>Sign up</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity onPress={() => Actions.login()} style={{ backgroundColor: 'rgb(255, 255, 255)', opacity: 0.6, borderRadius: 4, marginLeft: 2, marginRight: 2, marginTop: 10, width: '85%'}}>
                        <Text style={{ alignSelf: 'center', paddingTop: 12, paddingBottom: 12, fontSize: 26, fontWeight: "600", color: '#DF44E4'}}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}


export default Login;