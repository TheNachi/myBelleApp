import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo'
import Actions from 'react-native-router-flux'

const Header = ({ onPress, title, leftIcon, rightIcon }) => {

        return (
            <LinearGradient
                    colors={[ '#4D7DA9'  , '#DF44E4']}
                    style={{ alignItems: 'center', justifyContent: 'center', height: 70, paddingTop: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, elevation: 2, position: 'relative', flexDirection: 'row'}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                        >
                    <TouchableOpacity style={styles.backViewStyle} onPress={onPress} >
                        <Icon name={leftIcon} size={30} style={styles.iconStyle} color='white' />
                    </TouchableOpacity>
                    <View style={styles.thumbnailViewStyle}>
                        <Text style={styles.textStyle}>
                            {title}
                        </Text>
                    </View>
                    <View style={styles.iconViewStyle}>
                        <TouchableOpacity>
                            <Icon name={rightIcon} size={25} style={styles.iconStyle} /> 
                        </TouchableOpacity>
                    </View>
            </LinearGradient>
        )
}

const styles = {
    viewStyle: {
        backgroundColor: '#DF44E4',
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
        color: 'white'
    },
    thumbnailStyle: {
        height: 50,
        width: 86,
    }, 
    thumbnailViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backViewStyle: {
        flex: 1,
    },
    iconStyle: {
        padding: 10
    },
    iconViewStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        flexDirection: 'row',
        padding: 10
    }
};
 
export default Header;
