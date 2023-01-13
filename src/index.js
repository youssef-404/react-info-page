import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './about';
import './index.css';
import Info from './info';
import Interest from './intrest';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <Info/>
    <About/>
    <Interest/>
  </div>
);

