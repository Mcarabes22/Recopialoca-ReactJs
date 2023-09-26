import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Welcome!" />} />
          <Route path="/category" element={<ItemListContainer greeting="Categorias proximamente" />} />
          <Route path="/acercade" element={<ItemListContainer greeting="Acerca de nosotros proximamente" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;




