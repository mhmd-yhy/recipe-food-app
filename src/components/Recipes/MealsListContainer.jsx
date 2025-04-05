import React from 'react';
import MealCard from './MealCard';

const MealsListContainer = () => {
  return (
    <div className="meals grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      <MealCard />
      <MealCard />
      <MealCard />
      <MealCard />
      <MealCard />
      <MealCard />
    </div>
  );
};

export default MealsListContainer;
