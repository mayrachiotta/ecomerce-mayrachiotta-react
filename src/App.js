import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/itemDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/cart';



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
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


