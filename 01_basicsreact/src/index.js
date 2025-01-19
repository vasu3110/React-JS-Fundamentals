import React from 'react';  //Core foundational library
import ReactDOM from 'react-dom/client';  //Implementation on web
import App from './App';

//This file creates the DOM and renders the root element 
//Note that App.js component is imported in this file which contains all other components 
//We render the DOM into the root element through render()

const root = ReactDOM.createRoot(document.getElementById('root'));
//React Also creates its own DOM called virtual DOM.Compares the virtual and actual DOM and then make changes to actual DOM based only on differences

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

