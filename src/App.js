import React, { useState } from 'react'
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Meals from './components/meals/listavailable/Meals';
import CartProvider from './context/CartProvider';

function App() {
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  const closeModal = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      {isCartOpen && <Cart onClose={closeModal} />}
      <Header onOpenCart={openCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
