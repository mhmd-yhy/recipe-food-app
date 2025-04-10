import React from 'react';
import CategoriesList from '../Categories/CategoriesList';
import Heading from '../Utility/Heading';
import { Link } from 'react-router-dom';
const CategoriesContainer = () => {
  return (
    <div className='container m-auto xl:px-36 py-3 mb-5 px-4'>
      <div className='flex items-center gap-3'>
        <Heading title="categories food" />
        <Link to={`/recipes`} className='uppercase font-bold text-xs tracking-wide text-pink-700 hover:text-pink-600 duration-500 sm:text-sm '>show more</Link>
      </div>
      <CategoriesList />
    </div>
  );
};

export default CategoriesContainer;
