import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Button
} from 'react-native';
import MovieTabNavComponent from '../components/MovieTabNavComponent'

export default class MoviesScreen extends Component{
    render(){
        return(
            <MovieTabNavComponent/>
        );
    };
}