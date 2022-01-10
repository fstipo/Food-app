import React, { Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
      <Cart />
    </>
  );
};

export default App;
