import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './componants/about';
import Footer from './componants/footer';
import './index.css';
import Info from './componants/info';
import Interest from './componants/intrest';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <Info/>
    <About/>
    <Interest/>
    <Footer/>
  </div>
);

