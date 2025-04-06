import React from 'react';

const Button = ({ title }) => {
  return (
    <button className='uppercase mb-3 sm:mb-5 font-bold p-2 bg-pink-700 text-stone-200 tracking-wider hover:bg-pink-600 duration-500'>{title}</button>
  );
};

export default Button;
