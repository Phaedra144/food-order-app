import React from 'react'
import Header from './components/header/Header';
import MealsSummary from './components/meals/summary/MealsSummary';
import Meals from './components/meals/listavailable/Meals';

function App() {
  
  return (
    <React.Fragment>
      <Header />
      <main>
        <MealsSummary />
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
