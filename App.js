/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button
} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
/*import MovieDrawerComponent from  './app/components/MovieDrawerComponent'*/
import HomeScreen from  './app/screens/HomeScreen'
import MovieDrawerComponent from  './app/components/MovieDrawerComponent'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex:1}}>
        <MovieDrawerComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
);

