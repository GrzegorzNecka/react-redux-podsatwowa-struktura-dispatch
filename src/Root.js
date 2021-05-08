import React from 'react';
import { createStore } from 'redux';
import App from './App';

const initialMovies = {
  listName: 'Favourite',
  movies: ['Rambo III', 'Hakerzy', 'Matrix']
};

function moviesReducer(state = initialMovies, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        movies: [...state.movies, action.movie]
      };

    case 'RESET':
      return { ...state, movies: [] };
    default:
      return state;
  }
}

const store = createStore(moviesReducer);

//window.store = store;

console.log('store', store.getState());
store.dispatch({ type: 'RESET' });
console.log('store', store.getState());
store.dispatch({ type: 'ADD', movie: 'Titanic' });
console.log('store', store.getState());

const Root = () => {
  return <App />;
};

export default Root;
