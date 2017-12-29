import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Button
} from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen';
import MovieStackNavComponent from '../components/MovieStackNavComponent';


const MovieDrawerComponent = DrawerNavigator({
    HomeDrawer:{
        screen: MovieStackNavComponent,
        navigationOptions:{
            title: 'Home Screen'
        }
    },
    MoviesDrawer:{
        screen: MoviesScreen,
        navigationOptions:{
            title: 'List Movies'
        }
    }
});

export default MovieDrawerComponent;