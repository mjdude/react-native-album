// Index.ios.js place code in here for ios
import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from './src/components/header';

// create the component

const App = () => {
  return (
    <Header headerText={'Albums'}/>
  )
}

// Render it to the device

AppRegistry.registerComponent('albums', () => App)