import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from "react-router-dom";

function MovieList() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

    const goHome = () => {
        history.push('/')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const objectToSend = {
            title: title,
            poster: imageURL,
            description: description,
            genre_id: genre
        }
        console.log(objectToSend);
        dispatch({type: 'ADD_MOVIE', payload: objectToSend})
        goHome();
    }

    return (
        <main>
            <h1>Add Movie</h1>
            <form id="usrform">
                <input type="text" placeholder="Movie Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <input type="text" placeholder="URL for poster" value={imageURL} onChange={(event) => setImageURL(event.target.value)}/>
                <br/>
                <textarea rows="4" cols="50" form="usrform" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                <br/>
                <label htmlFor="genres">Choose a genre:</label>
                <select name="genres" id="" value={genre} onChange={(event) => setGenre(event.target.value)}>
                    <option value="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>
                </select>
                <button>Cancel</button>
                <button onClick={handleSubmit}>Save</button>
                {/* <input type="submit" value="Save"/> */}
            </form>
            
        </main>

    );
}

export default MovieList;