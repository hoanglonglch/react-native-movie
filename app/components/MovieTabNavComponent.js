import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Button
} from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import MoviesWithDescription from '../screens/MoviesWithDescriptionScreen';
import MoviesWithoutDescriptionScreen from '../screens/MoviesWithoutDescriptionScreen';
import MovieStackNavComponent from '../components/MovieStackNavComponent';

const MovieTabNavComponent = TabNavigator({
    DescriptionTab:{
        screen:MovieStackNavComponent,
        navigationOptions:{
            title: 'Description'
        }
    },
    NoneDescriptionTab:{
        screen:MoviesWithoutDescriptionScreen,
        navigationOptions:{
            title: 'None Description'
        }
    },
});

export default MovieTabNavComponent;