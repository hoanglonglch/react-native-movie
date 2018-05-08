export default new class MoviesUtils {

    URL_MOVIE = 'https://api.themoviedb.org/3/movie/'
    URL_IMAGE_MOIVE = "http://image.tmdb.org/t/p/w185/";
    API_KEY = '0267c13d8c7d1dcddb40001ba6372235';

    POPULAR_MOVIE = 'popular';

    appendURLAndAPIKey = (urlType,page)=>{
        return this.URL_MOVIE +urlType+'?api_key='+this.API_KEY+'&page='+page;
    }

    appendURLDetailPage = (movieId)=>{
        return this.URL_MOVIE+ movieId+ "?api_key="+this.API_KEY;
    }

    getImageFromServer = (urlPath)=>{
        return this.URL_IMAGE_MOIVE+urlPath;
    }


    /*Function is use Async Await syntax*/
    getPopuplarMovieWithAsync = async (page)=>{
        let popularMovieURl = this.appendURLAndAPIKey(this.POPULAR_MOVIE,page);
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

    getDetailMovie = async (movieId) =>{
        let urlDetailMovie = this.appendURLDetailPage(movieId);
        const response = await  fetch(urlDetailMovie);
        const responseJson = await response.json();
        // console.log("response json:", responseJson);
        return responseJson;

    }
}