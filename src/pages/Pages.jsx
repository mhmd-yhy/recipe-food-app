import React from 'react';
import Footer from "../components/Utility/Footer";
import Header from "../components/Utility/Header";
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Recipes from './Recipes';
import MealDetails from './MealDetails';
const Pages = () => {
  return (
    <div className="App bg-stone-50 relative overflow-hidden">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/meals/:id' element={<MealDetails />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Pages;
