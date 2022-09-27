import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/itemDetail';

function App() {

  return (
    <>
      <Navbar/>
      {/* <ItemListContainer greeting="Menú"/> */}
      <ItemDetailContainer/>
      <Footer/>
      </>
    
  );
}

export default App;


