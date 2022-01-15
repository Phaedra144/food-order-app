import React from 'react'
import Header from './components/header/Header';
import Meals from './components/meals/listavailable/Meals';
import CartProvider from './context/CartProvider';

function App() {
  
  return (
    <CartProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
