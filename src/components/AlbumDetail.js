import React, {Component} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


// {album} is destructuring album from props.album
// image will need a style with width and height in order to render a viewable size
const AlbumDetail = ({album}) => {
    const {artist, title, thumbnail_image, image, url} = album;
    const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle} = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                    style={thumbnailStyle}
                    source={{uri: thumbnail_image}}></Image>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>   
                </View>             
            </CardSection>  
            <CardSection>
                <Image 
                style={imageStyle}
                source={{uri: image}}></Image>
            </CardSection>  
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>    
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10

    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;