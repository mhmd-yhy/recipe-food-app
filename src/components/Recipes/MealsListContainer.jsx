import React from 'react';
import MealCard from './MealCard';
const MealsListContainer = ({ showData }) => {
  return (
    <div className={`meals ${showData ? "grid" : "block"} grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 `}>
      {showData ?
        showData?.map((val, i) => <MealCard key={i} _id={val.idMeal} image={val.strMealThumb} title={val.strMeal} />)
        : <div className="flex justify-center w-full">
          <p className='text-2xl font-bold text-neutral-800'>No recipes found.</p>
        </div>
      }
    </div>
  );
};

export default MealsListContainer;
