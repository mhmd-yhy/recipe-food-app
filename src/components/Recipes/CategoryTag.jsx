import React from 'react';
const CategoryTag = ({ title, getMeals_ByCategory }) => {
  return (
    <li onClick={() => getMeals_ByCategory(`filter.php?c=${title}`)} className='bg-pink-700 text-white px-2 py-0.5 rounded-xl cursor-pointer hover:bg-pink-600 duration-500'>
      {title}
    </li>
  );
};

export default CategoryTag;
