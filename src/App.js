import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/itemDetail';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <ItemListContainer greeting="Menú" />
        } />
        <Route path="/menues/:itemid" element={
          <ItemDetailContainer />
        } />
         <Route path="/categoria/:categ" element={<ItemListContainer/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


