import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'

import {
    Platform,
    StyleSheet,
    Text,
    View,Button,Image
} from 'react-native';
import MoviesUtils from  '../utils/MoviesUtils'

class DetailMovieScreen extends Component{

    state ={
        data : {}
    }

     detailedMovie = async (movieId) =>{
        return await MoviesUtils.getDetailMovie(movieId);
    }

    async componentWillMount() {
        const {params}  = this.props.navigation.state;
        const movieId = params['movieId'];

        let datas = await this.detailedMovie(movieId);
        this.setState({
            data: datas
        });
    }


    render(){
        let dataObj = this.state.data;
        let posterImage = dataObj['poster_path'] ? MoviesUtils.getImageFromServer(dataObj['poster_path']) : 'data:image/png;base64,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';
        console.log("poster", posterImage);
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor:'red'}}>
                    <Image
                        source={{uri:posterImage}}
                        style={{flex:1}}
                    />
                </View>
                <View style={{flex:1}}>
                    <Text>Overview</Text>
                    <Text>{dataObj['overview']}</Text>

                </View>
            </View>
        );
    };
}

export default DetailMovieScreen;