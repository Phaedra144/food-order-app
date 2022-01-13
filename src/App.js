import MealsSummary from './components/MealsSummary';
import Header from './components/header/Header';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
          <MealsSummary />
      </main>
    </React.Fragment>
  );
}

export default App;
