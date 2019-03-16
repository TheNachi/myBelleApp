import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { LinearGradient } from 'expo'
import Card from '../../common/card'

class ANC extends Component {

    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 20, flex: 1, height: '100%', weight: '100%'}}>
                    <View style={ styles.cardStyle1 }>
                        <Text style={{ fontSize: 20, padding: 20, fontWeight: '400' }}>
                            ANC for -
                        </Text>
                        <Text style={{ fontSize: 20, padding: 20, marginLeft: -30, color: '#4d2ec9', fontWeight: '400' }}>
                            September
                        </Text>
                     </View>
                    <View style={ styles.cardStyle }>
                        <Text style={{ fontSize: 20, padding: 20, fontWeight: '400' }}>
                            Attend ANC Classes/Appointment
                        </Text>
                    </View>
                    <View style={ styles.cardStyle }>
                        <Text style={{ fontSize: 20, padding: 20, fontWeight: '400' }}>
                            Set your ANC Reminder for the 
                        </Text>
                        <Text style={{ fontSize: 20, padding: 20, marginTop: -40, color: '#4d2ec9', fontWeight: '400' }}>
                            September
                        </Text>
                    </View>
                    <View style={ styles.cardStyle1 }>
                        <Text style={{ fontSize: 20, padding: 20, fontWeight: '400' }}>
                            Take notes for ANC Classes
                        </Text>
                        <Icon name='file-document-outline' size={35} color='#619dd8' style={{ padding: 20, marginLeft: -30 }} />
                     </View>
                     <View style={ styles.cardStyle }>
                     <Text style={{ fontSize: 20, padding: 20, fontWeight: '400' }}>
                         ANC Guidelines Recommendations/Tips for 
                     </Text>
                     <Text style={{ fontSize: 20, padding: 20, marginTop: -40, color: '#4d2ec9', fontWeight: '400' }}>
                        September
                    </Text>
                 </View>
            </View>
        )
    }
}

const styles = {
    cardStyle: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
        width: '90%',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    cardStyle1: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
        width: '90%',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        flexDirection: 'row'
    }
}

export default ANC;