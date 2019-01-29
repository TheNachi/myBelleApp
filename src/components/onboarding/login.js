import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from '../common/header'
import Input from '../common/input'

class Login extends Component {

    render() {
        return (
            <View>
                <Header />
                <Text style={styles.textStyle}>
                    Hello there!{"\n"}
                    Welcome back
                </Text>
                <Input
                    label="Email"
                    placeholder="Email Address"
                />
                <Input
                    label="Password"
                    placeholder="Password"
                />

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