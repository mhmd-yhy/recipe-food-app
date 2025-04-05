import React from 'react';
import image1 from "../../images/abote1.jpg";
import { Link } from 'react-router-dom';

const MealCard = () => {
  return (
    <div className="meal rounded-md overflow-hidden shadow-lg border border-neutral-300">
      <img src={image1} alt="" className='w-full min-h-40 md:h-28' />
      <div className='disc px-1 pb-2'>
        <h1 className='font-bold text-neutral-800 my-3'>american cheese</h1>
        <div className="desc text-sm text-stone-700 my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, ex?</div>
        <Link to={"/meals/:id"} className='uppercase text-sm tracking-wide text-pink-700 hover:text-pink-600 duration-500'>view recipe</Link>
      </div>
    </div>
  );
};

export default MealCard;
