import React, { useContext, useEffect } from 'react';
import CategoriesContainer from '../components/Recipes/CategoriesContainer';
import SearchInput from '../components/Recipes/SearchInput';
import MealsListContainer from '../components/Recipes/MealsListContainer';
import Heading from '../components/Utility/Heading';
import MealsContext from '../api/MealsContext';

const Recipes = () => {
  useEffect(() => { window.scrollTo({ behavior: "smooth", top: "0" }); }, []);

  const { allMeals, allMeals_ByCategory, allMeals_BySearch } = useContext(MealsContext);
  const filter = allMeals_ByCategory.meals ? allMeals_ByCategory : allMeals_BySearch.meals ? allMeals_BySearch : allMeals;

  return (
    <div className='container m-auto px-2 xl:px-36 py-3'>
      <Heading title="previous serarches" />
      <CategoriesContainer />
      <SearchInput />
      <MealsListContainer showData={filter?.meals} />
    </div>
  );
};

export default Recipes;
