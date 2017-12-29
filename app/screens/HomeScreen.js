import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Button
} from 'react-native';

/*const HomeScreen = ({navigation})=>(
    <View>
        <Text>Home Screen</Text>
        <Button
            title='Detail Page'
            onPress={()=>{
                // console.log("log navigation here ",navigation.navigate('Detail'));

                /!*we can get the props here*!/
                console.log("log navigation here ",this.props.navigation);
                // this.props.navigation.navigate('Detail')
            }}
        />
    </View>
)*/

class HomeScreen extends Component{
    render(){
        return(
            <View>
                <Text>Home Screen</Text>
                <Button
                    title='Detail Page'
                    onPress={()=>{
                        console.log("log navigation here ",this.props.navigation);
                        this.props.navigation.navigate('Detail')
                    }}
                />
            </View>
        );
    };
}

export default HomeScreen;