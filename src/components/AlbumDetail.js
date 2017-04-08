import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// {album} is destructuring album from props.album
// image will need a style with width and height in order to render a viewable size
const AlbumDetail = ({album}) => {
    const {artist, title, thumbnail_image} = album;
    return (
        <Card>
            <CardSection>
                <View>
                    <Image 
                    style={styles.thumbnailStyle}
                    source={{uri: thumbnail_image}}></Image>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>   
                </View>             
            </CardSection>        
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
}

export default AlbumDetail;