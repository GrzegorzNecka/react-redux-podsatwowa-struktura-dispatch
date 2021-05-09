import React from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';


const store = createStore(rootReducer, composeWithDevTools());



const App = () => {
  return <p>a</p>;
};

export default App;
