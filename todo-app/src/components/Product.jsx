import React from 'react';

const Product = ({ item }) => {
  return (
    <div
    style={{
        display: "inline-block",
        margin: 20,
        padding: 10,
        border: "10px solid orange",
    }}>
        <h1>{item.title }</h1>
        <h2>{item.description}</h2>
        <h3>{item.price}</h3>
    </div>
  );
};

export default Product;

// product title description price