import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CatService from './services/CatService';

const catService = new CatService();
// catService.getAllCats().then(res => console.log(res));
// catService.getBengalCats().then(res => console.log(res));
catService.getRandomCat().then(res => console.log(res))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);