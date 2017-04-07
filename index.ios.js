// Index.ios.js place code in here for ios
import React from 'react';
import {Text, AppRegistry} from 'react-native';

// create the component

const App = () => {
  return (
    <Text>Some Text</Text>
  )
}

// Render it to the device

AppRegistry.registerComponent('albums', () => App)