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
                <input type="text" placeholder="Movie Title"/>
                <input type="text" placeholder="URL for poster"/>
                <br/>
                <textarea rows="4" cols="50" form="usrform">Enter movie description...</textarea>
                <br/>
                <label htmlFor="genres">Choose a genre:</label>
                <select name="genres" id="">
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option value="Biographical">Biographical</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Disaster">Disaster</option>
                    <option value="Drama">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musical">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Space-Opera">Space-Opera</option>
                    <option value="Superhero">Superhero</option>
                </select>
            </form>
            <button>Cancel</button>
            <button>Save</button>
        </main>

    );
}

export default MovieList;