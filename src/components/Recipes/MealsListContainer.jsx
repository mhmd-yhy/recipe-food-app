import React from 'react';
import MealCard from './MealCard';

const MealsListContainer = ({ showData }) => {

  return (
    <div className="meals grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {showData &&
        showData?.map((val, i) => <MealCard key={i} _id={val.idMeal} image={val.strMealThumb} title={val.strMeal} />)
      }
    </div>
  );
};

export default MealsListContainer;
