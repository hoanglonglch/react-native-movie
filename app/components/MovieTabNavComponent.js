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

const MovieTabNavComponent = TabNavigator({
    DescriptionTab:{
        screen:MoviesWithDescription,
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