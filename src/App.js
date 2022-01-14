import React, { useState } from 'react'
import Header from './components/header/Header';
import MealsSummary from './components/meals/summary/MealsSummary';
import Meals from './components/meals/listavailable/Meals';
import AmountContext from './context/amount-context';

function App() {

  const [sumAmountState, setSumAmountState] = useState(0);

  const sumAmountHandler = (amount) => {
    setSumAmountState((prevAmount) => {
      return parseInt(prevAmount) + parseInt(amount);
    });
  }
  
  return (
    <AmountContext.Provider
      value={{
        givenAmount: sumAmountState
      }}
    >
      <Header />
      <main>
        <MealsSummary />
        <Meals onRecivingAmount={sumAmountHandler} />
      </main>
    </AmountContext.Provider>
  );
}

export default App;
