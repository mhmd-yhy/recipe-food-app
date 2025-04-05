import React from 'react';
import { FaSearch } from 'react-icons/fa';
const SearchInput = () => {
  return (
    <div className="serach flex justify-end my-3">
      <div className='rounded-md overflow-hidden flex items-center bg-pink-700 hover:bg-pink-600 duration-500'>
        <input type="text" placeholder='Serach' className='pl-2 py-0.5 text-stone-700 outline-none border-2 border-neutral-300 placeholder:text-neutral-300 sm:w-64' />
        <div className="icon px-2 text-neutral-300 cursor-pointer"><FaSearch /></div>
      </div>
    </div>
  );
};

export default SearchInput;
