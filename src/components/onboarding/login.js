import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Header from '../common/header'
import Input from '../common/input'
import Inpu from '../common/inpu'
import { Actions } from 'react-native-router-flux'

class Login extends Component {

    render() {
        return (
            <View style={{ backgroundColor: "white", height: '100%', width: '100%' }}>
            <Header />
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
            <TouchableOpacity style={{ padding: 10, alignSelf: 'flex-end', marginRight: 15 }}>
                <Text>
                    Forgot your password?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.login()} style={{ backgroundColor: '#DF44E4', borderRadius: '4%', marginLeft: '1%', marginRight: '1%', marginTop: '2%', width: '85%', alignSelf: 'center'  }}>
                <Text style={{ alignSelf: 'center', paddingTop: '4%', paddingBottom: '4%', fontSize: 20, fontWeight: "500", color: 'white'}}>Log in</Text>
            </TouchableOpacity>
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
        fontSize: 28,
        padding: '1%',
        marginTop: '20%',
        marginLeft: '10%',
        fontWeight: '400',
        color: 'gray',
        marginBottom: '20%'
    }
}


export default Login