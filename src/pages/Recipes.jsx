import React, { useEffect } from 'react';
import CategoriesContainer from '../components/Recipes/CategoriesContainer';
import SearchInput from '../components/Recipes/SearchInput';
import MealsListContainer from '../components/Recipes/MealsListContainer';
import Heading from '../components/Utility/Heading';

const Recipes = () => {
  useEffect(() => { window.scrollTo({ behavior: "smooth", top: "0" }); }, []);
  return (
    <div className='container m-auto px-2 xl:px-36 py-3'>
      <Heading title="previous serarches" />
      <CategoriesContainer />
      <SearchInput />
      <MealsListContainer />
    </div>
  );
};

export default Recipes;
