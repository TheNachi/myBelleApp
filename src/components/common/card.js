import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
};

// backgroundColor: '#f8f8f8',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 3,
//         height: 60,
//         paddingTop: 15,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2 
//         },
//         shadowOpacity: 0.2, 
//         elevation: 2,
//         position: 'relative'


export default Card;
