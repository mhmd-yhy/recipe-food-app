import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ _id, image, title }) => {
  return (
    <div className="card meal rounded-md overflow-hidden shadow-lg border border-neutral-300 relative">
      <img src={image} alt="" className='w-full min-h-40 md:h-28' />
      <div className='desc text-center absolute z-30 top-full left-1/2 -translate-x-1/2 w-full h-full bg-neutral-800 opacity-95 duration-500'>
        <h1 className='text-base font-bold text-neutral-400 my-3'>{title}</h1>
        <Link to={`/recipes/${_id}`} className='uppercase font-bold text-sm tracking-wide text-pink-700 hover:text-pink-600 duration-500'>view recipe</Link>
      </div>
    </div>
  );
};

export default MealCard;
