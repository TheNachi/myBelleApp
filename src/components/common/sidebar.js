import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux'
import { LinearGradient } from 'expo'


class Sidebar extends Component {

    render() {
        return (
            <LinearGradient
                colors={[ '#4d2ec9'  , '#cf32f2']}
                style={{  width: '100%', height: '100%'}}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                >
                <TouchableOpacity onPress={()=> Actions.home()} style={{ alignSelf: 'flex-end', padding: 15 }}>
                    <Icon name="close" size={30} color='#f4b642' />
                </TouchableOpacity>
                <Image style={{ height: 120, width: 120, borderRadius: 120/2, alignSelf: 'center' }} source={require('../../assets/placeholderPicture.jpg')} />
                <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: '600', padding: 5}}>
                    Aboy Likethat
                </Text>
                <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
                    <Icon name='calendar-multiselect' size={30} color='#619dd8' style={{ paddingLeft: 5}} />
                    <Text style={{ fontSize: 20, fontWeight: "600", color: '#f4b642', padding: 5}}>Calendar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => Actions.myBelleCommunity()}>
                    <Icon name='wechat' size={30} color='#619dd8' style={{ paddingLeft: 5}} />
                    <Text style={{ fontSize: 20, fontWeight: "600", color: '#f4b642', padding: 5}}>MyBellé Community</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                    <Icon name='account' size={30} color='#619dd8' style={{ paddingLeft: 5}} />
                    <Text style={{ fontSize: 20, fontWeight: "600", color: '#f4b642', padding: 5}}>Find a healthcare provider</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => Actions.tools()}>
                    <Icon name='settings' size={30} color='#619dd8'style={{ paddingLeft: 5}} />
                    <Text style={{ fontSize: 20, fontWeight: "600", color: '#f4b642', padding: 5}}>Tools</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                    <Icon name='more' size={30} color='#619dd8' style={{ paddingLeft: 5}} />
                    <Text style={{ fontSize: 20, fontWeight: "600", color: '#f4b642', padding: 5}}>More</Text>
                </TouchableOpacity>
            </LinearGradient>
                    
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


export default Sidebar;