import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Button
} from 'react-native';

const MoviesWithDescription = ({navigation})=>(
    <View>
        <Text>Movie with Description</Text>
        <Button
            title='Detail Page'
            onPress={()=>{
                navigation.navigate('Detail');
            }}
        />
    </View>

)

export default MoviesWithDescription;