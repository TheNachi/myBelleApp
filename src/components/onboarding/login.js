import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Header from '../common/header'
import Input from '../common/input'
import Inpu from '../common/inpu'
import { Actions } from 'react-native-router-flux'
import { LinearGradient } from 'expo'
import { post as axiosPost } from 'axios';
import Validator from '../../libraries/validator';
import { API_HOST } from '../../config';

class Login extends Component {

    state = {
        fieldValues: {
            email: '',
            password: '',
        },
        fieldErrors: {
            email: '',
            password: '',
        },
        working: false,
    };

    fieldRules = {
        email: {
            required: 'Email address is required',
            valid_email: 'Provide a valid email address'
        },
        password: {
            required: 'Password is required'
        },
    };

    validateField(field, value) {
        const rules = {
            [field]: this.fieldRules[field]
        };

        const validator = new Validator({
            [field]: value,
        });
        const { fieldErrors } = this.state;
        if (!validator.validate(rules)) {
            fieldErrors[field] = validator.getErrors()[field];
        } else {
            fieldErrors[field] = '';
        }
        this.setState({ fieldErrors });
    }

    handleTextInput = (name, value) => {
        const { fieldValues } = this.state;
        fieldValues[name] = value;
        this.setState({ fieldValues });

        this.validateField(name, value);
    };

    validateForm() {
        const { fieldValues } = this.state;
        const validator = new Validator(fieldValues);

        const success = validator.validate(this.fieldRules);
        if (!success) {
            this.setState({ fieldErrors: validator.getErrors() });
        }
        return success;
    }

    authenticateUser() {
        const { fieldValues, working } = this.state;

        if (working) {
            return;
        }

        if (this.validateForm()) {
            this.setState({ working: true });

            axiosPost('auth/local', {
                identifier: fieldValues.email,
                password: fieldValues.password
            }, {
                baseURL: API_HOST,
            })
                .then(({ data }) => {
                    console.log(data);

                    Actions.home();
                })
                .catch((error) => {
                    console.log(error);
                    this.setState({ working: false });
                });
        }
    }

    render() {
        const { fieldErrors } = this.state;

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
                onChangeText={text => this.handleTextInput('email', text)}
            />
            {!!fieldErrors.email && <Text style={styles.errorStyle}>{fieldErrors.email}</Text>}
            <Inpu
                label="Password"
                placeholder="Password"
                iconName="lock-outline"
                onChangeText={text => this.handleTextInput('password', text)}
            />
            {!!fieldErrors.password && <Text style={styles.errorStyle}>{fieldErrors.password}</Text>}
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
                    <TouchableOpacity onPress={() => this.authenticateUser()} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
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
    errorStyle: {
        color: '#c00',
        marginLeft: 30,
        marginTop: 3,
    },
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