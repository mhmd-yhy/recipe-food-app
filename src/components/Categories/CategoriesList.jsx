import React, { useContext } from 'react';
import MealsContext from '../../api/MealsContext';
import CategoryCard from './CategoryCard';

const CategoriesList = () => {
  const { allCategories } = useContext(MealsContext);
  return (
    <div className="category grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {allCategories?.categories &&
        allCategories.categories.slice(0, 4).map((cat, i) => <CategoryCard key={i} image={cat.strCategoryThumb} title={cat.strCategory} />)}
    </div>
  );
};

export default CategoriesList;
