import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,FlatList,
    View,Button, Image
} from 'react-native';
import MoviesUtils from  '../utils/MoviesUtils'

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

/*class HomeScreen extends Component{
    render(){
        return(
            <View>
                <Text>Home Screen</Text>
                <Button
                    title='Detail Page'
                    onPress={()=>{
                        this.props.navigation.navigate('Detail')
                    }}
                />
                <Button
                    title='Open Drawer'
                    onPress={()=>{
                        MoviesUtils.getPopularMoive();
                        this.props.navigation.navigate('DrawerOpen')
                    }}
                />
            </View>
        );
    };
}*/

class ImageWithDetailMoviesComponent extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{backgroundColor:'pink',height:250}}>

                    {/*Title and Add favorite button*/}
                    <View style={{flex:1, backgroundColor:'yellow',flexDirection:'row',justifyContent:'space-between'}}>
                        <Text>{this.props['title']=== ''? this.props['title']: 'Title'}</Text>
                        <Text>Add Favorite</Text>
                    </View>

                    {/*Wrap content between  Image and description*/}
                    <View style={{flex:7, backgroundColor:'green',flexDirection:'row'}}>

                        {/*Image*/}
                        <View style={{flex:1.5, backgroundColor:'aqua',justifyContent:'center',alignItems:'center'}}>
                            <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={{width:200,height:200}}/>
                        </View>

                        {/*Detail Part*/}
                        <View style={{flex:2, backgroundColor:'purple'}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>Release Date</Text>
                                <Text>sadas</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>Rating</Text>
                                <Text>Rating</Text>
                            </View>
                            <View style={{justifyContent:'space-between'}}>
                                <Text>Over View</Text>
                                <Text>sadas</Text>
                            </View>
                        </View>

                    </View>

                </View>

            </View>
        );
    };
}

class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{backgroundColor:'pink',height:250}}>

                    {/*Title and Add favorite button*/}
                    <View style={{flex:1, backgroundColor:'yellow',flexDirection:'row',justifyContent:'space-between'}}>
                        <Text>{this.props['title']=== ''? this.props['title']: 'Title'}</Text>
                        <Text>Add Favorite</Text>
                    </View>

                    {/*Wrap content between  Image and description*/}
                    <View style={{flex:7, backgroundColor:'green',flexDirection:'row'}}>

                        {/*Image*/}
                        <View style={{flex:1.5, backgroundColor:'aqua',justifyContent:'center',alignItems:'center'}}>
                            <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={{width:200,height:200}}/>
                        </View>

                        {/*Detail Part*/}
                        <View style={{flex:2, backgroundColor:'purple'}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>Release Date</Text>
                                <Text>sadas</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>Rating</Text>
                                <Text>Rating</Text>
                            </View>
                            <View style={{justifyContent:'space-between'}}>
                                <Text>Over View</Text>
                                <Text>sadas</Text>
                            </View>
                        </View>

                    </View>

                </View>

            </View>
        );
    };
}

const style = StyleSheet.create({

});

export default HomeScreen;