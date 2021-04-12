import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";

function MovieList() {

    const dispatch = useDispatch();
    // const movies = useSelector(store => store.movies);

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES'});
    // }, []);

    return (
        <main>
            <h1>Add Movie</h1>
            <form action="" id="usrform">
                <input type="text"/>
                <input type="text"/>
                <textarea rows="4" cols="50" form="usrform">Enter description...</textarea>
            </form>
        </main>

    );
}

export default MovieList;