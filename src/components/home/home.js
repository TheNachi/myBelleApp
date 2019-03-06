import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Content, Picker, Form } from "native-base"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal'
import Header from '../common/header'
import Input from '../common/input'
import Inpu from '../common/inpu'
import { Actions } from 'react-native-router-flux'
import Card from '../common/card'
import Sidebar from '../common/sidebar'



class Home extends Component {
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
            <View style={{ backgroundColor: "white", height: '100%', width: '100%' }}>
                <Header 
                    title="Find a Healthcare Provider"
                    onPress={this._toggleModal}
                    leftIcon='menu'
                    rightIcon='search'
                />
                <ScrollView>
                <View style={{ alignSelf: 'flex-end', padding: 10}}>
                    <Text style={styles.textStyle}>
                        Filter by Location
                    </Text>
                    <View style={{ borderWidth: 1, borderColor: "#cf32f2"}}>
                    <Form>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="chevron-down" />}
                            placeholder="Lagos"
                            placeholderStyle={{ color: "#cf32f2" }}
                            placeholderIconColor="#cf32f2"
                            style={{ width: 200 }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Abuja" value="key0" />
                            <Picker.Item label="Port Harcourt" value="key1" />
                            <Picker.Item label="Kano" value="key2" />
                            <Picker.Item label="Lagos" value="key3" />
                            <Picker.Item label="Enugu" value="key4" />
                        </Picker>
                    </Form>
                    </View>
                </View>
                <Card>
                    <TouchableOpacity onPress={() => Actions.hospital()} >
                        <View style={styles.containerStyle}>
                        <Text style={{ fontSize: 20, padding: 3 }}>Ikeja General Hospital</Text>
                        <Text style={{ fontSize: 16, padding: 3  }}>No 1, Somewhere in Ikeja GRA, Ikeja, Lagos, Nigeria</Text>
                        <Text style={{ fontSize: 16, padding: 3  }}>Phone Number: 08126736749</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                        </View>
                        <Text style={{ fontSize: 14, color: '#cf32f2', padding: 3  }}>239 reviews/comments</Text>
                        </View>
                    </TouchableOpacity>
                </Card>
                <Card>
                    <TouchableOpacity onPress={() => Actions.hospital()} >
                        <View style={styles.containerStyle}>
                        <Text style={{ fontSize: 20, padding: 3 }}>Ikeja General Hospital</Text>
                        <Text style={{ fontSize: 16, padding: 3  }}>No 1, Somewhere in Ikeja GRA, Ikeja, Lagos, Nigeria</Text>
                        <Text style={{ fontSize: 16, padding: 3  }}>Phone Number: 08126736749</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                        </View>
                        <Text style={{ fontSize: 14, color: '#cf32f2', padding: 3  }}>239 reviews/comments</Text>
                        </View>
                    </TouchableOpacity>
                </Card>
                <Card>
                    <TouchableOpacity onPress={() => Actions.hospital()} >
                        <View style={styles.containerStyle}>
                        <Text style={{ fontSize: 20, padding: 3 }}>Ikeja General Hospital</Text>
                        <Text style={{ fontSize: 16, padding: 3  }}>No 1, Somewhere in Ikeja GRA, Ikeja, Lagos, Nigeria</Text>
                        <Text style={{ fontSize: 16, padding: 3  }}>Phone Number: 08126736749</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                        </View>
                        <Text style={{ fontSize: 14, color: '#cf32f2', padding: 3  }}>239 reviews/comments</Text>
                        </View>
                    </TouchableOpacity>
                </Card>
                <Card>
                    <TouchableOpacity onPress={() => Actions.hospital()} >
                        <View style={styles.containerStyle}>
                        <Text style={{ fontSize: 20, padding: 3 }}>Ikeja General Hospital</Text>
                        <Text style={{ fontSize: 16, padding: 3  }}>No 1, Somewhere in Ikeja GRA, Ikeja, Lagos, Nigeria</Text>
                        <Text style={{ fontSize: 16, padding: 3  }}>Phone Number: 08126736749</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                            <Icon name='star' type='feather' size={30} color='#f4b642' />
                        </View>
                        <Text style={{ fontSize: 14, color: '#cf32f2', padding: 3  }}>239 reviews/comments</Text>
                        </View>
                    </TouchableOpacity>
                </Card>
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


export default Home