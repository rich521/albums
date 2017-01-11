// Index.ios.js (IOS)

// Import a library to create Component
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => (
    <Header headerText={'Albums'} />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
