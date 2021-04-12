import {useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

function MovieDetails() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    // grab movie details with redux
    const movie = useSelector((store) => {
        return store.movieDetails
    })

    // on load, use params to get specific movie details
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: params.id });
    }, []);

    // go back to movie list
    const goHome = () => {
        history.push('/')
    }

    // function to display data if it's there
    const returnDisplay = () => {
        console.log(movie);
        if (movie[0]) {
            let genres = []
            for (let i = 0; i < movie.length; i++) {
                // [...genres, movie[i].name];
                // spread didn't work?
                genres.push(movie[i].name);    
            }
            console.log(genres);
            // map through genres
            return (
                <div key={movie[0].id} >
                    <h3>{movie[0].title}</h3>
                    <img src={movie[0].poster} alt={movie[0].title}/>
                    <ul>
                        {genres.map((genre, index) => <li key={index}>{genre}</li>)}
                    </ul>
                    <p>{movie[0].description}</p>
                </div>
            )
        }
        // if no array, return loading status
        else {
            return <p>Waiting for movie details...</p>
        }
    }


    return (<>
        {returnDisplay()}
        <button onClick={goHome}>Back to List</button>
    </>)
}

export default MovieDetails;