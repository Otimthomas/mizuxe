import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import ShowCase from './components/ShowCase';
import NewsLetter from './components/NewsLetter';
import Boxes from './components/Boxes';
import About from './components/About';
import Authors from './components/Authors';

function App() {
  return (
    <>
      <Navbar />
      <ShowCase />
      <NewsLetter />
      <Boxes />
      <About />
      <Authors />
    </>
  );
}

export default App;
