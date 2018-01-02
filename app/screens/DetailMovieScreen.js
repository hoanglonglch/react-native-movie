import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'

import {
    Platform,
    StyleSheet,
    Text,
    View,Button
} from 'react-native';

class DetailMovieScreen extends Component{
    render(){
        return(
            <View>
                <Text>This is Detail screen</Text>
            </View>
        );
    };
}

export default DetailMovieScreen;