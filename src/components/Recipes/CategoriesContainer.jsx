import React, { useContext } from 'react';
import CategoryTag from './CategoryTag';
import MealsContext from '../../api/MealsContext';

const CategoriesContainer = () => {
  const { allCategories, getData } = useContext(MealsContext);
  return (
    <ul className="categories flex flex-wrap justify-center gap-2 my-3 sm:justify-start">
      <CategoryTag _id={"0"} title={"Default"} getData={getData} />
      {allCategories?.categories && allCategories?.categories.map((cat, i) => <CategoryTag key={i} title={cat.strCategory} getData={getData} />)}
    </ul>
  );
};

export default CategoriesContainer;
