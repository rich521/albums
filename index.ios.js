// Index.ios.js (IOS)

// Import a library to create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
