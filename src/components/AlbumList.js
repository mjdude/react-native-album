//import lib for making a component
import React, {Component} from 'react';
import {Text, View} from 'react-native';


class AlbumList extends Component {
    componentWillMount(){
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => {
                return res.json()
            }).then((resData) => {
                console.log(resData);
            })
    }
    render(){
        return (
            <View>
                <Text>Album List</Text>
            </View>
        )
    }   
}

export default AlbumList;