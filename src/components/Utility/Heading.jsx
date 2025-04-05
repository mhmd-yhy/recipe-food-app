import React from 'react';

const Heading = ({ title }) => {
  return (
    <h1 className='text-3xl font-bold text-neutral-800 mb-3 capitalize sm:text-4xl sm:mb-5 xl:text-5xl'>{title}</h1>
  );
};

export default Heading;
