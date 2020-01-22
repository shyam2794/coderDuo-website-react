import React from 'react';

import './App.css';
import Header from "./components/Header";
import OurStackSection from "./components/OurStackSection";
import Products from "./components/Products";

function App() {
  return (
    <div className="page">
      <Header /> 
      <OurStackSection />
      <Products />
    </div>
  );
}

export default App;