import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Header from '../common/header'
import Input from '../common/input'
import Inpu from '../common/inpu'
import Modal from 'react-native-modal'

class Signup extends Component {
    state = {
        isModalVisible: false
    }

    _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

    render() {
        return (
            <View style={{ backgroundColor: "white", height: '100%', width: '100%' }}>
                <Header />
                <Inpu
                    label="Username"
                    placeholder="Username"
                />
                <Inpu
                    label="Email Address"
                    placeholder="Email Address"
                />
                <Inpu
                    label="Password"
                    placeholder="Password"
                />
                <Inpu
                    label="Due date"
                    placeholder="Due date"
                />
                <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
                    <Text style={{ fontSize: 16, color: '#515A5A' }}>Not sure of your Due date?</Text>
                    <TouchableOpacity onPress={this._toggleModal}>
                        <Text style={{ color: '#4D7DA9', paddingLeft: 10, fontSize: 16, fontWeight: '600'}}>Calculate</Text>
                    </TouchableOpacity>
                    
                </View>
                <TouchableOpacity onPress={() => Actions.login()} style={{ backgroundColor: '#DF44E4', borderRadius: '4%', marginLeft: '1%', marginRight: '1%', marginTop: '2%', width: '85%', alignSelf: 'center'  }}>
                    <Text style={{ alignSelf: 'center', paddingTop: '4%', paddingBottom: '4%', fontSize: 20, fontWeight: "500", color: 'white'}}>Sign up</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', paddingTop: 100, alignSelf: 'center'}}>
                    <Text style={{ fontSize: 16, color: '#515A5A' }}>Already have an account</Text>
                    <TouchableOpacity onPress={() => Actions.l()}>
                        <Text style={{ color: '#4D7DA9', paddingLeft: 10, fontSize: 16, fontWeight: '600'}}>Log in</Text>
                    </TouchableOpacity>
                </View>
                <Modal 
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={() => this.setState({ isVisible: false })}>
                    <View style={{ flex: 1 }}>
                        <Text>Hello!</Text>
                        <TouchableOpacity onPress={this._toggleModal}>
                            <Text>Hide me!</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
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


export default Signup