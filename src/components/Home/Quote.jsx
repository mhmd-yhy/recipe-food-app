import React from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const Quote = () => {
  return (
    <div className='container m-auto px-4 xl:px-36 py-3 text-center mb-5'>
      <div className='text-stone-700 md:px-0 sm:mb-2 lg:text-lg md:max-w-2xl md:m-auto'>
        <BiSolidQuoteAltLeft className='text-2xl' />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus sunt pariatur, deleniti debitis non praesentium minus ad magnam alias reiciendis molestiae asperiores, atque impedit obcaecati quam voluptate aliquam quod?
        <div className='text-end mt-2 font-bold'>Antoni Bourdain</div>
      </div>
    </div>
  );
};

export default Quote;
