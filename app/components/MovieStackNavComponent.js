import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator, StackNavigator} from 'react-navigation'; // Version can be specified in package.json // 1.0.0-beta.14
import HomeScreen from '../screens/HomeScreen'
import DetailMovieScreen from '../screens/DetailMovieScreen'

const MovieStackNavComponent = StackNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions : ({navigation})=>({
            title: 'Home Screen In Stack1',
            headerLeft: (

                <TouchableOpacity onPress={()=>{
                    console.log("navigation:",navigation);
                    navigation.navigate('DrawerOpen');
                }}>
                    <Image source={{
                        uri:'https://css-tricks.com/wp-content/uploads/2012/10/threelines.png'
                    }}
                           style={{width:50,height:50}}/>
                </TouchableOpacity>

            )
        })
    },
    Detail:{
        screen:DetailMovieScreen,
        navigationOptions:{
            title: 'Detail Screen In Stack'
        }
    },
});

export default MovieStackNavComponent;