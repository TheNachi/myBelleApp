import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { Container, Content, Picker, Form } from "native-base"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../common/header'
import Input from '../common/input'
import Inpu from '../common/inpu'
import { Actions } from 'react-native-router-flux'
import Card from '../common/card'
import { LinearGradient } from 'expo'



class Hospital extends Component {
    
    render() {
        return (
            <View style={{ backgroundColor: "white", height: '100%', width: '100%' }}>
                <ImageBackground 
                    style={{ width:'100%', height: 200  }}
                    source={require('../../assets/hospitalBackground.jpg')}
                    >
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Icon name='keyboard-backspace' size={30} color='#cf32f2' style={{ padding: 13}} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={{ padding: 15}}>
                <Text style={{ fontSize: 25, padding: 3, color: '#4d2ec9', fontWeight: '500'}}>Ikeja General Hospital</Text>
                <Text style={{ fontSize: 14, padding: 3, color: '#cf32f2', fontWeight: '600'  }}>No 1, Somewhere in Ikeja GRA, Ikeja, Lagos, Nigeria</Text>
                <Text style={{ fontSize: 14, padding: 3, color: '#cf32f2', fontWeight: '600' }}>Phone Number: 08126736749</Text>
                <View style={{ flexDirection: "row", padding: 5 }}>
                    <Icon name='star' size={30} color='#f4b642' />
                    <Icon name='star' size={30} color='#f4b642' />
                    <Icon name='star' size={30} color='#f4b642' />
                    <Icon name='star' size={30} color='#f4b642' />
                    <Icon name='star' size={30} color='#f4b642' />
                </View>
                <Text style={{ fontSize: 14, color: '#cf32f2', padding: 3  }}>2345 reviews/comments</Text>
                </View>
                <TouchableOpacity style={{ width: 150, height: 50, borderWidth: 1, margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#619dd8', marginLeft: 21 }}>
                    <Text style={{ color:'#619dd8'}}>
                        Leave a Review
                    </Text>
                </TouchableOpacity>
                <LinearGradient
                    colors={[ '#4d2ec9'  , '#cf32f2']}
                    style={{ borderRadius: 5, marginLeft: 21, marginRight: '1%', width: '85%', justifyContent: 'center', alignItems: 'center', height: 55}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                        >
                    <TouchableOpacity style={{ width: '100%', height:'100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'  }}>
                        <Icon name='map-marker' size={30} color='white' style={{ padding: 13}} />
                        <Text style={{ fontSize: 24, fontWeight: "600", color: 'white'}}>Get Directions</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#cf32f2',
        paddingBottom: 5
    },
    containerStyle: {
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
}


export default Hospital