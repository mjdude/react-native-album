import React, {Component} from 'react';
import {Text, View} from 'react-native';

const AlbumDetail = (props) => {
    const {title} = props.album;
    return (
        <View>
            <Text>{title}</Text>        
        </View>
    );
};

export default AlbumDetail;