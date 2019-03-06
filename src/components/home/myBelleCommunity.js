import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { LinearGradient } from 'expo'
import Header from '../common/header'


class MyBelleCommunity extends Component {

    multiplyComments = () => {
        return (
            <View style={{ padding: 15, borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'gray' }}>
                <View style={{ flexDirection: 'row'}}>
                    <Image style={{ height: 50, width: 50, }} source={require('../../assets/placeholderPicture.jpg')} />
                    <View style={{  paddingLeft: 5 }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Text style={{ fontWeight: '700', fontSize: 16 }}>
                                Some Guy
                            </Text>
                            <Text style={{ fontWeight: '300', fontSize: 14, marginLeft: 10, paddingTop: 2, color:'gray'}}>
                                2 days Ago
                            </Text>
                        </View>
                        <Text style={{ fontSize: 16, flex: 1, paddingTop: 10}}>
                            Title of the post
                        </Text>
                    </View>
                </View>
                <Text style={{ marginTop: 10, marginBottom: 10, fontSize: 16, color: '#585c60'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna
                </Text>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{ flexDirection: 'row', flex:1}}>
                        <Icon name='wechat' size={30} color='gray' style={{ }} />
                        <Text style={{ padding: 5}}>
                            123
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex:1, paddingLeft: 100}}>
                        <Icon name='eye' size={30} color='gray' style={{ paddingLeft: 5}} />
                        <Text style={{ padding: 5}}>234</Text>
                    </View>    
                </View>
            </View>
        )
    }

    render() {
        return (
            <View>
                <Header 
                    title="Mybellé Community"
                    leftIcon="menu"
                />
                <ScrollView>
                    {this.multiplyComments()}
                    {this.multiplyComments()}
                    {this.multiplyComments()}
                    {this.multiplyComments()}
                </ScrollView>
            </View>
        )
    }
}


export default MyBelleCommunity;