import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {Link, useHistory} from "react-router-dom";

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES'});
    }, []);

    const goToAddMovie = () => {
        history.push('/add-movie')
    }
    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={goToAddMovie}>Add a movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Link to={`/details/${movie.id}`}>
                            <div key={movie.id} >
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title}/>
                            </div>
                        </Link>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;