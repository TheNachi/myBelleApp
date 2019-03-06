import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { LinearGradient } from 'expo'


class Tools extends Component {

    render() {
        return (
            <View>
                <View style={styles.viewStyle}>
                    <TouchableOpacity style={styles.backViewStyle} onPress={() => Actions.pop()}>
                        <Icon name='menu' size={30} style={styles.iconStyle} color='gray' />
                    </TouchableOpacity>
                    <View style={styles.thumbnailViewStyle}>
                        <Text style={styles.textStyle}>
                            Tools
                        </Text>
                    </View>
                </View>
                <LinearGradient
                    colors={[ '#4d2ec9'  , '#cf32f2']}
                    style={{ height: '90%'}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                        >
                        <View style={{ flexDirection: 'row', width: '100%', flex: 1}}>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
                                <Image style={{ height: 90, width: 90, borderRadius: 90/2, alignSelf: 'center' }} source={require('../../assets/baby.jpg')} />
                                <Text style={{ fontSize: 18, color: 'white', alignSelf: 'center', fontWeight: '600', padding: 5}}>
                                    Baby Names
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{  flex: 1, justifyContent: 'center' }}>
                                <Image style={{ height: 90, width: 90, borderRadius: 90/2, alignSelf: 'center' }} source={require('../../assets/calculator.jpg')} />
                                <Text style={{ fontSize: 18, color: 'white', alignSelf: 'center', fontWeight: '600', padding: 5}}>
                                       EDD Calculator
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', flex: 1}}>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center'  }}>
                                <Image style={{ height: 90, width: 90, borderRadius: 90/2, alignSelf: 'center' }} source={require('../../assets/todolist.jpg')} />
                                <Text style={{ fontSize: 18, color: 'white', alignSelf: 'center', fontWeight: '600', padding: 5}}>
                                    To Do List
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center'  }}>
                                <Image style={{ height: 90, width: 90, borderRadius: 90/2, alignSelf: 'center' }} source={require('../../assets/weight.jpg')} />
                                <Text style={{ fontSize: 18, color: 'white', alignSelf: 'center', fontWeight: '600', padding: 5}}>
                                    Weight Tracking
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', flex: 1}}>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center'  }}>
                                <Image style={{ height: 90, width: 90, borderRadius: 90/2, alignSelf: 'center' }} source={require('../../assets/appointment.jpg')} />
                                <Text style={{ fontSize: 18, color: 'white', alignSelf: 'center', fontWeight: '600', padding: 5}}>
                                    Appointment Keeper
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center'  }}>
                            </TouchableOpacity>
                        </View>
                </LinearGradient>
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2 
        },
        shadowOpacity: 0.2, 
        elevation: 2,
        position: 'relative',
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 21,
        fontWeight: '500',
        color: '#cf32f2',
        marginLeft: -80
    }, 
    thumbnailViewStyle: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backViewStyle: {
        flex: 1,
    },
    iconStyle: {
        padding: 10
    }
}


export default Tools;