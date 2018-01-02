export default new class MoviesUtils {

    URL_MOVIE = 'https://api.themoviedb.org/3/movie/'
    URL_IMAGE_MOIVE = "http://image.tmdb.org/t/p/w185/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg";
    API_KEY = '0267c13d8c7d1dcddb40001ba6372235';

    POPULAR_MOVIE = 'popular';

    appendURLAndAPIKey = (urlType)=>{
        return this.URL_MOVIE +urlType+'?api_key='+this.API_KEY;
    }

    getImageFromServer = (urlPath)=>{

    }


    getPopularMoive = ()=>{

        let popularMovieURl = this.appendURLAndAPIKey(this.POPULAR_MOVIE);

        return fetch(popularMovieURl)
            .then((response) =>{
                // console.log("data is ",response.json());
                return response.json();
            })
            .then((responseJson)=>{
                console.log("data is after ",responseJson['results']);

            })
            .catch((error) => {
                console.error(error);
            });
    }


    /*getPopularMoive = ()=>{

        let popularMovieURl = this.appendURLAndAPIKey(this.POPULAR_MOVIE);
        /!*let test = this.fetchURl(popularMovieURl).then((jsonsResponse)=>{
            console.log('json response is',jsonsResponse['results'])
        });*!/
        let test = this.fetchURl(popularMovieURl);
        console.log('test is ',test)
        console.log('test is1 ',test.then((jsonResonse)=>jsonResonse['results']))
    }

    fetchURl(url){
        return fetch(url)
            .then((response) =>{
                return response.json();
            })
            .catch((error) => {
                console.error(error);
            });
    }*/

    logUtil = () => console.log('log from util');
}