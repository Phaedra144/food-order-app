import MealsSummary from './components/mealsummary/MealsSummary';
import Header from './components/header/Header';
import React from 'react';
import Meals from './components/meals/Meals';

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
