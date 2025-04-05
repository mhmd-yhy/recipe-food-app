import React, { useEffect } from 'react';
import MealCard from '../components/Recipes/MealCard';
import MealDetailsContainer from '../components/MealDetails/MealDetailsContainer';

const MealDetails = () => {
  useEffect(() => { window.scrollTo({ behavior: "smooth", top: "0" }); }, []);
  return (
    <div className='container m-auto px-2 xl:px-36 py-3 '>
      <MealDetailsContainer />
      <div className='my-3'>
        <h2 className='font-bold text-stone-700 my-1 capitalize md:text-lg'>More meals :</h2>
        <div className="meals grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 ">
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
