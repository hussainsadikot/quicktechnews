import React from 'react';
import './App.css';
import Search from './Search';
import Pagination from './Pagination';
import Stories from './Stories';

function App() {

  return (
    <>
    <h1 style={{fontSize:"3rem", textAlign:"center",margin:"1rem"}}>Welcome to Tech News</h1>
    
      <Search/>
      <Pagination/>
      <Stories></Stories>
      

    </>
  );
}

export default App;
