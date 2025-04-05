import React, { useEffect, useState } from 'react';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { RiCloseLargeFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(0);

  const toggleMenu = () => setShowMenu(!showMenu);
  useEffect(() => {
    const handleScroll = () => { setScroll(window.scrollY); };
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`py-2 px-3 shadow-md shadow-neutral-300 bg-white w-full ${scroll > 20 ? "fixed top-0" : ""}`}>
      <div className='container m-auto xl:px-36 flex justify-between items-center'>
        <div className="logo text-2xl font-extrabold text-pink-700 sm:text-5xl">F<span className='text-neutral-800'>oo</span>diesDish</div>

        <div onClick={toggleMenu} className={`icon cursor-pointer text-3xl z-50 ${showMenu ? "text-stone-200" : "text-neutral-800"} sm:hidden`}>
          {showMenu ? <RiCloseLargeFill /> : <HiOutlineMenuAlt3 />}
        </div>

        <div className={`fixed top-0 w-40 min-h-screen sm:text-lg text-neutral-800 bg-white z-50 ${showMenu ? "left-0" : "-left-full"} duration-500 sm:static sm:w-auto sm:min-h-fit`}>
          <ul className='sm:flex gap-2'>
            <NavLink to="/" className={({ isActive }) => `flex items-center gap-1 font-bold p-2 sm:border-0 ${isActive ? "border-l-8 border-pink-700 text-pink-700" : ""}`} onClick={() => setShowMenu(false)}>
              <FaHome className='sm:hidden' />Home
            </NavLink>
            <NavLink to="/recipes" className={({ isActive }) => `flex items-center gap-1 font-bold p-2 sm:border-0 ${isActive ? "border-l-8 border-pink-700 text-pink-700" : ""}`} onClick={() => setShowMenu(false)}>
              <BiSolidFoodMenu className='sm:hidden' />Recipes
            </NavLink>
          </ul>
        </div>

        <div className={`overflow fixed top-0 bg-neutral-800 opacity-40 z-40 w-full min-h-screen ${showMenu ? "left-0" : "-left-full"} sm:hidden `} onClick={() => setShowMenu(false)}></div>
      </div>
    </div>
  );
};

export default Header;