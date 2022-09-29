import React from 'react';
import ReactDOM from 'react-dom/client';
import'./index.css';
import Configurator from './components/configurator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Configurator />
  </React.StrictMode>
);

