import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Header from '../common/header'
import Input from '../common/input'
import Inpu from '../common/inpu'
import { Actions } from 'react-native-router-flux'
import { LinearGradient } from 'expo'

class Login extends Component {

    render() {
        return (
            <View style={{ backgroundColor: "white", height: '100%', width: '100%' }}>
            <Header 
                title="Log In"
                onPress={() => Actions.pop()}
                leftIcon='keyboard-backspace'
            />
            <Text style={styles.textStyle}>
                Hello there!{"\n"}
                Welcome back
            </Text>
            <Inpu
                label="Email"
                placeholder="Email Address"
                iconName="email-outline"
            />
            <Inpu
                label="Password"
                placeholder="Password"
                iconName="lock-outline"
            />
            <TouchableOpacity style={{ padding: 15, alignSelf: 'flex-end', marginRight: 15 }}>
                <Text style={{ color:'#4b38c4', fontWeight: '500', fontSize: 18 }}>
                    Forgot your password?
                </Text>
            </TouchableOpacity>
            <LinearGradient
                    colors={[ '#4d2ec9'  , '#cf32f2']}
                    style={{ borderRadius: 5, marginLeft: 4, marginRight: 4, marginTop: 20, width: '85%', alignItems: 'center', height: 55, alignSelf: 'center'}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                        >
                    <TouchableOpacity onPress={() => Actions.home()} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{ fontSize: 26, fontWeight: "600", paddingTop: 5, color: 'white'}}>Log in</Text>
                    </TouchableOpacity>
            </LinearGradient>
            <View style={{ flexDirection: 'row', paddingTop: 100, alignSelf: 'center'}}>
                <Text style={{ fontSize: 16, color: '#262728' }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => Actions.signup()}>
                        <Text style={{ color: '#4b38c4', paddingLeft: 10, fontSize: 16, fontWeight: '600'}}>Sign up</Text>
                    </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 30,
        padding: 10,
        marginTop: 60,
        marginLeft: 25,
        fontWeight: '400',
        color: '#262728',
        marginBottom: 40
    }
}


export default Login