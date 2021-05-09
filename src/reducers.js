import { combineReducers } from 'redux';
import actorsReducer from './app/actors/duck/reducers';
import movieReducer from './app/movies/duck/reducers';

const rootReucer = combineReducers({
  actors: actorsReducer,
  movies: movieReducer
});

export default rootReucer;
