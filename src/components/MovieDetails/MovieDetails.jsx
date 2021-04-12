import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

function MovieDetails() {
    const params = useParams();
    const dispatch = useDispatch();
    console.log('params:', params);
    const thisMovieDetails = useSelector((store) => {
        return store.thisMovieDetails
    })
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: params.id });
    }, []);
    return (<>
        <h1>I'm MovieDetails for !</h1>
    </>)
}

export default MovieDetails;