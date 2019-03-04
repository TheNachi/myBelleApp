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
                    <Text style={{ fontSize: 35, fontWeight: "500", color: 'white', marginTop: '60%'}}>
                        Welcome to Mybellé
                    </Text>
                    <Text style={{ fontSize: 35, fontWeight: "500", color: 'white', marginBottom: '40%'}}>
                        Pregnancy App
                    </Text>
                    <LinearGradient
                    colors={[ '#4d2ec9'  , '#cf32f2']}
                    style={{ borderRadius: 5, marginLeft: '1%', marginRight: '1%', marginTop: '2%', width: '85%', alignItems: 'center', height: 55}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                        >
                        <TouchableOpacity onPress={() => Actions.signup()} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{ fontSize: 26, fontWeight: "600", paddingTop: 5, color: 'white'}}>Sign up</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity onPress={() => Actions.login()} style={{ backgroundColor: 'rgb(255, 255, 255)', opacity: 0.6, borderRadius: '4%', marginLeft: '1%', marginRight: '1%', marginTop: '4%', width: '85%'}}>
                        <Text style={{ alignSelf: 'center', paddingTop: '4%', paddingBottom: '4%', fontSize: 26, fontWeight: "600", color: '#DF44E4'}}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = {
    buttonStyle: {
        // backgroundColor: 'rgb(153, 101, 21)',
        // borderRadius: '4%',
        // marginLeft: '1%',
        // marginRight: '1%',
        // marginTop: '2%',
        // marginBottom: '3%',
        // alignItems: 'center'
        
    },
}


export default Login;