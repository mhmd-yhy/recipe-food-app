
import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MealsContext } from '../../api/Api';
const SearchInput = () => {
  const { getMeals_BySearchInput } = useContext(MealsContext);
  const [searchValue, setSearchValue] = useState("");
  const handel_InputChange = (e) => { setSearchValue(e.target.value); };
  const handelSearch = () => { getMeals_BySearchInput(`search.php?s=${searchValue}`); };
  return (
    <div className="serach flex justify-end my-3">
      <div className='rounded-md overflow-hidden flex items-center bg-pink-700 hover:bg-pink-600 duration-500'>
        <input value={searchValue} onChange={handel_InputChange} type="text" placeholder='Serach' className='pl-2 py-0.5 text-stone-700 outline-none border-2 border-neutral-300 placeholder:text-neutral-300 sm:w-64' />
        <div onClick={handelSearch} className="icon px-2 text-neutral-300 cursor-pointer"><FaSearch /></div>
      </div>
    </div>
  );
};

export default SearchInput;
