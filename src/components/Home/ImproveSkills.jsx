import React from 'react';
import image4 from "../../images/abote4.jpg";
import Heading from '../Utility/Heading';

const ImproveSkills = () => {
  return (
    <div className='container m-auto xl:px-36 py-3 text-center sm:flex justify-between gap-3 sm:text-start mb-5'>
      <div className="image mb-3 sm:w-1/2">
        <img src={image4} alt="" className='h-72 w-full sm:h-96' />
      </div>
      <div className="desc px-1 sm:w-1/2">
        <Heading title="improve your culinary skills" />
        <ul className='grid grid-cols-2 gap-2 mb-3 text-start sm:block'>
          <li className='text-stone-700 sm:mb-2 lg:text-lg'><span className='p-0.5 bg-pink-700 mr-1'></span>Learn nwe recipes</li>
          <li className='text-stone-700 sm:mb-2 lg:text-lg'><span className='p-0.5 bg-pink-700 mr-1'></span>Experiment with food</li>
          <li className='text-stone-700 sm:mb-2 lg:text-lg'><span className='p-0.5 bg-pink-700 mr-1'></span>Write your own recipes</li>
          <li className='text-stone-700 sm:mb-2 lg:text-lg'><span className='p-0.5 bg-pink-700 mr-1'></span>Know nutrition facts</li>
          <li className='text-stone-700 sm:mb-2 lg:text-lg'><span className='p-0.5 bg-pink-700 mr-1'></span>Get cooking tips</li>
          <li className='text-stone-700 sm:mb-2 lg:text-lg'><span className='p-0.5 bg-pink-700 mr-1'></span>Get ranked</li>
        </ul>
        <div className='mb-3 text-start sm:mb-5'>
          <button className='uppercase font-bold p-2 bg-pink-700 text-stone-200 tracking-wider'>signup now</button>
        </div>
      </div>

    </div>
  );
};

export default ImproveSkills;