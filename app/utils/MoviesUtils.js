export default new class MoviesUtils {

    URL_MOVIE = 'https://api.themoviedb.org/3/movie/'
    URL_IMAGE_MOIVE = "http://image.tmdb.org/t/p/w185/";
    API_KEY = '0267c13d8c7d1dcddb40001ba6372235';

    POPULAR_MOVIE = 'popular';

    appendURLAndAPIKey = (urlType)=>{
        return this.URL_MOVIE +urlType+'?api_key='+this.API_KEY;
    }

    getImageFromServer = (urlPath)=>{
        return this.URL_IMAGE_MOIVE+urlPath;
    }


    /*Function is use Async Await syntax*/
    getPopuplarMovieWithAsync = async ()=>{
        let popularMovieURl = this.appendURLAndAPIKey(this.POPULAR_MOVIE);
        const response = await fetch(popularMovieURl);
        const responseJson = await response.json();

        return responseJson['results'];
    }

    /*Function is use Promise syntax*/
    getPopularMoive = ()=>{
        let popularMovieURl = this.appendURLAndAPIKey(this.POPULAR_MOVIE);
        return fetch(popularMovieURl)
            .then((response) =>{
                // console.log("data is ",response.json());
                return response.json();
            })
            .then((responseJson)=>{
                return responseJson['results'];
            })
            .catch((error) => {
                console.error(error);
            })
    }
}