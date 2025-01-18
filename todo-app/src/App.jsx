import * as React from 'react';
import './App.css';
import Product from './components/product';

function App() {
  let products = [
    {
      title: 'Banana',
      description: 'Fruit',
      price: 100,
    },
    {
      title: 'Apple',
      description: 'Fruit',
      price: 50,
    },
  ];

  return (
    <>
      {products.map((pro) => (
      <Product item={pro} />
))}

    </>
  );
}

export default App;