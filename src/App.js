import React from 'react';

import './App.css';
import Header from "./components/Header";
import OurStackSection from "./components/OurStackSection";
import Sections from "./components/Sections";

function App() {
  return (
    <>
      <Header /> 
      <OurStackSection />
      <Sections />
    </>
  );
}

export default App;