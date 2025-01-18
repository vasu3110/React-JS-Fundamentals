import React from 'react';  //Core foundational library
import ReactDOM from 'react-dom/client';  //Implementation on web
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
//React Also creates its own DOM called virtual DOM.Compares the virtual and actual DOM and then make changes to actual DOM based only on differences

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

