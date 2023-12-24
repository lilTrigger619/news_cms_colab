import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import Main from '../Main/Main.js';
import Quotes from '../Quotes/Quotes.js';
import Content from '../subNews/Content.js';
import Footer from '../Footer/Footer.js';
import './News.css';

function News() {
  return (
    <div className="news-container">
      <div className='news-navbar'>
        <Navbar/>
      </div>
      <div className='news-main'>
        <Main/>
        <Quotes/>
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default News;
