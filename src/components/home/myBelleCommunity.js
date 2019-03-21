import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from 'react-native-modal'
import Sidebar from '../common/sidebar'
import { Actions } from 'react-native-router-flux'
import { LinearGradient } from 'expo'
import Header from '../common/header'


class MyBelleCommunity extends Component {

    state = {
        selected: undefined,
        isModalVisible: false
    }

    onValueChange = (value) =>
        this.setState({
          selected: value
        });

    _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

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
            <View style={{ flex: 1}}>
                <Header 
                    title="Mybellé Community"
                    leftIcon="menu"
                    onPress={this._toggleModal}
                    rightIcon='comment'
                />
                <ScrollView style={{ flex: 1}}>
                    {this.multiplyComments()}
                    {this.multiplyComments()}
                    {this.multiplyComments()}
                    {this.multiplyComments()}
                    {this.multiplyComments()}
                </ScrollView>
                <Modal
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={() => this.setState({ isModalVisible: false })}
                    animationIn="slideInLeft"
                    animationOut="slideOutRight"
                    >
                    <View style={{ width:'90%', height:'105%', marginLeft: -17}}>
                        <Sidebar />
                    </View>
                </Modal>
            </View>
        )
    }
}


export default MyBelleCommunity;