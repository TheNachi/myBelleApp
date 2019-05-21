import React from 'react';
import { TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { black } from 'ansi-colors';

const Inpu = ({ label, value, onChangeText, placeholder, secureTextEntry, iconName }) => {
    const { inputStyle, labelStyle, containerStyle, viewStyle } = styles;

    return (
        <View style={containerStyle}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
                <Icon name={iconName} type='feather' size={30} color='black' />
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    style={inputStyle}
                    value={value} 
                    onChangeText={onChangeText}
                />
            </View>
            <View style={viewStyle}></View>
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#111111',
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 7,
        fontSize: 18,
        lineHeight: 23,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flexDirection: 'column',
        // borderWidth: 2,
        // borderRadius: 2,
        // borderColor: '#ddd',
        // borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 1,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        //backgroundColor: '#f2f2f2'

    },
    viewStyle: {
        borderWidth: 0.5,
        borderColor: 'gray',
        backgroundColor: 'blue',
        width: '100%'
    }
};

export default Inpu;
