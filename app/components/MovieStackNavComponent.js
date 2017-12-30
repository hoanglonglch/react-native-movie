import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Button
} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import HomeScreen from '../screens/HomeScreen'
import DetailMovieScreen from '../screens/DetailMovieScreen'
import MoviesWithDescriptionScreen from '../screens/MoviesWithDescriptionScreen'

const MovieStackNavComponent = StackNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            title: 'Home Screen'
        }
    },
    Detail:{
        screen:DetailMovieScreen,
        navigationOptions:{
            title: 'Detail Screen'
        }
    },
});

export default MovieStackNavComponent;