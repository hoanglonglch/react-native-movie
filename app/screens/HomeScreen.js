import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,FlatList,
    View,Button, Image,TouchableOpacity
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
        let navigation = this.props['navigation'];
        let item = this.props['item']
        let posterImage = item['poster_path'] !== '' ? MoviesUtils.getImageFromServer(item['poster_path']) : 'https://reactjs.org/logo-og.png';
        return(
            <View style={{flex:1}}>
                <View style={{height:250}}>

                    {/*Title and Add favorite button*/}
                    <View style={{flex:1,flexDirection:'row',}}>
                        <Text style={{flex:1,fontWeight:'bold',fontSize:13}}>{item['title'] !== ''? item['title']: 'Title'}</Text>
                        <Text style={{
                            flex:1,
                            borderWidth: 0.5,
                            alignItems: 'center',
                            justifyContent:'center',
                            borderColor: '#d6d7da',}}>Add Favorite</Text>
                    </View>

                    {/*Wrap content between  Image and description*/}
                    <View style={{flex:7,flexDirection:'row'}}>

                        {/*Image*/}
                        <View style={{flex:1.5,justifyContent:'center',alignItems:'center',backgroundColor:'grey'}}>

                            <TouchableOpacity onPress={()=>{
                                navigation.navigate('Detail');
                            }}>
                                <Image source={{
                                    uri:posterImage
                                }}
                                       style={{width:200,height:300}}/>
                            </TouchableOpacity>

                        </View>

                        {/*Detail Part*/}
                        <View style={{flex:2, }}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>Release Date</Text>
                                <Text>{item['release_date']}</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>Rating</Text>
                                <Text>{item['vote_average']}/10</Text>
                            </View>
                            <View style={{justifyContent:'space-between'}}>
                                <Text>Over View</Text>
                                <Text numberOfLines={8}>{item['overview']}</Text>
                            </View>
                        </View>

                    </View>

                </View>

            </View>
        );
    };
}

class HomeScreen extends Component{

    state = {
        data:[]
    };

    componentWillMount(){
        this.fetchDataMovies();
    }

    fetchDataMovies = async ()=>{
        const response = await MoviesUtils.getPopuplarMovieWithAsync();
        this.setState({data: response});
    }

    render(){
        return(
            <FlatList
                data={this.state.data}
                keyExtractor={(item,index)=>index}
                renderItem={({item})=>{
                    return (
                        <ImageWithDetailMoviesComponent item={item} navigation={this.props.navigation}/>
                    )
                }}
            />
        );
    };
}

const style = StyleSheet.create({

});

export default HomeScreen;