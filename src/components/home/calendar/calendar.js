import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { LinearGradient } from 'expo'
import { Container, Content, Tab, Tabs } from 'native-base';
import Modal from 'react-native-modal'
import Header from '../../common/header'
import Sidebar from '../../common/sidebar'
import MyPregnancy from './myPregnancy'
import ANC from './anc'


class Calendar extends Component {

    state = {
        selected: undefined,
        isModalVisible: false
    }

    onValueChange = (value) =>
        this.setState({
          selected: value
        });

    _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

    render() {
        return (
            <View>
                <Header 
                    title="Calendar"
                    leftIcon="menu"
                    onPress={this._toggleModal}
                />
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


export default Calendar;