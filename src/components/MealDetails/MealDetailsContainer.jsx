import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../../images/abote1.jpg";

const MealDetailsContainer = () => {
  return (
    <div className='sm:flex gap-2'>
      <img src={image1} alt="" className='sm:w-64 lg:w-96 ' />
      <div className="desc">
        <h1 className='flex justify-between my-1 text-lg font-bold text-stone-700 md:text-2xl'>
          <div>Beef Steack</div>
          <div className='text-base sm:text-lg md:text-2xl'>category</div>
        </h1>
        <div className='Ingredients '>
          <h2 className='font-bold text-stone-700 my-1 capitalize md:text-lg'>ingredients :</h2>
          <ul className='grid grid-cols-2 gap-2 mb-3'>
            <li className='text-stone-700 sm:mb-2 lg:text-lg'><span className='p-0.5 bg-pink-700 mr-1'></span> Ingredient1 (Measure)</li>
            <li className='text-stone-700 sm:mb-2 lg:text-lg'><span className='p-0.5 bg-pink-700 mr-1'></span> Ingredient2 (Measure)</li>
            <li className='text-stone-700 sm:mb-2 lg:text-lg'><span className='p-0.5 bg-pink-700 mr-1'></span> Ingredient3 (Measure)</li>
            <li className='text-stone-700 sm:mb-2 lg:text-lg'><span className='p-0.5 bg-pink-700 mr-1'></span> Ingredient4 (Measure)</li>
            <li className='text-stone-700 sm:mb-2 lg:text-lg'><span className='p-0.5 bg-pink-700 mr-1'></span> Ingredient5 (Measure)</li>
            <li className='text-stone-700 sm:mb-2 lg:text-lg'><span className='p-0.5 bg-pink-700 mr-1'></span> Ingredient6 (Measure)</li>
          </ul>
        </div>
        <div className="Prepare">
          <h2 className='font-bold text-stone-700 my-1 capitalize md:text-lg'>How to Prepare :</h2>
          <p className='text-sm text-stone-700 mb-3 sm:text-base sm:mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt quo modi hic corrupti doloremque reprehenderit quaerat, optio inventore nemo fuga eum tenetur corrupti doloremque reprehenderit quaerat, optio inventore nemo fuga eum</p>
        </div>

        <Link className="link">
          <button className='uppercase font-bold p-2 bg-pink-700 text-stone-200 tracking-wider'>read more
          </button>
        </Link>

      </div>
    </div>
  );
};

export default MealDetailsContainer;
