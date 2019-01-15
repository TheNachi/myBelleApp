import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ onPress }) => {

        return (
            <View style={styles.viewStyle}>
                <TouchableOpacity style={styles.backViewStyle} onPress={onPress} >
                    <Icon name='md-arrow-round-back' size={30} style={styles.iconStyle} />
                </TouchableOpacity>
                <View style={styles.thumbnailViewStyle}>
                </View>
                <View style={styles.iconViewStyle}>
                    <TouchableOpacity>
                        <Icon name='md-notifications' size={25} style={styles.iconStyle} /> 
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='md-search' size={25} style={styles.iconStyle} /> 
                    </TouchableOpacity>
                    
                
                </View>
            </View>
        )
}

const styles = {
    textStyle: {
        fontSize: 20,
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
    },
    viewStyle: {
        backgroundColor: '#fff',
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
    }
};
 
export default Header;
