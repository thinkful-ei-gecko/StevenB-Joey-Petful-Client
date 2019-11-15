import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { AnimalProvider } from './Context/context';

ReactDOM.render(
<BrowserRouter>
  <AnimalProvider>
      <App />
  </AnimalProvider>
</BrowserRouter>,
     document.getElementById('root'));

