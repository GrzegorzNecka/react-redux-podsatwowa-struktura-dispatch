import React from 'react';
import { createStore, combineReducers } from 'redux';
import App from './App';

const initialMovies = {
  listName: 'Favourite',
  list: ['Rambo III', 'Hakerzy', 'Matrix']
};

function moviesReducer(state = initialMovies, action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        list: [...state.list, action.item]
      };

    case 'RESETD_MOVIES':
      return { ...state, list: [] };
    default:
      return state;
  }
}

// -------------------------------------------

const initialActors = {
  listName: 'Best',
  list: ['Tom Hardy', 'Julia Roberts', 'Angelina Jolie']
};

function actorsReducer(state = initialActors, action) {
  switch (action.type) {
    case 'ADD_ACTOR':
      return {
        ...state,
        list: [...state.list, action.item]
      };

    case 'RESET_ACTORS':
      return { ...state, list: [] };
    default:
      return state;
  }
}

const store = createStore(moviesReducer);

//window.store = store;

// console.log('store', store.getState());
// store.dispatch({ type: 'RESET' });
// console.log('store', store.getState());
// store.dispatch({ type: 'ADD', movie: 'Titanic' });
// console.log('store', store.getState());

const Root = () => {
  return <App />;
};

export default Root;
