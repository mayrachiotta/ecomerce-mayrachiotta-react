import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/itemDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import CartContextProvider from './context/cartContext';

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <ItemListContainer greeting="Menú" />
          } />
          <Route path="/menues/:itemid" element={
            <ItemDetailContainer />
          } />
          <Route path="/categoria/:categ" element={<ItemListContainer />} />
          <Route path="/cart" />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </CartContextProvider>

  );
}

export default App;


