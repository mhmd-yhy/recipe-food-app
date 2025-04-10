import React, { useContext } from 'react';
import { MealsContext } from '../../api/Api';
import MealsListContainer from '../Recipes/MealsListContainer';
import Heading from '../Utility/Heading';
import { Link } from 'react-router-dom';

const TastiestFood = () => {
  const { allMeals } = useContext(MealsContext);
  
  return (
    <div className='container m-auto xl:px-36 py-3 mb-5 px-4'>
      <div className='flex items-center gap-3'>
        <Heading title="tastiest food" />
        <Link to={`/recipes`} className='uppercase font-bold text-xs tracking-wide text-pink-700 hover:text-pink-600 duration-500 sm:text-sm '>show more</Link>
      </div>
      <MealsListContainer showData={allMeals?.meals?.slice(0, 4)} />
    </div>
  );
};

export default TastiestFood;
