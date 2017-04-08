// Index.ios.js place code in here for ios
import React from 'react';
import {Text, View, AppRegistry} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// create the component

const App = () => {
  return (
    <View style={{ flex: 1}}>
    <Header headerText={'Albums'}/>
    <AlbumList></AlbumList>
    </View>
  )
}

// Render it to the device

AppRegistry.registerComponent('albums', () => App)