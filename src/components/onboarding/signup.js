import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Header from '../common/header'
import Inpu from '../common/inpu'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DatePicker } from 'native-base'
import Modal from 'react-native-modal'
import { Actions } from 'react-native-router-flux'
import { LinearGradient } from 'expo'

class Signup extends Component {
    state = {
        isModalVisible: false,
        chosenDate: new Date()
    }

    _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

    setDate = (newDate) => this.setState({ chosenDate: newDate });
      

    render() {
        return (
            <View style={{ backgroundColor: "white", height: '100%', width: '100%' }}>
                <Header 
                    title="Sign up"
                    leftIcon="keyboard-backspace"
                    onPress={() => Actions.pop()}
                />
                <View style={{ marginTop: 40 }}>
                    <Inpu
                        label="Username"
                        placeholder="Username"
                        iconName="account-outline"
                    />
                    <Inpu
                        label="Email Address"
                        placeholder="Email Address"
                        iconName="email-outline"
                    />
                    <Inpu
                        label="Password"
                        placeholder="Password"
                        iconName="lock-outline"
                    />
                    <View style={{ marginLeft: 30, marginRight: 30, marginTop: 30}}>
                        <View style={{ flexDirection: 'row'}}>
                            <Icon name='calendar-multiselect' size={30} color='black' style={{ paddingLeft: 5}} />
                            <DatePicker
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(2016, 1, 1)}
                            maximumDate={new Date(2022, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select due date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                            />
                        </View>
                        <View style={{ borderWidth: 0.5, borderColor: 'gray', backgroundColor: 'blue', width:'100%'}}></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, marginBottom: 50 }}>
                        <Text style={{ fontSize: 16, color: '#515A5A' }}>Not sure of your Due date?</Text>
                        <TouchableOpacity onPress={this._toggleModal}>
                            <Text style={{ color: '#4b38c4', paddingLeft: 10, fontSize: 16, fontWeight: '600'}}>Calculate</Text>
                        </TouchableOpacity>
                    </View>
                    <LinearGradient
                        colors={[ '#4d2ec9'  , '#cf32f2']}
                        style={{ borderRadius: 5, marginLeft: '1%', marginRight: '1%', marginTop: '2%', width: '85%', alignItems: 'center', height: 55, alignSelf: 'center'}}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                            >
                        <TouchableOpacity onPress={() => Actions.home()} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{ fontSize: 26, fontWeight: "600", paddingTop: 5, color: 'white'}}>Sign up</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 70 }}>
                        <Text style={{ fontSize: 16, color: '#515A5A' }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => Actions.login()}>
                            <Text style={{ color: '#4b38c4', paddingLeft: 7, fontSize: 16, fontWeight: '600'}}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal 
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={() => this.setState({ isModalVisible: false })}>
                    <View style={{ width:'90%', height:'60%', alignSelf: 'center', backgroundColor: 'white'}}>
                        <TouchableOpacity onPress={()=> this.setState({ isModalVisible: false })} style={{ alignSelf: 'flex-end', padding: 10 }}>
                            <Icon name="close" size={30} color='#b5b3b7' />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 25, padding: 20, marginTop: 5 }}>
                            When was the first day of your last menstrual period
                        </Text>
                        <View style={{ marginLeft: 30, marginRight: 30, marginTop: 30}}>
                        <View style={{ flexDirection: 'row'}}>
                            <Icon name='calendar-multiselect' size={30} color='black' style={{ paddingLeft: 5}} />
                            <DatePicker
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(2016, 1, 1)}
                            maximumDate={new Date(2022, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                            />
                        </View>
                        <View style={{ borderWidth: 0.5, borderColor: 'gray', backgroundColor: 'blue', width:'100%'}}></View>
                    </View>
                        <LinearGradient
                            colors={[ '#4d2ec9'  , '#cf32f2']}
                            style={{ borderRadius: 5, marginLeft: 10, marginRight: 10, marginTop: 40, width: '85%', alignItems: 'center', height: 55, alignSelf: 'center'}}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                                >
                            <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{ fontSize: 26, fontWeight: "600", paddingTop: 5, color: 'white'}}>Calculate</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </Modal>

            </View>
        )
    }
}

export default Signup