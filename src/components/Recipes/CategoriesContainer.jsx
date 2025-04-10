import React, { useContext } from 'react';
import CategoryTag from './CategoryTag';
import { MealsContext } from '../../api/Api';
const CategoriesContainer = () => {
  const { allCategories, getMeals_ByCategory } = useContext(MealsContext);
  return (
    <ul className="categories flex flex-wrap gap-2 my-3 justify-start">
      <CategoryTag _id={"0"} title={"Default"} getMeals_ByCategory={getMeals_ByCategory} />
      {allCategories?.categories && allCategories?.categories.map((cat, i) => <CategoryTag key={i} title={cat.strCategory} getMeals_ByCategory={getMeals_ByCategory} />)}
    </ul>
  );
};

export default CategoriesContainer;
