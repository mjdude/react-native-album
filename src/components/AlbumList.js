//import lib for making a component
import React, {Component} from 'react';
import {View} from 'react-native';
import AlbumDetail from './AlbumDetail'


class AlbumList extends Component {
    state = {albums: []};

    componentWillMount(){
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => {
                return res.json()
            }).then((resData) => {
                this.setState({albums: resData})
            })
    }

    renderAlbums(){
        return this.state.albums.map( (album) => {
            return <AlbumDetail key={album.title} album={album}></AlbumDetail>
        });
    }
    render(){
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }   
}

export default AlbumList;