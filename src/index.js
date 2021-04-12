import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga(action) {
    // saga for MovieList
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    // saga for MovieDetails
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails);
    // saga for AddMovie
    yield takeEvery('ADD_MOVIE', addMovie);
}

function* addMovie(action) {
    try {
        //send object from AddMovie via post
        yield axios.post('/api/movie', action.payload)
    }
    catch {
        console.log('error in addMovie');
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        // hold GET in movies
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        // send to reducer
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }        
}

function* fetchMovieDetails(action) {
    // get movie details for this movie page
    console.log('in fetchmoviedetails', action);
    try {
        // hold PUT in movieDetails
        const movieDetails = yield axios.put(`/api/details/${action.payload}`);
        console.log('movieDetails:', movieDetails);
        // send to reducer
        yield put ({type: 'SET_MOVIE_DETAILS', payload: movieDetails.data});

    } catch {
        console.log('details error');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const movieDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        movieDetails,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
