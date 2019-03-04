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
            />
            <Inpu
                label="Password"
                placeholder="Password"
            />
            <TouchableOpacity style={{ padding: 15, alignSelf: 'flex-end', marginRight: 15 }}>
                <Text style={{ color:'#4D7DA9', fontWeight: '500', fontSize: 18 }}>
                    Forgot your password?
                </Text>
            </TouchableOpacity>
            <LinearGradient
                    colors={[ '#4D7DA9'  , '#DF44E4']}
                    style={{ borderRadius: 5, marginLeft: '1%', marginRight: '1%', marginTop: '2%', width: '85%', alignItems: 'center', height: 55, alignSelf: 'center'}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                        >
                        <TouchableOpacity onPress={() => Actions.signup()} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{ fontSize: 26, fontWeight: "600", paddingTop: 5, color: 'white'}}>Sign up</Text>
                        </TouchableOpacity>
                    </LinearGradient>
            <View style={{ flexDirection: 'row', paddingTop: 100, alignSelf: 'center'}}>
                <Text style={{ fontSize: 16, color: '#515A5A' }}>Don't have an account?</Text>
                <Text style={{ color: '#4D7DA9', paddingLeft: 10, fontSize: 16, fontWeight: '600'}}>Sign up</Text>
            </View>
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 30,
        padding: '1%',
        marginTop: '20%',
        marginLeft: '10%',
        fontWeight: '400',
        color: 'gray',
        marginBottom: '16%'
    }
}


export default Login