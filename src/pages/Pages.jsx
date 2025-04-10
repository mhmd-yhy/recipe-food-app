import React from 'react';
import Footer from "../components/Utility/Footer";
import Header from "../components/Utility/Header";
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Recipes from './Recipes';
import MealDetails from './MealDetails';
import Api, { MealsContext } from '../api/Api';

const Pages = () => {
  const [allMeals, allCategories, allMeals_ByCategory, allMeals_BySearch, getData, UseHomeData, getMeals_ByCategory, getMeals_BySearchInput] = Api();
  return (
    <div className="App bg-stone-50 relative overflow-hidden">
      <MealsContext.Provider value={{ allMeals, allCategories, getData, allMeals_ByCategory, allMeals_BySearch, UseHomeData, getMeals_ByCategory, getMeals_BySearchInput }}>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/recipes/:id' element={<MealDetails />} />
        </Routes>

        <Footer />
      </MealsContext.Provider>
    </div>
  );
};

export default Pages;
