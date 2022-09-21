import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Products/ItemListContainer';


function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Menú"/>
      </>
    
  );
}

export default App;


