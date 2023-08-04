import React, { useContext } from 'react'
import './App.css';
import CartContext from './Context/CartContext';
import Rutas from './Routes/Rutas';

function App() {
  return (
    <>
      <CartContext>
        <Rutas/>
      </CartContext>
    </>
  );
}

export default App;
