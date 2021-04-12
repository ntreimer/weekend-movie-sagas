import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";

function MovieList() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const objectToSend = {
            title: title,
            imageURL: imageURL,
            description: description,
            genre: genre
        }
        console.log(objectToSend);
        dispatch({type: 'ADD_MOVIE', payload: objectToSend})
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
                <button>Cancel</button>
                <button onClick={handleSubmit}>Save</button>
                {/* <input type="submit" value="Save"/> */}
            </form>
            
        </main>

    );
}

export default MovieList;