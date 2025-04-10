import React, { useContext } from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { MealsContext } from '../../api/Api';
const Quote = () => {
  const { UseHomeData } = useContext(MealsContext);
  const { quote } = UseHomeData();
  return (
    <div className='container m-auto px-4 xl:px-36 py-3 text-center mb-5'>
      <div className='text-stone-700 md:px-0 sm:mb-2 lg:text-lg md:max-w-2xl md:m-auto'>
        <BiSolidQuoteAltLeft className='text-2xl' />
        {quote.desc}
        <div className='text-end mt-2 font-bold'>{quote.title}</div>
      </div>
    </div>
  );
};

export default Quote;
