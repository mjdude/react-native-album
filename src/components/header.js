//import lib for making a component
import React from 'react';
import {Text, View} from 'react-native';


// make component

const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text>Albums!</Text>
        </View>
    );
};

// styles

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyle: {
        fontSize: 20
    }
};

// make components avaliable to other parts of the app
export default Header;