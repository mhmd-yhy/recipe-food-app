import React from 'react';
import CategoryTag from './CategoryTag';

const CategoriesContainer = () => {
  return (
    <ul className="categories flex flex-wrap justify-center gap-2 my-3 sm:justify-start">
      <CategoryTag />
      <CategoryTag />
      <CategoryTag />
      <CategoryTag />
      <CategoryTag />
      <CategoryTag />
      <CategoryTag />
      <CategoryTag />
      <CategoryTag />
      <CategoryTag />
      <CategoryTag />
    </ul>
  );
};

export default CategoriesContainer;
