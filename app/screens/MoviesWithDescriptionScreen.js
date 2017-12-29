import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Button
} from 'react-native';

const MoviesWithDescription = ()=>(
    <View>
        <Text>Movie with Description</Text>
        <Button
            title='Detail Page'
            onPress={()=>{
                this.props.navigation.navigate('Detail');
            }}
        />
    </View>

)

export default MoviesWithDescription;