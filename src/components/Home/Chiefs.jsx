import React from 'react';
import chef1 from "../../images/chef1.png";
import chef2 from "../../images/chef2.png";
import chef3 from "../../images/chef3.png";
import chef4 from "../../images/chef4.png";
import chef5 from "../../images/chef5.png";
import chef6 from "../../images/chef6.png";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Heading from '../Utility/Heading';
const Chiefs = () => {
  return (
    <div className='container m-auto xl:px-36 py-3 text-center mb-5 px-4 '>
      <Heading title="our top chiefs" />
      <div className='flex flex-wrap sm:grid sm:grid-cols-2 justify-items-center gap-4'>
        <div className='flex items-center gap-3 text-start shadow-sm shadow-neutral-400 w-full'>
          <img src={chef1} alt="" className="rounded-sm w-24 h-28 sm:w-32 md:w-44 lg:w-52 " />
          <div className='text-stone-600'>
            <h2 className='capitalize font-bold text-xl text-stone-700'>juan carlos</h2>
            <div>Recipes: <span className='font-bold text-stone-700 lg:text-lg'>10</span></div>
            <div>Cuisine: <span className='font-bold text-stone-700 lg:text-lg'>Maxican</span></div>
            <ul className='flex gap-2'>
              <Link><FaFacebook className='text-blue-800 text-lg' /></Link>
              <Link><FaTwitter className='text-teal-400 text-lg' /></Link>
              <Link><FaInstagram className='text-red-500 text-lg' /></Link>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-3 text-start shadow-sm shadow-neutral-400 w-full'>
          <img src={chef2} alt="" className="rounded-sm w-24 h-28 sm:w-32 md:w-44 lg:w-52 " />
          <div className='text-stone-600'>
            <h2 className='capitalize font-bold text-xl text-stone-700'>juan carlos</h2>
            <div>Recipes: <span className='font-bold text-stone-700 lg:text-lg'>10</span></div>
            <div>Cuisine: <span className='font-bold text-stone-700 lg:text-lg'>Maxican</span></div>
            <ul className='flex gap-2'>
              <Link><FaFacebook className='text-blue-800 text-lg' /></Link>
              <Link><FaTwitter className='text-teal-400 text-lg' /></Link>
              <Link><FaInstagram className='text-red-500 text-lg' /></Link>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-3 text-start shadow-sm shadow-neutral-400 w-full'>
          <img src={chef3} alt="" className="rounded-sm w-24 h-28 sm:w-32 md:w-44 lg:w-52 " />
          <div className='text-stone-600'>
            <h2 className='capitalize font-bold text-xl text-stone-700'>juan carlos</h2>
            <div>Recipes: <span className='font-bold text-stone-700 lg:text-lg'>10</span></div>
            <div>Cuisine: <span className='font-bold text-stone-700 lg:text-lg'>Maxican</span></div>
            <ul className='flex gap-2'>
              <Link><FaFacebook className='text-blue-800 text-lg' /></Link>
              <Link><FaTwitter className='text-teal-400 text-lg' /></Link>
              <Link><FaInstagram className='text-red-500 text-lg' /></Link>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-3 text-start shadow-sm shadow-neutral-400 w-full'>
          <img src={chef4} alt="" className="rounded-sm w-24 h-28 sm:w-32 md:w-44 lg:w-52 " />
          <div className='text-stone-600'>
            <h2 className='capitalize font-bold text-xl text-stone-700'>juan carlos</h2>
            <div>Recipes: <span className='font-bold text-stone-700 lg:text-lg'>10</span></div>
            <div>Cuisine: <span className='font-bold text-stone-700 lg:text-lg'>Maxican</span></div>
            <ul className='flex gap-2'>
              <Link><FaFacebook className='text-blue-800 text-lg' /></Link>
              <Link><FaTwitter className='text-teal-400 text-lg' /></Link>
              <Link><FaInstagram className='text-red-500 text-lg' /></Link>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-3 text-start shadow-sm shadow-neutral-400 w-full'>
          <img src={chef5} alt="" className="rounded-sm w-24 h-28 sm:w-32 md:w-44 lg:w-52 " />
          <div className='text-stone-600'>
            <h2 className='capitalize font-bold text-xl text-stone-700'>juan carlos</h2>
            <div>Recipes: <span className='font-bold text-stone-700 lg:text-lg'>10</span></div>
            <div>Cuisine: <span className='font-bold text-stone-700 lg:text-lg'>Maxican</span></div>
            <ul className='flex gap-2'>
              <Link><FaFacebook className='text-blue-800 text-lg' /></Link>
              <Link><FaTwitter className='text-teal-400 text-lg' /></Link>
              <Link><FaInstagram className='text-red-500 text-lg' /></Link>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-3 text-start shadow-sm shadow-neutral-400 w-full'>
          <img src={chef6} alt="" className="rounded-sm w-24 h-28 sm:w-32 md:w-44 lg:w-52 " />
          <div className='text-stone-600'>
            <h2 className='capitalize font-bold text-xl text-stone-700'>juan carlos</h2>
            <div>Recipes: <span className='font-bold text-stone-700 lg:text-lg'>10</span></div>
            <div>Cuisine: <span className='font-bold text-stone-700 lg:text-lg'>Maxican</span></div>
            <ul className='flex gap-2'>
              <Link><FaFacebook className='text-blue-800 text-lg' /></Link>
              <Link><FaTwitter className='text-teal-400 text-lg' /></Link>
              <Link><FaInstagram className='text-red-500 text-lg' /></Link>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chiefs;
