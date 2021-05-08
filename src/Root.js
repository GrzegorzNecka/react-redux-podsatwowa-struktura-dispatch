import React from 'react';
import { createStore, combineReducers, bindActionCreators } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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

const allReducers = combineReducers({ moviesReducer, actorsReducer });
const store = createStore(allReducers, composeWithDevTools());

const addActor = item => ({ type: 'ADD_ACTOR', item });
const resetActors = () => ({ type: 'RESET_ACTORS' });

store.dispatch(addActor('Cezary Pazura'));

const actorsActions = bindActionCreators(
  { add: addActor, reset: resetActors },
  store.dispatch
);

actorsActions.add('Jan Frycz');
//store.dispatch({ type: 'ADD_ACTOR', movie: 'Cezary Pazura') });
actorsActions.reset();

const Root = () => {
  return <App />;
};

export default Root;
