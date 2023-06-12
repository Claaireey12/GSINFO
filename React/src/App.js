import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Handle navigation
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import Header from './Components/Header';

// Wrap all navigation in routes
// Route to product detail component passing in the object ID for the specific product
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:objectID" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}


export default App;
